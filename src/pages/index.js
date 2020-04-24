import React from "react"
import Layout from "../components/Layout"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import SimpleHero from "../components/SimpleHero/SimpleHero"
import HeroStyled from "../components/HeroStyled/HeroStyled"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Services from "../components/Services/Services"
import { graphql } from "gatsby"

export default (props) => (
  <Layout>
    <HeroStyled fullSize="true" img={props.data.backgroundImage.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      >
        <AniLink fade className="btn-white" to="/tours">
          explore tours
        </AniLink>
      </Banner>
    </HeroStyled>
    <About />
    <Services />
  </Layout>
)

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
