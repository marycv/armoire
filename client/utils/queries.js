import {gql} from '@apollo/client';

export const QUERY_ARTICLE = gql`
  query article($_id: String) {
    article(_id: $_id) {
      _id
      clothingType
      color
      occasion
      material
      # imageURL
    }
  }
`;