const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Article{
    _id: ID! 
    clothingType: String 
    color: String
    occassion: String
    material: String
    createdBy: String
   imageURL: String
  }

  type User {
    _id: ID!
    username: String
    email: String
    password: String
    # closetName: String
    articles: [Article]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {String
    # users: [User]
    user(username: String!): User
    me: User
    articles (clothingType: String, color: String, occasion: String, material: ,imageURL:Object): [Article]
    oneArticle(articleId: ID!): Article
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addArticle(clothingType: String!, color: String!, occassion: String!, material: String!,imageURL: Object!): Article
    removeArticle(articleId: ID!): Article
    # updateCloset(closetId: ID!, closetName: String!): User
    updateArticle(articleId: ID!, clothingType: String, color: String, occasion: String, material: String, imageURL: String): Article
    
  }

`;

module.exports = typeDefs;
