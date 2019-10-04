import React from "react"
import Layout from "../components/layout"
import {graphql, useStaticQuery} from 'gatsby'
import Images from '../examples/images'





const blog = () => {
  
  return (
    <Layout>
      <Images/> 
    </Layout>
  )
}





export default blog
