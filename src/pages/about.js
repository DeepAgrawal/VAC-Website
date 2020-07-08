import React, { useEffect } from "react"
import { gsap } from "gsap"

import Layout from "../components/layout"
import Cursor from "../components/Cursor"
import AboutHero from "../components/AboutHero"

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
      <Cursor />
      <AboutHero />
    </Layout>
  )
}

export default About
