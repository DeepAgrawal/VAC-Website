import React, { useEffect } from "react"
import { gsap } from "gsap"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Cursor from "../components/Cursor"
import AboutHero from "../components/AboutHero"
import AboutWork from "../components/AboutWork"
import AboutTeam from "../components/AboutTeam"
import Faculty from "../components/Faculty"

const About = () => {
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

  useEffect(() => {
    let tl = gsap.timeline()
    tl.set(document.body, { css: { visibility: "visible" } })
    return () => {
      tl.kill()
      tl = null
    }
  }, [])
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
      <SEO title="About" img={logo.file.childImageSharp.fluid.src} />
      <Cursor />
      <AboutHero />
      <AboutWork />
      <Faculty />
      <AboutTeam />
    </Layout>
  )
}

export default About
