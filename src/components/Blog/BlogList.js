import React from "react"
import BlogCard from "./BlogCard"
import TitleStyled from "../TitleStyled/TitleStyled"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./blog.module.css"

// it is sorted by published date however we wouldnt have pubslished field, contentful provides createdAt field that we could use.

const getPosts = graphql`
  {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          createdAt(formatString: "LLLL")
          title
          slug
          id: contentful_id
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

const BlogList = () => {
    // const data = useStaticQuery(getPosts)
    // console.log(data.posts);

    const { posts:{edges}} = useStaticQuery(getPosts)
    console.log(edges)

    
  return (
    <section className={styles.blog}>
      <TitleStyled title="our" subtitle="blogs" />
      <div className={styles.center}>
        {edges.map(item => {
            return <BlogCard key={item.node.id} blog={item.node} />
        })}  
      </div>
    </section>
  )
}

export default BlogList
