import React from 'react'
import StyledTitle from '../StyledTitle'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
{
  aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid_tracedSVG

      }
    }
  }
  }

`


const About = () => {
    const data = useStaticQuery(getAbout);
  
    const {aboutImage:{childImageSharp:{fluid}}}= data

    return (
        <div className={styles.about}>
            Hello from about 
            <StyledTitle title="about" subtitle="us"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                       {/**<img src={img} alt="about company"/> */} 
                       <Img fluid={fluid} alt="awesome landscape" />
                      
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explore the differences</h4>
                    <p>this are the difference from unique parts around the world</p>
                    <p>look at the  birds, look the trees , look around and hold the sight on the that world that is yours</p>

                </article>
            </div>
        </div>
    )
}

export default About
