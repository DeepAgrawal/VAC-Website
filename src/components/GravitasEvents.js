import React, { useEffect } from "react"
import { gsap } from "gsap"

import GravitasSingleEvent from "./subcomponents/GravitasSingleEvent"

const GravitasEvents = () => {
  useEffect(() => {
    let tl = gsap.timeline()
    tl.from(".event", { duration: 0.8, height: 0, autoAlpha: 0, y: 100 })

    return () => {
      tl.kill()
      tl = null
    }
  }, [])

  return (
    <div id="events" className="events">
      <div className="container">
        <h1 className="event-title">Gravitas Events</h1>

        <GravitasSingleEvent
          eventName="Action Mania 3.0"
          eventDate="13th September, 2020 (9AM - 5PM)"
          eventDesc="Action mania 3.0 is an interactive hands-on event conducted by VAC in which the participants are provided with deep insight into creation and animation of 3-D objects. The event focuses on all the tricks of 3-D assets, involved in graphic films and architecture achieved by using one of the most powerful modelling software- Autodesk Maya. The students are first tutored by a professional who holds impeccable expertise in this field, introducing them to the know-hows of  lucrative career options in the animation industry."
          key="Action Mania 3.0"
        />
      </div>
    </div>
  )
}

export default GravitasEvents
