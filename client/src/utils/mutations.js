import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const ADD_ARTICLE = gql`
  mutation addArticle(
    $clothingType: String!
    $color: String!
    $occassion: String!
    $material: String!
  ) {
    addArticle(
      clothingType: $clothingType
      color: $color
      occassion: $occassion
      material: $material
    ) {
      _id
      clothingType
      color
      occassion
      material
    }
  }
`
