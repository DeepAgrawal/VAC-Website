import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Right from "../images/right.svg"

gsap.registerPlugin(ScrollTrigger)

const AboutHero = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about-image.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    gsap.from(".about-text-container", {
      duration: 1,
      height: 0,
      yPercent: 100,
    })
  }, [])

  return (
    <div className="about-hero">
      <div className="container">
        <div className="back-to-home">
          <Link className="old" to="/">
            <img className="back-arrow" src={Right} alt="VIT Animation Home" />
            Home
          </Link>
        </div>
        <div className="about-text-container">
          <div className="about-bg-img">
            <Image
              fluid={image.file.childImageSharp.fluid}
              alt="About VIT Animation Club"
            />
            <div className="red-overlay"></div>
            <div className="about-text">
              <p>
                VIT Animation Club, a place where creativity & Innovation put
                vision to thoughts and ideas. Our Club grooms designers all
                across VIT, who not just showcase talent in areas specific to
                their domains but are also enthusiastic to learn more in the
                field of animation. Passion is the fire that lights the way when
                the time comes to dazzle everyone with the skills you have
                acquired throughout.
                <br />
                Our strength is our team, which works closely with you to come
                up with animations that are contemporary, fresh and unique. We
                are determined to become a one-stop-destination for all your
                animation oriented needs be it colorful events, competitions,
                workshops, corporate identity kits, interactive flash games,
                classroom sessions, websites or e-learning solutions. Currently
                our flagship events are Action Mania and Hashtag Hollywood.
                <br />
                Our objective is to promote Animation, as a viable art form and
                express the creative pragmatic mindset of those who want to
                think "Out Of the Box" Come join us and be an integral part in
                this flight of Creativity, colors and Cherish it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
