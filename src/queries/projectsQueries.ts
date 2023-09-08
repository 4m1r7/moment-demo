import { gql } from '@apollo/client';

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

export const GET_ROUTES = gql`
  query ProjectRoutes {
    projects(first: 100) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const GET_PROJECTS = gql`
  query AllProjects {
    projects(first: 100) {
      edges {
        node {
          id
          title
          uri
          projectFields {
            coverInfo
            type
          }
          featuredImage {
            node {
              sourceUrl(size: MEDIUM)
            }
          }
        }
      }
    }
  }
`;

export const GET_PROJECT_DATA = gql`
  query ProjectData($slug: String!) {
    projectBy(slug: $slug) {
      id
      title
      projectFields {
        description
        info
        projectPhotos {
          mediaItemUrl
        }
        relatedProjects {
          ... on Project {
            id
            title
            uri
            projectFields {
              coverInfo
            }
            featuredImage {
              node {
                sourceUrl(size: MEDIUM)
              }
            }
          }
        }
      }
    }
  }
`;
