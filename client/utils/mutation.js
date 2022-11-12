import { gql } from '@apollo/client';

export const CREATE_ARTICLE = gql`
  mutation createArticle($tech1: String!, $tech2: String!) {
    createArticle(clothingType: $clothingType,color: $color,occasion:$occasion,material:$material,imageURL:$imageURL) {
      _id
      clothingType
      color
      occasion
      material
      imageURL
    }
  }
`;