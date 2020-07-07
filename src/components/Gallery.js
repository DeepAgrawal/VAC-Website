import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  const images = useStaticQuery(graphql`
    query images {
      file(relativePath: { eq: "sample-image.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
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
        scale: 6,
        ease: "none",
      })
      .from(
        ".lside-image",
        {
          autoAlpha: 0,
          x: "-200px",
        },
        0.3
      )
      .from(
        ".rside-image",
        {
          autoAlpha: 0,
          x: "200px",
        },
        0.3
      )
  }, [])

  return (
    <>
      <div id="gallery" className="gallery-container">
        <h1 className="gallery-heading">Gallery</h1>
        <div>
          <div className="gallery">
            <div className="box1 gridLayer rside-image">
              <div className="image1 block">
                <Image
                  className="gray-scale"
                  fluid={images.file.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="box2 gridLayer lside-image">
              <div className="image2 block">
                <Image
                  className="gray-scale"
                  fluid={images.file.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="box3 gridLayer centerBlock">
              <div className="image3 block">
                <Image
                  className="gray-scale"
                  fluid={images.file.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="box4 gridLayer rside-image">
              <div className="image4 block">
                <Image
                  className="gray-scale"
                  fluid={images.file.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="box5 gridLayer lside-image">
              <div className="image5 block">
                <Image
                  className="gray-scale"
                  fluid={images.file.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="box6 gridLayer rside-image">
              <div className="image6 block">
                <Image
                  className="gray-scale"
                  fluid={images.file.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="box7 gridLayer lside-image">
              <div className="image7 block">
                <Image
                  className="gray-scale"
                  fluid={images.file.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
