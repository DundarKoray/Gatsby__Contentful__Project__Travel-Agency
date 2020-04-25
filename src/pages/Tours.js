import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import HeroStyled from "../components/HeroStyled/HeroStyled"

const tours = (props) => {
  return (
    <Layout>
      <HeroStyled
        img={props.data.backgroundImage.childImageSharp.fluid}
        fullSize="false"
      />
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
