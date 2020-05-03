import React from "react"
import Tour from "../Tours/Tour"
import TitleStyled from "../TitleStyled/TitleStyled"
import styles from "./featuredTours.module.css"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getFeaturedTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          start
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const response = useStaticQuery(getFeaturedTours)
  //   console.log(response)

  const featuredTours = response.featuredTours.edges
//   console.log(featuredTours)

  return (
    <section className={styles.featuredTours}>
      <TitleStyled title="popular" subtitle="tours" />
      <div className={styles.center}>
        {featuredTours.map(({ node }) => {
          //   console.log(node)
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
