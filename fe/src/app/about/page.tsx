import React from 'react'
import Image from 'next/image'
import "../styles/about.scss"
import image from "@/../public/case.jpg";


export default function page() {
    return (
        <div>
            <h1>About Me</h1>

            <div className="case">
                <span>01</span>
                <h3>Botkyrka Kommun</h3>
                <Image src={image} alt="" width="500" height="280" />
            </div>
        </div>
    )
}
