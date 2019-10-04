import React from "react"
import Layout from "../components/layout"
import {graphql, useStaticQuery} from 'gatsby'
import StyledHero from "../components/StyledHero"
export default function contact({data}) {
  const {aboutImage:{childImageSharp:{fluid}}}= data
  return( 
    <Layout>
    <StyledHero img={fluid}>
    Helo from contacts
    </StyledHero>
    </Layout>

  )
  

}
export const getImage = graphql`
{
  aboutImage:file(relativePath:{eq:"connectBcg.jpeg"}){
  	childImageSharp {
  	 fluid(maxWidth:600){
      ...GatsbyImageSharpFluid_withWebp
    }
  	}
  }
}

`