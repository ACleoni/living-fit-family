import React, { useState, useEffect, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import styles from './Header.module.scss';
import Logo from '../../../public/Logo.svg';
import { useRouter } from 'next/router';
import httpHandler from 'src/pages/api/http/httpHandler';
import { Video } from 'cloudinary-react';

export default function Header() {
  const router = useRouter();
  const [headerState, setHeaderState] = useState(router.pathname === '/' ? 'uk-dark' : 'uk-light');
  const [session, loading] = useSession();
  const [mobile, setMobile] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY >= 500) {
      return setHeaderState('');
    } else {
      return setHeaderState('uk-dark');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // browser code
      window.addEventListener('scroll', listenScrollEvent);
      window.screen.width < 800 ? setMobile(true) : setMobile(false);
    }

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const handleClick = (evt) => {
    // if (evt.target === 'My Account') {
    httpHandler('/api/stripe', 'POST', { email: 'alexander.cleoni@gmail.com' });
    // }
  };

  return (
    <div className='uk-position-relative'>
      <nav className='uk-navbar uk-navbar-container uk-margin uk-navbar-transparent uk-light uk-background-secondary'>
        <div className='uk-navbar-left'>
          <a className='uk-navbar-item uk-logo' href='/'>
            <img src={Logo} width={120} />
          </a>
        </div>
        <div className='uk-navbar-right'>
          <a className='uk-navbar-toggle' data-uk-navbar-toggle-icon href='#offcanvas-usage'></a>
        </div>
      </nav>

      <div id='offcanvas-usage' data-uk-offcanvas='flip: true'>
        <div className='uk-offcanvas-bar uk-margin-xlarge-top'>
          <ul className='uk-nav uk-nav-default'>
            <li className='uk-active'>
              <a href='#'>About</a>
            </li>
            <li className='uk-active'>
              <a href='#'>Services</a>
            </li>
            <li className='uk-active'>
              <a href='#'>Merch</a>
            </li>
            <li className='uk-active'>
              <a href='#'>Contact</a>
            </li>

            {session && (
              <React.Fragment>
                <li className='uk-nav-header'>{session.user.name}</li>
                <li>
                  <a href='#'>
                    <span className='uk-margin-small-right' uk-icon='icon: home'></span> At Home
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='uk-margin-small-right' uk-icon='icon: credit-card'></span> Billing
                  </a>
                </li>
              </React.Fragment>
            )}
            <li className='uk-nav-divider'></li>
            <li>
              {!session && (
                <div>
                  <span
                    onClick={() => signIn('okta')}
                    className='uk-margin-small-right'
                    uk-icon='icon:  sign-in'
                  ></span>{' '}
                  Sign In
                </div>
              )}
              {session && (
                <div>
                  <span onClick={() => signOut()} className='uk-margin-small-right' uk-icon='icon:  sign-out'></span>{' '}
                  Sign Out
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
