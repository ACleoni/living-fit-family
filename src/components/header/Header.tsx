import React, { useState, useEffect, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import styles from './Header.module.scss';
import Logo from '../../../public/Logo.svg';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const [headerState, setHeaderState] = useState(router.pathname === '/' ? styles.transparent : styles.opaque);
  const [session, loading] = useSession();

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
    // <header id={styles.header} className={headerState}>

    <nav className={styles.navHeader} id={headerState}>
      <div className={styles.navBrand}>
        <a href='/'>
          <img src={Logo} />
        </a>
      </div>

      <div className={styles.headerLeftLinks}>
        <ul>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='#portfolio'>Services</a>
          </li>
          <li>
            <a href='/store'>Merch</a>
          </li>
          <li>
            <a href='#portfolio'>Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.headerRightLinks}>
        <ul>
          <li>
            <a href='/cart'>
              <i className='fa fa-shopping-bag'></i>
            </a>
          </li>
          {session && (
            <li className={styles.account}>
              <a href='#'>
                {session.user.name} <i className='fa fa-chevron-down'></i>
              </a>
              <ul className={styles.accountSubMenu}>
                <li>
                  <a href='/'>My Account</a>
                </li>
                <li>
                  <a href='/billing'>At Home</a>
                </li>
                <li>
                  <button onClick={() => signOut()}>Sign Out</button>
                </li>
              </ul>
            </li>
          )}
          <li>
            {!session && <button onClick={() => signIn('okta')}>Sign In</button>}
          </li>
        </ul>
      </div>
    </nav>

    // {/* <i className='fa fa-bars fa-3x'></i> */}

    //   {/* <div id={styles.responsive}>
    //     <div id={styles.responsiveLogoContainer}>
    //       <a href={'/'}>
    //         <img src={Logo} alt='Living Fit Family Logo' id={styles.responsiveLogo} />
    //       </a>
    //       <button placeholder={'Clik Me'} id={styles.menuIcon}>
    //         Hello
    //       </button>
    //     </div>

    //     <div id='responsive-nav-bar'></div>
    //   </div> */}
    // {/* </header> */}
  );
}
