import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  # query GET_ALL {
  #   setting {
  #     data {
  #       attributes {
  #         ...settings
  #       }
  #     }
  #   }
  #   posts {
  #     data {
  #       id
  #       attributes {
  #         ...posts
  #       }
  #     }
  #   }
  # }

  # query GET_SETTINGS {
  #   setting {
  #     data {
  #       attributes {
  #         ...settings
  #       }
  #     }
  #   }
  # }

  query GET_POSTS(
    $categorySlug: String
    $postSlug: String
    $postSearch: String
    $authorSlug: String
    $tagSlug: String
    $sort: [String] = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    posts(
      sort: $sort
      pagination: { limit: $limit, start: $start }
      filters: {
        slug: { eq: $postSlug }
        author: { slug: { eq: $authorSlug } }
        tags: { slug: { eq: $tagSlug } }
        categories: { slug: { eq: $categorySlug } }
        title: { contains: $postSearch }
      }
    ) {
      data {
        id
        attributes {
          ...posts
        }
      }
    }
    setting {
      data {
        attributes {
          ...settings
        }
      }
    }
  }
`;
