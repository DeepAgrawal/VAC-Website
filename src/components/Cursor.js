import React, { useEffect, useRef } from "react"

const Cursor = () => {
  const cursor = useRef(null)
  const traceCursor = e => {
    if (cursor.current == null) {
      let cursor = document.querySelector(".cursor")
      cursor.style.top = e.clientY + "px"
      cursor.style.left = e.clientX + "px"
      if (e.pageY < 5) {
        cursor.style.opacity = 0
      } else {
        cursor.style.opacity = 1
      }
    } else {
      cursor.current.style.top = e.clientY + "px"
      cursor.current.style.left = e.clientX + "px"
      if (e.pageY < 5) {
        cursor.current.style.opacity = 0
      } else {
        cursor.current.style.opacity = 1
      }
    }
  }

  const addLinkEffect = () => {
    cursor.current.classList.add("hover-link")
    cursor.current.classList.add("link-grow")
  }

  const removeLinkEffect = () => {
    cursor.current.classList.remove("link-grow")
    cursor.current.classList.remove("hover-link")
  }

  const addInvertEffect = () => {
    cursor.current.classList.add("hover-invert")
  }

  const removeInvertEffect = () => {
    cursor.current.classList.remove("hover-invert")
  }

  const addGrayEffect = () => {
    cursor.current.classList.add("hover-gray")
  }

  const removeGrayEffect = () => {
    cursor.current.classList.remove("hover-gray")
  }
  useEffect(() => {
    window.addEventListener("mousemove", traceCursor)

    const links = document.querySelectorAll(".link")
    links.forEach(link => {
      link.addEventListener("mouseover", addLinkEffect)
      link.addEventListener("mouseleave", removeLinkEffect)
    })

    const inverts = document.querySelectorAll(".old")
    inverts.forEach(invert => {
      invert.addEventListener("mouseover", addInvertEffect)
      invert.addEventListener("mouseleave", removeInvertEffect)
    })

    const grays = document.querySelectorAll(".gray-scale")
    grays.forEach(gray => {
      gray.addEventListener("mouseover", addGrayEffect)
      gray.addEventListener("mouseleave", removeGrayEffect)
    })

    return () => {
      window.removeEventListener("mousemove", traceCursor)

      links.forEach(link => {
        link.removeEventListener("mouseover", addLinkEffect)
        link.removeEventListener("mouseleave", removeLinkEffect)
      })

      inverts.forEach(invert => {
        invert.removeEventListener("mouseover", addInvertEffect)
        invert.removeEventListener("mouseleave", removeInvertEffect)
      })

      grays.forEach(gray => {
        gray.removeEventListener("mouseover", addGrayEffect)
        gray.removeEventListener("mouseleave", removeGrayEffect)
      })
    }
  }, [])
  return (
    <>
      <div ref={cursor} className="cursor"></div>
    </>
  )
}

export default Cursor
