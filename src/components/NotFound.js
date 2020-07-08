import React, { useEffect } from "react"
import { gsap } from "gsap"
import { Link } from "gatsby"
import Cursor from "./Cursor"

const NotFound = () => {
  useEffect(() => {
    let tl = gsap.timeline()
    tl.set(document.body, { css: { visibility: "visible" } })

    return () => {
      tl.kill()
      tl = null
    }
  }, [])
  return (
    <div className="not-found">
      <Cursor />
      <div className="content-404">
        <p>Page Not Found</p>
        <Link className="back old" to="/about">
          Back to Safety
        </Link>
      </div>
    </div>
  )
}

export default NotFound
