import { gql } from '@apollo/client';

export const GET_MEMBERS = gql`
  query AllMembers {
    members {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              sourceUrl(size: MEDIUM)
            }
          }
          memberFields {
            position
            exMember
          }
        }
      }
    }
  }
`;

export const GET_ABOUT = gql`
  query AboutPage {
    pageBy(uri: "about") {
      id
      title
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`;
