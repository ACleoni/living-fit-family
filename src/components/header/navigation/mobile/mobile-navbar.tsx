import { Session } from 'next-auth/client';
import React from 'react';

interface Props {
  session: Session;
  logo: string;
  signIn: Function;
  signOut: Function;
  handleClick: Function;
}

export default function MobileNavBar({ session, logo, signIn, signOut, handleClick }: Props) {
  return (
    <React.Fragment>
      <nav
        className='uk-navbar uk-navbar-container uk-navbar-sticky uk-navbar-transparent uk-light uk-background-secondary'
        data-uk-sticky='animation: uk-animation-slide-top; top: 200'
        data-uk-navbar
      >
        <div className='uk-navbar-left'>
          <a className='uk-navbar-item uk-logo' href='/'>
            <img src={logo} width={120} />
          </a>
        </div>
        <div className='uk-navbar-right'>
          <span
            className='uk-margin-medium-right'
            uk-toggle='target: #offcanvas-usage'
            uk-icon='icon: menu; ratio: 1.2'
          ></span>
        </div>
      </nav>

      <div id='offcanvas-usage' data-uk-offcanvas='flip: true; overlay: true'>
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
              </React.Fragment>
            )}
            <li className='uk-nav-divider'></li>
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
      </div>
    </React.Fragment>
  );
}
