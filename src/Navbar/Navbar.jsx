// import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <ul className={`${styles.menuList} ${styles.menuListLeft}`}>
            <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
                <Link className={styles.link}>
                    <span className={styles.navbarText}>Personajes</span>
                </Link>
            </li>
            <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link className={styles.link}>
                    <span className={styles.navbarText}>Favoritos</span>
                </Link>
            </li>
        </ul>

        <ul className={`${styles.menuList} ${styles.menuListRight}`}>
            <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
                <Link className={styles.link}>
                    <span className={styles.navbarText}>Personajes</span>
                </Link>
            </li>
            <li className={`${styles.menuItem} ${styles.menuItemRight}`}>
                <Link className={styles.link}>
                    <span className={styles.navbarText}>Favoritos</span>
                </Link>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar