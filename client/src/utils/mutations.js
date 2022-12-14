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

`;

export const ADD_GARMENT = gql `
mutation Mutation($clothingType: String!, $color: String!, $occassion: String!, $material: String!, $imageUrl: String!) {
  addArticle(clothingType: $clothingType, color: $color, occassion: $occassion, material: $material, imageURL: $imageUrl) {
    imageURL
  }
}
`
// export const Add_Article =gql`
//  mutation addArticle($clothingType: String!,$color: String!,$occasion:String!,$material:String!,$imageURL:String){
//   addArticle(clothingType:$clothingType, color:$color, occasion:$occasion,material:$material,$imageURL:imageURL)
//  }


//`


export const ADD_ARTICLE = gql`
  mutation Mutation($clothingType: String, $color: String, $occassion: String, $imageUrl: String, $material: String) {
  addArticle(clothingType: $clothingType, color: $color, occassion: $occassion, imageURL: $imageUrl, material: $material) {
    clothingType
    color
    imageURL
    material
    occassion
  }
}
`

// export const ADD_ARTICLE = gql`
//   mutation addArticle($newItem: articleInput) {
//     addArticle(newItem: $newItem) {
//       _id
//       clothingType
//       color
//       occassion
//       material
//     }
//   }
// `;