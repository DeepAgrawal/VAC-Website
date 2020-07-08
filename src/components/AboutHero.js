import React from "react"
import { Link } from "gatsby"

import Right from "../images/right.svg"

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="container">
        <div className="back-to-home">
          <Link className="old" to="/">
            <img className="back-arrow" src={Right} alt="" />
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
