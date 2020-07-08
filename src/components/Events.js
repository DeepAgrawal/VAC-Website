import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SingleEvent from "./subcomponents/SingleEvent"

gsap.registerPlugin(ScrollTrigger)

const Test = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".events",
        start: "top center",
      },
    })
    tl.from(".event", { duration: 1, height: 0, autoAlpha: 0, y: -50 })

    return () => {
      tl.kill()
      tl = null
    }
  }, [])

  return (
    <div id="events" className="events">
      <div className="container">
        <h1 className="event-title">Event</h1>
        <SingleEvent />
        <SingleEvent />
      </div>
    </div>
  )
}

export default Test
