import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useStaticQuery, graphql } from "gatsby"

import SingleMember from "../components/subcomponents/SingleMember"
gsap.registerPlugin(ScrollTrigger)

const AboutTeam = () => {
  useEffect(() => {
    gsap.from(".member-card", {
      scrollTrigger: ".member-card",
      duration: 0.6,
      autoAlpha: 0,
      xPercent: -100,
      rotate: -45,
      stagger: 0.05,
    })
  }, [])

  const image = useStaticQuery(graphql`
    query {
      allContentfulTeamMember {
        nodes {
          name
          post
          regNo
          degree
          memberImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  const members = image.allContentfulTeamMember.nodes
  members.reverse()

  return (
    <div className="about-team">
      <div className="container">
        <h1 className="team-heading">Meet Our Team</h1>
        <div className="board-members">
          {members.map(member => {
            return (
              <SingleMember
                image={member.memberImage.fluid}
                name={member.name}
                post={member.post}
                regNo={member.regNo}
                branch={member.degree}
                key={member.name}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
