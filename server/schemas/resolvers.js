const { AuthenticationError } = require('apollo-server-express');
const { User, Article } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }, context) => {
      return await User.findOne({ username }).select("-password");
    },
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      return User.findOne({ _id: context.user._id }).select("-password").populate('articles');
    },
    articles: async (parent, { clothingType, color, occasion, material }, context) => {
      const params = {};

      if (clothingType) {
        params.clothingType = clothingType;
      }

      if (color) {
        params.color = color;
      }

      if (occasion) {
        params.occasion = occasion;
      }

      if (material) {
        params.material = material;
      }

      return await Article.find(params);
    },
    oneArticle: async (parent, {articleId}, context) => {
      return await Article.findOne({ _id: articleId }).populate('article');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await (await User.create({ username, email, password })).select("-password");
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addArticle: async (parent, newItem, { user }) => {
      if(!user) {
        throw new AuthenticationError('You need to be logged in!');
    }
      const article = await Article.create(newItem)
      console.log(newItem);
        await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { articles: article._id }},
          {
            new: true,
            runValidators: true,
          }
        );

        return article;
    },
    removeArticle: async (parent, { articleId }, context) => {
      if (context.user) {
        const article = await Article.findOneAndDelete({
          _id: articleId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { articles: article._id } }
        );

        return article;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  updateArticle: async (parent, { articleId, clothingType, color, occasion, material, imageURL }, context) => {
    if (context.user) {
      return Article.findOneAndUpdate({
        _id: articleId,
        clothingType,
        color,
        occasion,
        material,
        imageURL
      },
      {
        new: true,
        runValidators: true,
      });
    }
    throw new AuthenticationError('You need to be logged in!');
  }
},
};

module.exports = resolvers;
