module.exports = {
  siteMetadata:{
    title:"BackRoads",
    description:"explore awesome worldwide toourss and discover whaat makes each of them unique. forget your daily routine saay yes to adventure",
    author:"@jhonDoe",
    data:{name:"jhone", age:24
  }
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
    },
  }
],
}
