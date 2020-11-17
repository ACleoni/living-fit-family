import { Session } from 'next-auth/client';
import React, { useEffect, useRef } from 'react';

interface Props {
  session: Session;
  logo: string;
  signIn: Function;
  signOut: Function;
  handleClick: Function;
}

export default function StandardNavBar({ session, logo, signIn, signOut, handleClick }: Props) {
  const headerRef = useRef(null);

  // useEffect(() => {
  //   if (headerState === 'scroll') {
  //     headerRef.current.classList.add('opaque');
  //     headerRef.current.classList.remove('transparent');
  //   } else {
  //     headerRef.current.classList.add('transparent');
  //     headerRef.current.classList.remove('opaque');
  //   }
  // });

  return (
    <React.Fragment>
      <nav
        ref={headerRef}
        className={`uk-navbar uk-navbar-container uk-navbar-transparent uk-light uk-background-secondary uk-margin-remove`}
        data-uk-sticky
        data-uk-navbar
      >
        <div className='uk-navbar-left'>
          <a className='uk-navbar-item uk-logo' href='/'>
            <img src={logo} width={150} />
          </a>
          <ul className='uk-navbar-nav'>
            <li className='uk-active'>
              <a href='/about'>About</a>
            </li>
            <li className='uk-active'>
              <a href='/#services'>Services</a>
            </li>
            <li className='uk-active'>
              <a href='#'>Merch</a>
            </li>
            <li className='uk-active'>
              <a href='/#contact'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='uk-navbar-right'>
          <ul className='uk-navbar-nav'>
            {session && (
              <React.Fragment>
                <li className='uk-active'>
                  <a href='#'>{session.user.name}</a>
                  <div className='uk-navbar-dropdown uk-transparent uk-background-secondary uk-margin-remove-top'>
                    <ul className='uk-nav uk-navbar-dropdown-nav'>
                      <li className='uk-active'>
                        <a href='/at-home'>
                          <span className='uk-margin-small-right' uk-icon='icon: home'></span> At Home
                        </a>
                      </li>
                      <li className='uk-active'>
                        <a onClick={() => handleClick()}>
                          <span className='uk-margin-small-right' uk-icon='icon: credit-card'></span> Billing
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </React.Fragment>
            )}

            <li className='uk-active'>
              {!session && (
                <a onClick={() => signIn('okta')}>
                  <span className='uk-margin-small-right' uk-icon='icon:  sign-in'></span> Sign In
                </a>
              )}
              {session && (
                <a onClick={() => signOut()}>
                  <span className='uk-margin-small-right' uk-icon='icon:  sign-out'></span> Sign Out
                </a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
