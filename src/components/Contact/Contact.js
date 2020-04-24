import React from "react"
import TitleStyled from "../TitleStyled/TitleStyled"
import styles from "./contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <TitleStyled title="contact" subtitle="us" />
      <div className={styles.center}>
        <form className={styles.form}>
          {/* name */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="name"
            />
          </div>

          {/* email */}
          <div>
            <label htmlFor="email">Email</label>

            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email"
            />
          </div>

          {/* message */}
          <div>
            <label htmlFor="message">Message</label>

            <textarea
              name="message"
              id="message"
              className={styles.formControl}
              rows="10"
              placeholder="message"
            />
          </div>

          {/* submit */}
          <div>
            <input type="submit" value="send" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
