import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Header = () => {

    const data = useStaticQuery(graphql`
    {
        site{
          siteMetadata {
            title
            description
            author
           
          }
        }
      }
    
    `)
    let  {site:{siteMetadata:{title,description}}} = data;
    console.log(data)

    return (
        <div>
            <h1>title:{title} </h1>
            <h1>author:{description} </h1>
        </div>
    )
}

export default Header
