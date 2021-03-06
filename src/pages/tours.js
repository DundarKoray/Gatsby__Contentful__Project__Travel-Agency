import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import HeroStyled from "../components/HeroStyled/HeroStyled"
import Tours from "../components/Tours/Tours"
import SEO from '../components/SEO/SEO'


const tours = (props) => {
  return (
    <Layout>
      <SEO title="Tours" />
      <HeroStyled
        img={props.data.backgroundImage.childImageSharp.fluid}
        fullSize="false"
      />
      <Tours />
    </Layout>
  )
}

export default tours

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
