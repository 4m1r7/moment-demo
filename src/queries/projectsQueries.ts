import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query AllProjects {
    projects {
      edges {
        node {
          id
          title
          uri
          projectFields {
            info
            coverInfo
            description
            type
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

export const GET_PAGE_DATA = gql`
  query ProjectsPage {
    pageBy(uri: "projects") {
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`;
