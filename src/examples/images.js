import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import img from '../images/connectBcg.jpeg'
import {graphql, useStaticQuery} from 'gatsby'

const getImages = graphql`

   

        {
            fixed:file(relativePath:{eq:"defaultBcg.jpeg"}) {
              childImageSharp{
               fixed(width:300,height:400){
                 ...GatsbyImageSharpFixed

               }
             }
            }
             fluid:file(relativePath:{eq:"blogBcg.jpeg"}){
               childImageSharp{
                 fluid{
                   ...GatsbyImageSharpFluid_withWebp

                 }
               }
             }
           } 
       
    
        

`


const Wrapper= styled.div`
 text-align:center;
 text-transform:capitalize;
 width:80vw;
 margin:0 auto 10rem auto;
 .basic{
     width:100%

 }
 article{
     border:3px solid red;
     padding:1rem 0;

 }
 @media(min-wdith:992px){
     display:grid;
     grid-template-columns:1fr 1fr 1fr;
     grid-column-gap:1rem;
 }

`
const Images = () => {
    const data = useStaticQuery(getImages)
   const {fixed ,fluid} =data;
   console.log(fluid,fixed)
    return (
        <Wrapper>
           <article>
               <h3>Basic Image</h3>
               <img src={img}/>
           </article>
           <article>
               <h3>Fixed image blur</h3>
               <Img fixed={fixed.childImageSharp.fixed}/>
           </article>
           <article>
               <h3>fluid image svg</h3>
               <Img fixed={fluid.childImageSharp.fluid}/>
           </article>

        </Wrapper>
    )
}

export default Images
