import React from 'react'
import Tour from '../../Tours/Tour'
import {graphql,useStaticQuery} from 'gatsby'
import StyledTitle from '../StyledTitle'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link'

const getFeaturedTours = graphql`
{
    featuredTours:allContentfulTour(filter:{featured:{eq:true}}){
      edges{
        node{
            name
          price
          slug
          country
          contentful_id
          days
          images{
            fluid{
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }



`



const FeaturedTours = () => {
    const response = useStaticQuery(getFeaturedTours);
    const {featuredTours:{edges:arrayOfTours}} = response;
    console.log(arrayOfTours)
    
    return (
        <section className={styles.tours}>
            <StyledTitle title="featured" subtitle="tours"/>
            {arrayOfTours.map(({node:tour})=>{
                return(
                    <Tour key={tour.contentful_id} tour={tour}/>   
                )
            })}
            hello from featured tours 

           
            <AniLink to="/tours" className="btn-primary">
                all tours
            </AniLink>
        
        </section>
    )
}

export default FeaturedTours
