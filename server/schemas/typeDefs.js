const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Closet {
    _id: ID
    createdBy: User
    articles: [Article]
    closetName: String 
  }

  type Article{
    clothing_type: String 
    color: String
    occassion: String
    material: String
    _id: ID! 
    createdBy: User
  }

  type User {
    _id: ID!
    username: String
    email: String
    password: String
    closets: [Closet]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  # type Mutation {
  #   addUser(username: String!, email: String!, password: String!): Auth
  #   login(email: String!, password: String!): Auth
  #   addArticle(clothing_type: String!, color: String, occassion: String, material: String, createdBy: User): Article
  #   addCloset(name: String!) : Closet
  # }
`;

module.exports = typeDefs;
