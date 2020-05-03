import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import HeroStyled from "../components/HeroStyled/HeroStyled"
import Contact from "../components/Contact/Contact"
import SEO from '../components/SEO/SEO'


const contact = props => {
  // console.log(props.data)
  return (
    <Layout>
      <SEO title="Contact" />
      <HeroStyled
        img={props.data.backgroundImage.childImageSharp.fluid}
        fullSize="false"
      />
      <Contact />
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
