import React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import HeroStyled from '../components/HeroStyled/HeroStyled'

const blog = ({ data }) => {
    // console.log(props)
    // this data comes from props, console.log(props) to see

  return (
    <Layout>
      hello from blog page
      
    </Layout>
  )
}

export default blog


export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`