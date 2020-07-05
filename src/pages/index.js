import React from "react"

import "../styles/App.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Gallery from "../components/Gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Gallery />
  </Layout>
)

export default IndexPage
