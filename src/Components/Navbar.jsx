import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../Styling/Navbar.module.scss";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <header className={styles.header}>
    <nav className={styles.nav}>
        <img src="\img\logo.png" alt="LOGO" className={styles.logo} />
        <ul>
            <li className={styles.list_item}><Link to={'/'}>HOME</Link></li>
            <li className={styles.list_item}><Link to={'/'}>ABOUT</Link></li>
            <li className={styles.list_item}><Link><FaSearch/></Link></li>
            <li><div className={styles.burger}><RxHamburgerMenu /></div></li>
        </ul>
    </nav>
    </header>
  )
}

export default Navbar;