const { AuthenticationError } = require('apollo-server-express');
const { User, Closet, Article } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    closetsByUser: async (parent, args, context) => {
      return await Closet.find({ createdBy: context.user.username });
    },
    oneCloset: async (parent, {closetId}, context) => {
      return await Closet.findOne({ _id: closetId }).populate('article')
    },
    articlesByUser: async (parent, args, context) => {
      return await Article.find({ createdBy: context.user.username });
    },
    oneArticle: async (parent, {articleId}, context) => {
      return await Article.findOne({ _id: articleId });
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
  },
};

module.exports = resolvers;
