const { UserInputError } = require("apollo-server-express");
const { User } = require('../models');

const resolvers = {
    Query: {
      users: async (parent, { username }) => {
        const params = username ? { username } : {};
        return User.find();
      },
    }
  };
  
  module.exports = resolvers;