import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SingleEvent from "./subcomponents/SingleEvent"

gsap.registerPlugin(ScrollTrigger)

const Events = () => {
  const events = useStaticQuery(graphql`
    query {
      allContentfulEvent {
        nodes {
          eventPoster {
            fluid {
              ...GatsbyContentfulFluid
            }
            title
          }
          eventName
          eventDate
          eventDescription {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".events",
        start: "top center",
      },
    })
    tl.from(".event", { duration: 0.8, height: 0, autoAlpha: 0, y: 100 })

    return () => {
      tl.kill()
      tl = null
    }
  }, [])

  return (
    <div id="events" className="events">
      <div className="container">
        <h1 className="event-title">Event</h1>
        {events.allContentfulEvent.nodes.map(event => {
          return (
            <SingleEvent
              poster={event.eventPoster.fluid}
              posterTitle={event.eventPoster.title}
              eventName={event.eventName}
              eventDate={event.eventDate}
              eventDesc={event.eventDescription.childMarkdownRemark.html}
              key={event.eventName}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Events
