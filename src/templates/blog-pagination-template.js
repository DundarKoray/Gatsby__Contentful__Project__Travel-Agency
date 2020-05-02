import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "./blog-template.css"
import BlogCard from "../components/Blog/BlogCard"
import TitleStyled from "../components/TitleStyled"

const BlogPaginationTemplate = props => {
  // console.log(props.data)
  const { data } = props

  return (
    <section className={styles.blog}>
        <TitleStyled title="latest" subtitle="posts" />
        <div className={styles.center}>
            {data.posts.edges.map(({node}) =>{
                return <BlogCard key={node.id} blog={node} />
            })}
        </div>
    </section>
  ) 
}

export default BlogPaginationTemplate

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
