import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Gallery from "../components/Gallery"
import Cursor from "../components/Cursor"
import Events from "../components/Events"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Cursor />
    <Hero />
    <Gallery />
    <Events />
    <Contact />
  </Layout>
)

export default IndexPage
