const { AuthenticationError } = require('apollo-server-express');
const { User, Article } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('articles');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('articles');
    },
    oneArticle: async (parent, {articleId}, context) => {
      return await Article.findOne({ _id: articleId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        throw User.findOne({ _id: context.user._id }).populate('articles');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
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
    addArticle: async (parent, { clothingType, color, occassion, material }, context) => {
      if (context.user) {
        const article = await Article.create({
          clothingType,
          color,
          occassion,
          material,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { articles: article._id }},
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
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
  updateArticle: async (parent, { articleId, clothingType, color, occasion, material }, context) => {
    if (context.user) {
      return Article.findOneAndUpdate({
        _id: articleId,
        clothingType,
        color,
        occasion,
        material,
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
