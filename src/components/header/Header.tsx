import React from 'react'
import styles from './Header.module.scss'
import Logo from '../../../public/logo.svg'

export default function Header() {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.row}>
                <img src={Logo} className={styles.logo} />
                <div className={styles.mobileToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="">Merch</a></li>
                        <li><a href="/#contact">Contact</a></li>
                        <li><a href="">Log In</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};
