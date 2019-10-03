import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
const getSiteData = graphql`
{
    site{
      siteMetadata {
        title
        description
        author
        
      }
    }
  }
`
const RegularHeader = () => {
    return (
        <StaticQuery
        query={getSiteData}
        render={(data)=>{
            let {site:{siteMetadata:{title,author}}}= data
            return(
                <div>Static Title: {title}</div>
            )
        }}
        />
        
    )
}

export default RegularHeader
