import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const PageQuery = ({ data }) => {
    // console.log(props)
    // this data comes from props, console.log(props) to see

  return (
    <Layout>
      hello from blog page
      <h1>title: {data.site.siteMetadata.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default PageQuery