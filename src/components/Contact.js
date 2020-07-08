import React, { useEffect } from "react"
import { gsap } from "gsap"

import Logo from "../images/logo.png"
import Mail from "../images/email.svg"
import Whatsapp from "../images/whatsapp.svg"
import Insta from "../images/instagram.svg"
import Facebook from "../images/facebook.svg"

const Contact = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        start: () => document.querySelector(".contact").offsetTop - 100,
      },
    })
    tl.from([".mail img", ".whatsapp img", ".insta img", ".facebook img"], {
      duration: 1,
      autoAlpha: 0,
      scale: 1.5,
      ease: "bounce.out",
    })

    return () => {
      tl.kill()
      tl = null
    }
  }, [])

  const scrollToHero = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#home",
    })
  }

  return (
    <>
      <div id="contact" className="contact">
        <h1 className="contact-heading">Connect.</h1>
        <div className="contact-info container">
          <div className="contact-logo">
            <img onClick={scrollToHero} src={Logo} alt="" />
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
                  <img src={Mail} alt="" />
                </a>
              </span>
              <span className="whatsapp old">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/7588356260"
                >
                  <img src={Whatsapp} alt="" />
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
                  <img src={Insta} alt="" />
                </a>
              </span>
              <span className="facebook old">
                <a
                  className="social-link "
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/vitanimationclub"
                >
                  <img src={Facebook} alt="" />
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
