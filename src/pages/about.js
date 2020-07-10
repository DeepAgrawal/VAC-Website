import React, { useEffect } from "react"
import { gsap } from "gsap"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Cursor from "../components/Cursor"
import AboutHero from "../components/AboutHero"
import AboutWork from "../components/AboutWork"
import AboutTeam from "../components/AboutTeam"

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
      <SEO title="About" img={logo.file.childImageSharp.fluid.src} />
      <Cursor />
      <AboutHero />
      <AboutWork />
      <AboutTeam />
    </Layout>
  )
}

export default About
