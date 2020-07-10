import React from "react"
import Image from "gatsby-image"

const SingleMember = ({ image, name, post, regNo, branch }) => {
  return (
    <div className="member-card gray-scale ">
      <div className="stud-info">
        <h3>{regNo}</h3>
        <h3>{branch}</h3>
      </div>
      <Image fluid={image} alt={name} />
      <div className="member-info">
        <h3>{name}</h3>
        <h4>{post}</h4>
      </div>
    </div>
  )
}

export default SingleMember
