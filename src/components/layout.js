import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "../styles/App.scss"
import Contact from "../components/Contact"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Contact />
      <Helmet>
        <script type="application/ld+json">
          "@context": "https://schema.org", "@type": "Organization", "name":
          "VIT Animation Club", "url": "http://vitanimationclub.tech", "url" :
          "http://vitanimationclub.tech", "sameAs": [
          "https://www.facebook.com/vitanimationclub",
          "https://www.instagram.com/vit_animation/",
          "https://www.youtube.com/channel/UCv6jdaXdcxnaoqKvmFC3epw",
          "https://www.linkedin.com/company/vit-animation" ]
        </script>
      </Helmet>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
