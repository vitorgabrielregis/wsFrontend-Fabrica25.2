import Link from "next/link"
import Image from "next/image"
import styles from '../styles/Navbar.module.css'
export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokebola.png" width="40" height="40" alt="Pokédex"/>
                <h1>Pokédex</h1>
            </div>
            <ul className={styles.navlinks}>
                <li>
                    <a href="#">Página Inicial</a>
                </li>
                <li>
                    <Link href="/favoritos">Favoritos</Link>
                </li>
            </ul>
        </nav>
    )
}