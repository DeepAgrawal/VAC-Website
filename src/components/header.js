import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { gsap } from "gsap"

import Menu from "./Menu"

const Header = () => {
  const [isMenu, setIsMenu] = useState(false)
  const toggleMenu = () => {
    setIsMenu(!isMenu)
  }

  useEffect(() => {
    if (isMenu) {
    }
  }, [isMenu])

  const images = useStaticQuery(graphql`
    query Logo {
      file(relativePath: { eq: "vac-white-logo.png" }) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row v-center space-between">
            <Image
              fluid={images.file.childImageSharp.fluid}
              alt="VIT Animation Club"
            />
            <div className="hamburger" onClick={toggleMenu}>
              <svg
                enable-background="new 0 0 512 512"
                height="512px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
                width="512px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <rect
                    fill="none"
                    height="45.7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="10"
                    width="45.7"
                    x="145.6"
                    y="151.1"
                  />
                  <rect
                    fill="none"
                    height="45.7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="10"
                    width="45.7"
                    x="233.1"
                    y="151.1"
                  />
                  <rect
                    fill="none"
                    height="45.7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="10"
                    width="45.7"
                    x="320.6"
                    y="151.1"
                  />
                  <rect
                    fill="none"
                    height="45.7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="10"
                    width="45.7"
                    x="145.6"
                    y="233.1"
                  />
                  <rect
                    fill="none"
                    height="45.7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="10"
                    width="45.7"
                    x="233.1"
                    y="233.1"
                  />
                  <rect
                    fill="none"
                    height="45.7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="10"
                    width="45.7"
                    x="320.6"
                    y="233.1"
                  />
                  <rect
                    fill="none"
                    height="45.7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="10"
                    width="45.7"
                    x="145.6"
                    y="315.1"
                  />
                  <rect
                    fill="none"
                    height="45.7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="10"
                    width="45.7"
                    x="233.1"
                    y="315.1"
                  />
                  <rect
                    fill="none"
                    height="45.7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="10"
                    width="45.7"
                    x="320.6"
                    y="315.1"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* <Menu /> */}
    </>
  )
}

export default Header
