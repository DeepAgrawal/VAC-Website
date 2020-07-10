import React from "react"
import PropTypes from "prop-types"

import "../styles/App.scss"
import Contact from "../components/Contact"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Contact />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
