import React from 'react';
import {useStaticQuery, graphql} from "gatsby"
// import { Container } from './styles';

export default function BlogPost() {

    const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
          frontmatter {
            background
            title
          }
          html
        }
      }
      `

    const post = query.markdownRemark
  return (
    <>
        <h1>{post.frontmatter.title}</h1>
    </>
  );
}
