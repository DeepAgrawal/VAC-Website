import React from "react"

import "../styles/App.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Gallery from "../components/Gallery"
import Cursor from "../components/Cursor"
import Events from "../components/Events"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cursor />
    <Hero />
    <Gallery />
    <Events />
    <Contact />
  </Layout>
)

export default IndexPage
