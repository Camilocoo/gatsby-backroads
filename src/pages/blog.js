import React from "react"
import Layout from "../components/layout"
import {graphql, useStaticQuery} from 'gatsby'
import Images from '../examples/images'

import StyledHero from "../components/StyledHero"





const blog = ({data}) => {
  const {aboutImage:{childImageSharp:{fluid}}}= data
  return (
    <Layout>
      <StyledHero img={fluid}/>
    </Layout>
  )
}

export const getImage = graphql`
{
  aboutImage:file(relativePath:{eq:"blogBcg.jpeg"}){
  	childImageSharp {
  	 fluid(maxWidth:600){
      ...GatsbyImageSharpFluid_withWebp
    }
  	}
  }
}

`



export default blog
