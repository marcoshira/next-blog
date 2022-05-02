import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFile {
    url
    alternativeText
  }

  fragment menuLink on ComponentMenuBlogMenuLink {
    link
    text
    newTab
    id
  }

  fragment category on Category {
    displayName
    slug
  }

  fragment tag on Tag {
    displayName
    slug
  }

  fragment author on Author {
    displayName
    slug
  }

  fragment settings on Setting {
    blogName
    blogDescription
    logo {
      data {
        id
        attributes {
          ...image
        }
      }
    }
    menuLink {
      ...menuLink
    }
    html
  }

  fragment posts on Post {
    title
    slug
    excerpt
    allowComments
    createdAt
    updatedAt
    tags {
      data {
        id
        attributes {
          ...tag
        }
      }
    }
    categories {
      data {
        id
        attributes {
          ...category
        }
      }
    }
    author {
      data {
        id
        attributes {
          ...author
        }
      }
    }
    cover {
      data {
        id
        attributes {
          ...image
        }
      }
    }
    content
  }
`;
