import { gql } from '@apollo/client';

export const ITEMS_QUERY = gql`
  query ITEMS {
    items {
      id
      title
      author
      image
      content
      category {
        title
        id
      }
    }
  }
`;
