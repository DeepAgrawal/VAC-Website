import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { gsap } from "gsap"

import Menu from "./Menu"

const Header = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  })
  const [disabled, setDisabled] = useState(false)

  const toggleMenu = () => {
    disableToggle()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      })
    } else if (state.clicked === true) {
      setState({
        clicked: false,
      })
    } else if (state.clicked === false) {
      setState({
        clicked: true,
      })
    }
  }
  const disableToggle = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1000)
  }

  const images = useStaticQuery(graphql`
    query Logo {
      file(relativePath: { eq: "vac-white-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
              className="header-logo"
              fluid={images.file.childImageSharp.fluid}
              alt="VIT Animation Club"
            />
            <div className="hamburger link">
              <button disabled={disabled} onClick={toggleMenu}>
                <svg
                  enableBackground="new 0 0 512 512"
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="10"
                      width="45.7"
                      x="145.6"
                      y="151.1"
                    />
                    <rect
                      fill="none"
                      height="45.7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="10"
                      width="45.7"
                      x="233.1"
                      y="151.1"
                    />
                    <rect
                      fill="none"
                      height="45.7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="10"
                      width="45.7"
                      x="320.6"
                      y="151.1"
                    />
                    <rect
                      fill="none"
                      height="45.7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="10"
                      width="45.7"
                      x="145.6"
                      y="233.1"
                    />
                    <rect
                      fill="none"
                      height="45.7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="10"
                      width="45.7"
                      x="233.1"
                      y="233.1"
                    />
                    <rect
                      fill="none"
                      height="45.7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="10"
                      width="45.7"
                      x="320.6"
                      y="233.1"
                    />
                    <rect
                      fill="none"
                      height="45.7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="10"
                      width="45.7"
                      x="145.6"
                      y="315.1"
                    />
                    <rect
                      fill="none"
                      height="45.7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="10"
                      width="45.7"
                      x="233.1"
                      y="315.1"
                    />
                    <rect
                      fill="none"
                      height="45.7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="10"
                      width="45.7"
                      x="320.6"
                      y="315.1"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} toggleMenu={toggleMenu} />
    </>
  )
}

export default Header
