const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Closet {
    _id: ID!
    createdBy: String
    closetName: String 
    articles: [Article]!
  }

  type Article{
    _id: ID! 
    clothingType: String 
    color: String
    occassion: String
    material: String
    createdBy: String
    closetId: ID!
    
  }

  type User {
    _id: ID!
    username: String
    email: String
    password: String
    closets: [Closet]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    # users: [User]
    user(username: String!): User
    me: User
    closetsByUser(username: String!): [Closet]
    oneCloset(closetId: ID!): Closet
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCloset(closetName: String!) : Closet
    addArticle(closetId: ID!, clothingType: String!, color: String!, occassion: String!, material: String!): Article
    removeCloset(closetId: ID!): Closet
    removeArticle(articleId: ID!): Article
    updateCloset(closetId: ID!, closetName: String!): Closet
    updateArticle(articleId: ID!, clothingType: String!, color: String!, occasion: String!, material: String!): Article
    
  }

`;

module.exports = typeDefs;
