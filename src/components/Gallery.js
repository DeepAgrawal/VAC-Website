import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gallery-container",
          start: "top top",
          end: () => document.innerHeight * 4,
          scrub: 0.5,
          pin: ".gallery-container",
          anticipatePin: 1,
        },
      })
      .from(".centerBlock", {
        scale: 4,
        ease: "none",
      })
      .from(
        ".lside-image",
        {
          autoAlpha: 0,
          x: "-200px",
        },
        0.06
      )
      .from(
        ".rside-image",
        {
          autoAlpha: 0,
          x: "200px",
        },
        0.06
      )
  }, [])

  return (
    <>
      <div id="gallery" className="gallery-container">
        <div className="gallery">
          <div className="box1 gridLayer">
            <div className="image1 block"></div>
          </div>
          <div className="box2 gridLayer lside-image">
            <div className="image2 block"></div>
          </div>
          <div className="box3 gridLayer centerBlock">
            <div className="image3 block"></div>
          </div>
          <div className="box4 gridLayer rside-image">
            <div className="image4 block"></div>
          </div>
          <div className="box5 gridLayer lside-image">
            <div className="image5 block"></div>
          </div>
          <div className="box6 gridLayer rside-image">
            <div className="image6 block"></div>
          </div>
          <div className="box7 gridLayer lside-image">
            <div className="image7 block"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
