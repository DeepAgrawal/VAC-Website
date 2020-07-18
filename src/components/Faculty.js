import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Linkedin from "../images/linkedin.svg"

const Faculty = () => {
  const image = useStaticQuery(graphql`
    query {
      sir: file(relativePath: { eq: "sir.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="faculty-coor">
      <div className="container">
        <h1 className="faculty-heading">Faculty Coordinator</h1>
        <div className="inner-container">
          <div className="faculty-image">
            <Image fluid={image.sir.childImageSharp.fluid} />
          </div>
          <div className="faculty-info">
            <h2 className="faculty-name">Ganapathy Pattukandan</h2>
            <h3>
              Founder of VIT Animation Club. <br /> <br />
              Professor and Director, <br /> Centre for Disaster Mitigation and
              Management, <br /> Vellore Institute of Technology, Vellore.
            </h3>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ganapathy-g-p-86701a1b/"
            >
              <img className="old" src={Linkedin} alt="Ganapathy Pattukandan" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faculty
