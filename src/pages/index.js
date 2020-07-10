import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Gallery from "../components/Gallery"
import Cursor from "../components/Cursor"
import Events from "../components/Events"
import logo from "../images/logo.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" img={logo} />
    <Header />
    <Cursor />
    <Hero />
    <Gallery />
    <Events />
  </Layout>
)

export default IndexPage
