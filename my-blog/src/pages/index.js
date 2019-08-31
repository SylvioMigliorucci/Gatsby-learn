import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem";

const IndexPage = () => {
  //allMarkdownRemark tem q ser obrigatoriamente o nome da constante para o uso correto do array allMarkdownRemark.edges
  const {allMarkdownRemark} = useStaticQuery(graphql`

    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              background
              category
              description
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              title
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
    
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: {
          frontmatter: { background, category, description, date, title},
          timeToRead,
          fields: {slug}
        }
      }) => (

         <PostItem 
            slug={slug}
            category={category}
            date={date}
            background={background}
            description={description}
            title={title}
            timeToRead={timeToRead}

         
         />
      ))}

    </Layout>
  )
}

export default IndexPage
