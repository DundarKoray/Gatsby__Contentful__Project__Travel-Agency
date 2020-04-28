import React from "react"
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import HeroStyled from '../components/HeroStyled/HeroStyled'
import BlogList from '../components/Blog/BlogList'

const blog = ({ data }) => {
    // console.log(props)
    // this data comes from props, console.log(props) to see
    // ({data}) destructuring so we dont need to write props

  return (
    <Layout>
      <HeroStyled
        img={data.backgroundImage.childImageSharp.fluid}
        fullSize="false"
      />
      <BlogList />
    </Layout>
  )
}

export default blog


export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`