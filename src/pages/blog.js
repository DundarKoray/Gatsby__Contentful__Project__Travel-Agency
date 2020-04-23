import React from "react"
import Layout from "../components/Layout"
import ImagePractice from '../examples/ImagePractice'

const blog = ({ data }) => {
    // console.log(props)
    // this data comes from props, console.log(props) to see

  return (
    <Layout>
      hello from blog page
      <ImagePractice/>
    </Layout>
  )
}



export default blog
