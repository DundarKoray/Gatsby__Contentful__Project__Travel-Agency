import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styles from "./day.module.css"

const Day = props => {
    console.log(props)

  const [showInfo, setInfo] = useState(false)
  // if showInfo is false, <p>{props.info}</p> wont show

  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
    // give me the previous value and return opposite
  }

  return (
    <article className={styles.day}>
      <h4>
        {props.day}
        <button onClick={toggleInfo} className={styles.btn}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo ? <p>{props.info}</p> : null}
    </article>
  )
}

export default Day
