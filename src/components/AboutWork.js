import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const AboutWork = () => {
  useEffect(() => {
    gsap.from(".work-type", {
      scrollTrigger: ".about-work",
      duration: 0.6,
      autoAlpha: 0,
      xPercent: -100,
      stagger: 0.2,
    })
  }, [])

  return (
    <div className="about-work">
      <div className="container">
        <h1 className="about-work-heading">Our Work</h1>
        <div className="work-types">
          <div className="work-type">
            <h3>2D Design</h3>
            <div className="sub-types">
              <p>Photo Manipulation</p>
              <p>Illustration</p>
              <p>Poster Making</p>
              <p>Graphic Designing</p>
            </div>
          </div>
          <div className="work-type">
            <h3>3D Modeling</h3>
            <div className="sub-types">
              <p>Photo Manipulation</p>
              <p>Illustration</p>
              <p>Poster Making</p>
              <p>Graphic Designing</p>
            </div>
          </div>
          <div className="work-type">
            <h3>Video Editing</h3>
            <div className="sub-types">
              <p>Photo Manipulation</p>
              <p>Illustration</p>
              <p>Poster Making</p>
              <p>Graphic Designing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutWork
