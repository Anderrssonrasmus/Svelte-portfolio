import Logo from "../public/logo_grey.svg";
import "../src/app/styles/header.scss";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
/*
  return (
    <header>
      <div className="corner-lines">
        <Link href="/" className="logo">
          <Image
            src={Logo}
            height={55}
            alt=""
            unoptimized />
        </Link>
        <div className="lines">
          <div />
          <div />
          <div />
        </div>
      </div>
    </header>
  )
  */

      //Open CLose nav
      const [navOpen, setNavOpen] = useState(false);

      //menu item glitch effect
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const menuItem = useRef(null);
      let interval: any = null;
  
  
      const glitch = event => {
          let iteration = 0;
  
          clearInterval(interval);
  
          interval = setInterval(() => {
              event.target.innerText = event.target.innerText
                  .split("")
                  .map((letter, index) => {
                      if (index < iteration) {
                          return event.target.dataset.value[index];
                      }
  
                      return letters[Math.floor(Math.random() * 26)]
                  })
                  .join("");
  
              if (iteration >= event.target.dataset.value.length) {
                  clearInterval(interval);
              }
  
              iteration += 1 / 3;
          }, 30);
      }
      

  return(
    <>
      <header>
        <Link href="/" className="logo">
          <Image
            src={Logo}
            height={55}
            alt=""
            unoptimized />
        </Link>
        <button className={`logo ${navOpen ? "navOpen" : ""}`} onClick={() => { setNavOpen(!navOpen) }}>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <Link href="#" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></Link>
      </header>
      <div className={`menuContainer ${navOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li><Link href="#" ref={menuItem} onMouseOver={glitch} data-value="Projects">Projects</Link></li>
            <li><Link href="/about" ref={menuItem} onMouseOver={glitch} data-value="About">About</Link></li>
          </ul>
          <ul className="contact-info">
            <h2>Contact</h2>
            <li><a href="mailto:rasmus022.ra@gmail.com" >Rasmus022.ra@gmail.com</a></li>
            <li><a href="https://linkedin.com/in/rasmus-andersson">linkedin.com/in/rasmus-andersson</a></li>
          </ul>
        </nav>
      </div>
    </>

  )
}
