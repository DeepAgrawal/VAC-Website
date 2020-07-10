import React from "react"
import Image from "gatsby-image"

const SingleEvent = ({
  poster,
  posterTitle,
  eventName,
  eventDate,
  eventDesc,
}) => {
  return (
    <>
      <div className="event">
        <div className="event-poster">
          <div className="poster-img">
            <Image className="gray-scale" fluid={poster} alt={posterTitle} />
          </div>
        </div>
        <div className="event-details">
          <h3 className="event-name">{eventName}</h3>
          <h4 className="event-date">
            <span className="date-svg">
              <svg
                width="23"
                height="25"
                viewBox="0 0 23 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5417 13.5H11.5V19.5417H17.5417V13.5ZM16.3333 0.208374V2.62504H6.66667V0.208374H4.25V2.62504H3.04167C1.70042 2.62504 0.637083 3.71254 0.637083 5.04171L0.625 21.9584C0.625 23.2875 1.70042 24.375 3.04167 24.375H19.9583C21.2875 24.375 22.375 23.2875 22.375 21.9584V5.04171C22.375 3.71254 21.2875 2.62504 19.9583 2.62504H18.75V0.208374H16.3333ZM19.9583 21.9584H3.04167V8.66671H19.9583V21.9584Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="date">{eventDate}</span>
          </h4>
          <div
            className="event-desc"
            dangerouslySetInnerHTML={{ __html: eventDesc }}
          ></div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default SingleEvent
