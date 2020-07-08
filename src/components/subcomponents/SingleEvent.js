import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const SingleEvent = () => {
  const posters = useStaticQuery(graphql`
    query posters {
      file(relativePath: { eq: "sample-image.jpg" }) {
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
      <div className="event">
        <div className="event-poster">
          <div className="poster-img">
            <Image
              className="gray-scale"
              fluid={posters.file.childImageSharp.fluid}
            />
          </div>
        </div>
        <div className="event-details">
          <h3 className="event-name">Event Name</h3>
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
            <span className="date">07-06-2020 (Monday)</span>
          </h4>
          <p className="event-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ipsum
            itaque nulla sint cum minima delectus magnam, ea blanditiis hic non
            aliquid, officiis nihil beatae! Possimus tempora, sit quibusdam
            nihil fugit esse asperiores quo, distinctio cum cupiditate dicta
            laborum nesciunt praesentium nisi maiores amet eveniet consequuntur.
            Deleniti magni saepe maiores. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Fugit nesciunt illo amet et
            repellendus ex aliquid perspiciatis perferendis, doloremque saepe
            maxime alias architecto eum. Deserunt voluptas rerum quasi
            laboriosam ratione? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Culpa suscipit nihil veniam sunt veritatis totam
            vel nemo similique hic! Harum repellat perferendis culpa quo non.
            Aliquid totam debitis ratione numquam. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ut culpa ipsum harum magnam sapiente
            placeat aliquid accusantium praesentium obcaecati provident.
            Molestiae dolore quam amet maiores aperiam, eaque deleniti natus
            odio!
          </p>
        </div>
        <hr />
      </div>
    </>
  )
}

export default SingleEvent
