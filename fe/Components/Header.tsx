import Logo from "../public/logo_grey.svg";
import "../src/app/styles/header.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="corner-lines">
        <a href="#" className="logo">
          <Image
            src={Logo}
            height={55}
            alt=""
            unoptimized />
        </a>
        <div className="lines">
          <div />
          <div />
          <div />
        </div>
      </div>
    </header>
  )
}
