import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div className="menu">
      <div className="anim-bg"></div>
      <div className="menu-container">
        <div className="menu-left">
          <div className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Events</Link>
            <Link to="/">Contact Us</Link>
          </div>
          <div className="social-links">
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
          </div>
        </div>
        <div className="menu-right">
          <h3>Heading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum
            et doloribus commodi explicabo consectetur adipisci, atque neque.
            Beatae facere dolorem natus, odio, sunt mollitia reprehenderit
            similique consectetur minima repudiandae minus neque saepe animi
            unde optio repellendus cupiditate, ipsa perferendis adipisci dolores
            alias illum. Praesentium eum magni rem cupiditate soluta.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu
