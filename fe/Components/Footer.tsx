import "../src/app/styles/footer.scss";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Footer() {

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
    /*
    return (
        <footer>
            <div className="corner-lines">
                <button className={`logo ${navOpen ? "navOpen" : ""}`} onClick={() => { setNavOpen(!navOpen) }}>
                    <svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.75 63.75"><defs></defs><title>triangle</title><polygon className="cls-1" points="1 1 61.33 1 1 61.33 1 1" /><path className="cls-1" d="M509.92,683,453,739.92V683h56.92m4.83-2H451v63.75L514.75,681Z" transform="translate(-451 -681)" /></svg>
                </button>
                <div className="lines">
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div className={`menuContainer ${navOpen ? "open" : ""}`}>
                <div className="layer">
                    <nav>
                        <ul>
                            <li><Link href="#" ref={menuItem} onMouseOver={glitch} data-value="Projects">Projects</Link></li>
                            <li><Link href="/about" ref={menuItem} onMouseOver={glitch} data-value="About">About</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="layer">
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="mailto:rasmus022.ra@gmail.com" >Rasmus022.ra@gmail.com</a></li>
                        <li><a href="https://linkedin.com/in/rasmus-andersson">linkedin.com/in/rasmus-andersson</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )*/
}
