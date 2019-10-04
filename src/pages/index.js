import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

import Banner from "../components/Banner"
import Services from '../components/Home/Services'
import About from '../components/Home/About'
import {graphql, useStaticQuery} from 'gatsby'
import StyledHero from "../components/StyledHero"

 

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





export default ({data:{aboutImage:{childImageSharp:{fluid}}}}) => (
  

 
  <React.Fragment>
    <Layout>
      <StyledHero home="true"  img={fluid}>
        <Banner
          title="Continue Exploring"
          info="hello welcome start your journey here"
        >
          <Link to="/tours" className="btn-white">
            EXPLORE TOURS
          </Link>
        </Banner>
      </StyledHero>
      <About/>
      <Services/>

    </Layout>
  </React.Fragment>
)
