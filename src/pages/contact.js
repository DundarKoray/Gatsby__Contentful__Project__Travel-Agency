import React from 'react';
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import HeroStyled from '../components/HeroStyled/HeroStyled'

const contact = () => {
    return (
        <Layout>
            hello from contact
        </Layout>
    );
};

export default contact;

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