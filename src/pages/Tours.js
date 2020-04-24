import React, { Component } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import HeroStyled from "../components/HeroStyled/HeroStyled"

class tours extends Component {
  render() {
    return (
      <Layout>
        <HeroStyled
          img={this.props.data.backgroundImage.childImageSharp.fluid}
          fullSize="false"
        />
      </Layout>
    )
  }
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
