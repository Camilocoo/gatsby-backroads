import React, { Component } from "react"
import Layout from "../components/layout"
import Header from '../examples/Header'
import ReagularHeader from '../examples/RegularHeader'


export default class tours extends Component {
  render() {
    return(
      <Layout>
          <Header/>
          <ReagularHeader/>
      </Layout>
    )
   
  }
}
