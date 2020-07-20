import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Gallery from "../components/Gallery"
import Cursor from "../components/Cursor"
import Events from "../components/Events"

const IndexPage = () => {
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-163451965-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-163451965-1');
        `,
          }}
        />
      </Helmet>
      <SEO title="Home" img={logo.file.childImageSharp.fluid.src} />
      <Header />
      <Cursor />
      <Hero />
      <Gallery />
      <Events />
    </Layout>
  )
}

export default IndexPage
