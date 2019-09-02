/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


const { createFilePath } = require(`gatsby-source-filesystem`)
const  path  = require("path")
 //Adiciona o campo SLUG para cada post
exports.onCreateNode = ({ node, getNode, actions }) => { 
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {   //Verifica o processamento de markdown
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,  //a partir do documento de markdown localizado no post, ele cria o slug sem datas
    })
  }
}



exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/template/blog-post.js`)
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    return graphql(`
    query Post {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        throw result.errors
      }
  
      // Create blog post pages.
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          // Path for this page — required
          path: `${node.fields.slug}`,
          component: blogPostTemplate,
          context: {
              slug: node.fields.slug
            // Add optional context data to be inserted
            // as props into the page component..
            //
            // The context data can also be used as
            // arguments to the page GraphQL query.
            //
            // The page "path" is always available as a GraphQL
            // argument.
          },
        })
      })
    })
  }