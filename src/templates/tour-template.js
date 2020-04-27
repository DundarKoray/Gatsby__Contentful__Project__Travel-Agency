import React from "react"
import { graphql } from "gatsby"

const Template = ({data}) => {

return <h1>{data.tour.name}</h1>
}

//page query and $slug variable name has to be exactly same in gatsby-node.js context section

export const query = graphql`
  query($slug: String!) {
    tour:contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`

export default Template
