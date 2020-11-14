import { Session } from 'next-auth/client';
import React from 'react';

interface Props {
  session: Session;
  logo: string;
  signIn: Function;
  signOut: Function;
  handleClick: Function;
  handleError: Function;
}

export default function MobileNavBar({ session, logo, signIn, signOut, handleClick, handleError }: Props) {
  return (
    <React.Fragment>
      <nav
        className='uk-navbar uk-navbar-container uk-navbar-transparent uk-light uk-background-secondary'
        data-uk-sticky
        data-uk-navbar
      >
        <div className='uk-navbar-left'>
          <a className='uk-navbar-item uk-logo' href='/'>
            <img src={logo} width={120} />
          </a>
        </div>
        <div className='uk-navbar-right'>
          <button
            style={{ border: 'none' }}
            className='uk-button uk-button-default uk-margin-small-right'
            type='button'
            uk-toggle='target: #offcanvas-usage'
          >
            <span uk-icon='icon: menu'></span>
          </button>
        </div>
      </nav>

      <div id='offcanvas-usage' data-uk-offcanvas='flip: true, overlay: true'>
        <div className='uk-offcanvas-bar uk-margin-xlarge-top uk-height-medium'>
          <ul className='uk-nav uk-nav-default'>
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
            {session && (
              <React.Fragment>
                <li className='uk-nav-header uk-margin-small-top'>{session.user.name}</li>
                <li>
                  <a href='/at-home'>
                    <span className='uk-margin-small-right' uk-icon='icon: home'></span> At Home
                  </a>
                </li>
                <li>
                  <div onClick={() => handleClick()}>
                    <span className='uk-margin-small-right' uk-icon='icon: credit-card'></span> Billing
                  </div>
                </li>
              </React.Fragment>
            )}
            <li className='uk-nav-divider'></li>
            <li>
              {!session && (
                <div onClick={() => signIn('okta')}>
                  <span className='uk-margin-small-right' uk-icon='icon:  sign-in'></span> Sign In
                </div>
              )}
              {session && (
                <div onClick={() => signOut()}>
                  <span className='uk-margin-small-right' uk-icon='icon:  sign-out'></span> Sign Out
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
