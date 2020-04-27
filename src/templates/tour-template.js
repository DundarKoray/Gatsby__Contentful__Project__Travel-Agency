import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import HeroStyled from "../components/HeroStyled/HeroStyled"
import styles from "./template.module.css"
import Image from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Template = ({ data }) => {
  // console.log(props.data.tour.name)

  // destructuring data.tour
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour

  // first image and then the rest
  const [mainImage, ...tourImages] = images
  // console.log("first image", mainImage)
  // console.log("rest of the images", tourImages)

  return (
    <Layout>
      <HeroStyled fullSize="false" img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return <Image key={index} fluid={item.fluid} alt="single tour" />
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from {price}€
            </p>
            <p>
              <FaMap className={styles.icon} />{country}
            </p>
            <h4>starts on : {start}</h4>
            <h4>duration : {days} days</h4>
            <p className={styles.desc}>{description}</p>
            <div className={styles.journey}>
            <h2>daily schedule</h2>
              {journey.map((item, index) => {
                return <Day key={index} day={item.day} info={item.info} />
              })}
            </div>
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

//page query and $slug variable name has to be exactly same in gatsby-node.js context section

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Template
