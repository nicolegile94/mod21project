const { UserInputError } = require("apollo-server-express");
const { User } = require('../models');

const resolvers = {
    Query: {
      users: async (parent, { username }) => {
        const params = username ? { username } : {};
        return User.find();
      },
    },
    Mutation: {
      login: async () => {

      },
      addUser: async () => {

      },
      saveBook: async () => {

      },
      removeBook: async () => {
        
      }
    }
  };
  
  module.exports = resolvers;