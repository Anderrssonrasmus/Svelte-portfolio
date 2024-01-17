import Image from 'next/image'
import styles from './page.module.css'
import Barcode from "../../public/barcode_grey.png"
import "./styles/start.scss"
import Link from "next/link";
import MiniMenu from '../../Components/MiniMenu';
export default function Home() {
  /*
  return (
    <section className="hero">
      <div className="titleCard">
        <h1>Rasmus Andersson</h1>
        <h2>Portfolio_</h2>
      </div>
      
      <div className="barcode">
        <Image src={Barcode}
          alt='' />
        <a href="#">Explore</a>
      </div>
    </section>
  )
  */

  return(
    <section className="hero">
      <div className="titleCard">
        <h1>Rasmus Andersson</h1>
        <h2>Portfolio_</h2>
      </div>
      
      <div className="miniMenu">
        <MiniMenu title="What do I even do? What drives me?" link="#"/>
      </div>
    </section>
  )
}
