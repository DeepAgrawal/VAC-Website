import React, { useEffect } from "react"
import { gsap } from "gsap"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Cursor from "../components/Cursor"
import AboutHero from "../components/AboutHero"
import AboutWork from "../components/AboutWork"
import AboutTeam from "../components/AboutTeam"

const About = () => {
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
      <SEO title="About" />
      <Cursor />
      <AboutHero />
      <AboutWork />
      <AboutTeam />
    </Layout>
  )
}

export default About
