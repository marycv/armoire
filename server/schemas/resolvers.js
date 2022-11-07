const { AuthenticationError } = require('apollo-server-express');
const { User, Closet, Article } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find().populate('closets');
    // },
    user: async (parent, { username }, context) => {
      return User.findOne({ username }).populate("closets");
    },
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      return User.findOne({ _id: context.user._id })
        .select("-password")
    },
    closetsByUser: async (parent, { createdBy }, context) => {
      return Closet.find({ _id: context.user._id});
    },
    oneCloset: async (parent, {closetId}, context) => {
      return Closet.findOne({ _id: closetId });
    },
    // articlesByUser: async (parent, args, context) => {
    //   return await Article.find({ createdBy: context.user.username });
    // },
    // oneArticle: async (parent, {articleId}, context) => {
    //   return await Article.findOne({ _id: articleId });
    // },
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
    addCloset: async (parent, { closetName }, context) => {
      if (context.user) {
        const closet = await Closet.create({ 
          closetName,
          createdBy: context.user.username,
         });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { closet: closet._id } }
        );

        return closet;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addArticle: async (parent, { closetId, clothingType, color, occasion, material }, context) => {
      if (context.user) {
        return Closet.findOneAndUpdate(
          { _id: closetId },
          {
            $addToSet: {
              articles: { clothingType, color, occasion, material }
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeCloset: async (parent, { closetId }, context) => {
      if (context.user) {
        const closet = await Closet.findOneAndDelete({
          _id: closetId,
          createdBy: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { closets: closet._id } }
        );

        return closet;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeArticle: async (parent, { articleId }, context) => {
      if (context.user) {
        const article = await Article.findOneAndDelete({
          _id: articleId,
        });

        await Closet.findOneAndUpdate(
          { _id: context.closet._id },
          { $pull: { articles: article._id } }
        );

        return article;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateCloset: async (parent, { closetId, closetName }, context) => {
      if (context.user) {
        return Closet.findOneAndUpdate({ 
          _id: closetId,
          closetName,
      },
      {
        new: true,
        runValidators: true,
      });
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
