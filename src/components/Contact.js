import React from "react"

import Logo from "../images/logo.png"
import Mail from "../images/email.svg"
import Whatsapp from "../images/whatsapp.svg"
import Insta from "../images/instagram.svg"
import Facebook from "../images/facebook.svg"

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact">
        <h1 className="contact-heading">Connect.</h1>
        <div className="contact-info container">
          <div className="contact-logo">
            <img src={Logo} alt="VIT Animation Club" />
          </div>
          <div className="contact-handles">
            <div className="contact-title">Contact</div>
            <div>
              <span className="mail old">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:vitanimationclub@gmail.com"
                >
                  <img src={Mail} alt="vitanimationclub@gmail.com" />
                </a>
              </span>
              <span className="whatsapp old">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/917588356260"
                >
                  <img src={Whatsapp} alt="VIT Animation Club" />
                </a>
              </span>
            </div>
          </div>
          <div className="follow-handles">
            <div className="follow-title">Follow</div>
            <div>
              <span className="insta old">
                <a
                  className="social-link old"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/vit_animation/"
                >
                  <img src={Insta} alt="www.instagram.com/vit_animation" />
                </a>
              </span>
              <span className="facebook old">
                <a
                  className="social-link "
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/vitanimationclub"
                >
                  <img src={Facebook} alt="www.facebook.com/vitanimationclub" />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="copyright">© 2020 VIT Animation Club</div>
      </div>
    </>
  )
}

export default Contact
