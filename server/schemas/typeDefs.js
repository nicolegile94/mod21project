const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: Int
    authors: [String]
    description: String
    title: String
    image: Img
    link: Link
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    me(username: String): [User]
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: Array!, description: String!, title: String!, bookId: Int!, image: Int!, link: String!): User
    removeBook(bookId: Int!) :  User
  }
`;
module.exports = typeDefs;