import Logo from "../public/logo_grey.svg";
import "../src/app/styles/header.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

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
}
