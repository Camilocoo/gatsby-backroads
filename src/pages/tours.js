import React, { Component } from "react"
import Layout from "../components/layout"
import Header from '../examples/Header'
import ReagularHeader from '../examples/RegularHeader'
import {graphql, useStaticQuery} from 'gatsby'
import StyledHero from "../components/StyledHero"


export default class tours extends Component {
  
  render() {
   
    const {aboutImage:{childImageSharp:{fluid}}}= this.props.data
    return(
      <Layout>
          <StyledHero img={fluid}/>
          <Header/>
          <ReagularHeader/>
      </Layout>
    )
   
  }
}
export const getImage = graphql`
{
  aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
  	childImageSharp {
  	 fluid(maxWidth:600){
      ...GatsbyImageSharpFluid_withWebp
    }
  	}
  }
}

`