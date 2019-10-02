import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import Services from '../components/Home/Services'
import About from '../components/Home/About'

export default () => (
  <React.Fragment>
    <Layout>
      <SimpleHero>
        <Banner
          title="Continue Exploring"
          info="hello welcome start your journey here"
        >
          <Link to="/tours" className="btn-white">
            EXPLORE TOURS
          </Link>
        </Banner>
      </SimpleHero>
      <About/>
      <Services/>

    </Layout>
  </React.Fragment>
)
