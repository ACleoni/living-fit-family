import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.scss';
import Logo from '../../../public/Logo.svg';
import { menuLinks } from '../../utils/constants';

export default function Header() {
  const [headerState, setHeaderState] = useState(styles.transparent);

  const listenScrollEvent = () => {
    if (window.scrollY >= 500) {
      return setHeaderState(styles.opaque);
    } else {
      return setHeaderState(styles.transparent);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header id={styles.header} className={headerState}>
      {/* Normal Header */}
      <div id={styles.normal} className={headerState}>
        <a href={'/'}>
          <img src={Logo} alt='Living Fit Family Logo' id={styles.logo} />
        </a>
        <nav id={styles.navbar}>
          <ul>
            {menuLinks.map(({ name, href }, idx) => {
              return (
                <li key={idx} className={styles.navLink} id={styles.menuItem}>
                  <a href={href} className={styles.menuLink}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Responsive Header */}
      <div id={styles.responsive}>
        <div id={styles.responsiveLogoContainer}>
          <a href={'/'}>
            <img src={Logo} alt='Living Fit Family Logo' id={styles.responsiveLogo} />
          </a>
          <button placeholder={'Clik Me'} id={styles.menuIcon}>
            Hello
          </button>
        </div>

        <div id='responsive-nav-bar'></div>
      </div>
    </header>
  );
}
