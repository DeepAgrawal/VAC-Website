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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                a natus error, facere sed, unde adipisci culpa nihil consequatur
                voluptas ea repellat tempore quos minima iusto in quaerat
                repellendus porro?Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Incidunt aut perferendis non tempore similique
                laudantium. Pariatur, laborum tempore non temporibus delectus,
                repellat ipsam est consequuntur consequatur esse quam aut
                facere. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Vitae, tenetur? Consequuntur quaerat dolor eius mollitia
                reiciendis nulla rerum iusto, sunt impedit, hic sit suscipit
                soluta dolorem, tempora dicta id. Nostrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
