import React from "react"
import styles from "./blog-card.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  // console.log(data.blog)
  // console.log(blog)
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image
          fluid={blog.image.fluid}
          className={styles.img}
          alt="single post"
        />
        <AniLink fade className={styles.link} to={`/blog/${blog.slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}>{blog.published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{blog.title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
