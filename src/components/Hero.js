import React, { useEffect } from "react"
import Arrow from "../images/right.svg"
import { gsap } from "gsap"

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    const tl1 = gsap.timeline()
    tl1
      .set(document.body, { css: { visibility: "visible" } })
      .set(document.body, { overflow: "hidden" })
      .to(".left-slab", {
        duration: 1,
        height: 0,
        stagger: 0.5,
      })
      .to(".right-slab", { duration: 1, width: 0, stagger: 0.5 }, "-=1")
      .to(".anim-container", { css: { display: "none" } })
      .set(document.body, { overflow: "auto" })
      .set(".hero-title", { css: { zIndex: 998 } })
  })

  return (
    <div className="hero">
      {/* Animation Container */}
      <div className="anim-container">
        <div className="left">
          <div className="left-slab"></div>
          <div className="left-slab"></div>
          <div className="left-slab"></div>
        </div>
        <div className="right">
          <div className="right-slab"></div>
          <div className="right-slab"></div>
          <div className="right-slab"></div>
        </div>
      </div>

      {/* Background */}
      <div className="bg">
        <div className="left-bg"></div>
        <div className="right-bg"></div>
      </div>
      {/* Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-title">
            <h1>Design is</h1>
            <h1>intelligence made</h1>
            <h1>visible.</h1>
          </div>
          <div className="scroll-mark">
            Explore More
            <span>
              <img src={Arrow} alt="Explore More" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero