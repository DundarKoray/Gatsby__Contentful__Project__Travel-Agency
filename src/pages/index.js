import React from "react"
import Layout from "../components/Layout"
// import SimpleHero from "../components/SimpleHero/SimpleHero"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import HeroStyled from "../components/HeroStyled/HeroStyled"
import Banner from "../components/Banner/Banner"
import About from "../components/About/About"
import Services from "../components/Services/Services"
import FeaturedTours from "../components/FeaturedTours/FeaturedTours"
import SEO from "../components/SEO/SEO"

export default (props) => (
  <Layout>
    <SEO title="home" description="we offer exciting tours in TURKIYE!" />
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
    <FeaturedTours />
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
