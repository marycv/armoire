import { gql } from '@apollo/client';

export const ADD_ARTICLE = gql`
  mutation addArticle($clothingType: String!, $color: String!,$occasion:String,$material:String,$imageurl:String) {
    addArticle(clothingType: $clothingType,color: $color,occasion:$occasion,material:$material,imageURL:$imageURL) {
      _id
      clothingType
      color
      occasion
      material
      imageURL
    }
  }
`;