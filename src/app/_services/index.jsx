import {request, gql} from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async() => {
    const endpoint = graphqlAPI;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query:`
        query Assets {
          postsConnection {
            edges {
              node {
                author {
                  bio
                  id
                  name
                  photo {
                    url
                  }
                }
                createdAt
                slug
                title
                excerpt
                featuredImage {
                  url
                }
                categories {
                  name
                  slug
                }
              }
            }
          }
        }        
        `
      })
    });
    
    const data = await response.json();
    //console.log(data);
    return data.data.postsConnection; 
}

export const getRecentPosts = async () => {
  const response = await fetch(graphqlAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query:`
      query GetRecentPosts() {
        posts(
          orderBy: createdAt_ASC
          last: 3
          ) {
            title
            featuredImage {
              url
            }
            createdAt
            slug  
          }
      }        
      `
    })
  });
  const data = await response.json();
  return data.data.posts;
}

export const GetPostContent = async (slug) => {
  const response = await fetch(graphqlAPI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query:`
      query GetPostContent($slug: String!) {
        post(where: {slug: $slug}) {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
          content {
            raw
          }
        }
      }        
      `,
      variables: {
        slug: slug
      }
    })
  });
  const data = await response.json();
  return data.data.post;
}