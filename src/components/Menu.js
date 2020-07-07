import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import Walt from "../images/walt.png"

gsap.registerPlugin(ScrollToPlugin)

const Menu = ({ state, toggleMenu }) => {
  const menu = useRef(null)
  const animbg = useRef(null)

  useEffect(() => {
    if (state.clicked === false) {
      // Close menu
      const tl2 = gsap.timeline()
      tl2
        .fromTo(
          [menu.current, animbg.current],
          { height: "100%" },
          { duration: 0.5, height: "0%", stagger: 0.1 }
        )
        .to(
          ".header-logo",
          { duration: 0.6, autoAlpha: 100, y: 0, ease: "power3.out" },
          0
        )
        .set(".header-logo", { css: { opacity: 1 } })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Open menu
      const tl1 = gsap.timeline()
      tl1
        .fromTo(
          [animbg.current, menu.current],
          { height: 0 },
          {
            duration: 0.5,
            height: "100%",
            stagger: 0.3,
          }
        )
        .from(
          ".menu-link",
          {
            duration: 0.4,
            height: 0,
            transformOrigin: "right top",
            stagger: 0.05,
            ease: "power3.inOut",
          },
          "-=0.3"
        )
        .from(
          ".social-link",
          {
            duration: 0.4,
            opacity: 0,
            stagger: 0.05,
            ease: "power3.inOut",
          },
          "-=0.4"
        )
        .to(".header-logo", { duration: 0.4, autoAlpha: 0, y: "100vh" }, 0)
    }
  }, [state])

  useEffect(() => {
    gsap.utils.toArray(".menu-link").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault()
        gsap.to(window, {
          duration: 1,
          scrollTo: e.target.getAttribute("href").slice(1),
        })
      })
    })
  }, [])

  const shakeWalt = () => {
    console.log("walt clicked")
    const walttl = gsap.timeline()
    walttl
      .to(".walt-container", { duration: 0.2, rotate: "-45deg" })
      .to(".walt-container", { duration: 0.2, rotate: "-15deg" })
      .to(".walt-container", { duration: 0.2, rotate: "-30deg" })
  }

  return (
    <div ref={menu} className="menu">
      <div ref={animbg} className="anim-bg"></div>
      <div className="menu-container">
        <div className="menu-left">
          <div className="menu-links">
            <Link onClick={toggleMenu} className="menu-link link" to="#home">
              Home
            </Link>
            <Link onClick={toggleMenu} className="menu-link link" to="#home">
              About
            </Link>
            <Link onClick={toggleMenu} className="menu-link link" to="#gallery">
              Gallery
            </Link>
            <Link onClick={toggleMenu} className="menu-link link" to="#events">
              Events
            </Link>
            <Link onClick={toggleMenu} className="menu-link link" to="#contact">
              Contact Us
            </Link>
          </div>
          <div className="social-links">
            <a className="social-link link" href="/">
              Instagram
            </a>
            <a className="social-link link" href="/">
              Facebook
            </a>
          </div>
        </div>
        <div className="menu-right">
          <div onClick={shakeWalt} className="walt-container">
            <img src={Walt} alt="walt" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
