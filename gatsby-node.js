const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }

      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  // amount of posts
  const post = data.posts.edges;

  // post per page
  const postPerPage = 3;

  // how mang pages
  const numPages = Math.ceil(posts.length/postPerPage);

  Array.from({length: numPages}).forEach((_, i) =>{
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i+1}`,
      component: path.resolve('./src/templates/blog-pagination-template.js'),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  
}
