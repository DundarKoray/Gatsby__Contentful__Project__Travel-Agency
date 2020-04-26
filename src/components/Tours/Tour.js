import React from "react"
import Image from "gatsby-image"
import styles from "./tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Tour = props => {
  // console.log(props.tour.images)

  let mainImage = props.tour.images[0].fluid
  // console.log(mainImage)

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade className={styles.link} to={`/tours/${props.tour.slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{props.tour.name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {props.tour.country}
          </h4>
        </div>
        <div className={styles.details}>
          <h6>{props.tour.days} days</h6>
          <h6>from {props.tour.price}</h6>
        </div>
      </div>
    </article>
  )
}

export default Tour
