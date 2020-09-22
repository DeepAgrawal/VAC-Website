import React from "react"

import GravitasSingleEvent from "./subcomponents/GravitasSingleEvent"

const GravitasEvents = () => {
  return (
    <div id="gravitas-events" className="events">
      <div className="container">
        <h1 className="event-title">Gravitas Events</h1>

        {/* <GravitasSingleEvent
          className="event"
          link="https://www.youtube.com/embed/Alpi8b4qoXU"
          eventName="Action Mania 3.0"
          eventDate="13th September, 2020 (9AM - 5PM)"
          eventDesc="Action mania 3.0 is an interactive hands-on event conducted by VAC in which the participants are provided with deep insight into creation and animation of 3-D objects. The event focuses on all the tricks of 3-D assets, involved in graphic films and architecture achieved by using one of the most powerful modelling software- Autodesk Maya. The students are first tutored by a professional who holds impeccable expertise in this field, introducing them to the know-hows of  lucrative career options in the animation industry.
          <div>
          Register Here - 
          <a class='old' href='http://info.vit.ac.in/gravitas2020/gravitas_login.asp'>
            Click here (In the workshop section)
          </a>
        </div>
          "
          key="Action Mania 3.0"
        /> */}

        <GravitasSingleEvent
          className="event"
          link="https://www.youtube.com/embed/L4H2Q_Yp_xY"
          eventName="Hashtag Hollywood 2.0"
          eventDate="4th October, 2020 (9AM - 5PM)"
          eventDesc="Ever wondered how those breathtaking action scenes in Deadpool and Gone Girl came into being?  Or what James Cameron and his team did for years that made Avatar the highest grossing movie in history ,for a whole decade? Simply envisioning the complicated tasks of sound, color and VFX is certainly overwhelming. Well we are here to make this stumbling block a piece of cake for you. We present to you a chance of learning multimedia softwares that the most talented filmmakers and editors rely on - “Adobe After effects and Premiere Pro”. Recreate the most epic scenes under the guidance of the best editor in the industry! Time to put your artistic vision to work and start creating your ilk of  illusion of life. Get ready to shoot your own action scene because just like Deadpool says “Life is an endless series of train wrecks with only brief commercial like happiness”. Hang on to yours!
          <div>
          Register Here - 
          <a class='old' href='http://info.vit.ac.in/gravitas2020/gravitas_login.asp'>
            Click here (In the workshop section)
          </a>
        </div>
          "
          key="Hashtag Hollywood 2.0"
        />
      </div>
    </div>
  )
}

export default GravitasEvents
