import React, { useState, useEffect, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import styles from './Header.module.scss';
import Logo from '../../../public/Logo.svg';
import { useRouter } from 'next/router';
import httpHandler from 'src/pages/api/http/httpHandler';
import { Video } from 'cloudinary-react';
import MobileNavBar from './navigation/mobile/mobile-navbar';
import { handleError } from '../../utils/utils';
import UIkit from 'uikit';
import Axios from 'axios';

export default function Header() {
  const router = useRouter();
  const [headerState, setHeaderState] = useState(router.pathname === '/' ? 'uk-dark' : 'uk-light');
  const [session, loading] = useSession();
  const [isMobile, setIsMobile] = useState(false);
  const [alert, setAlert] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY >= 500) {
      return setHeaderState('');
    } else {
      return setHeaderState('uk-dark');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    window.screen.width <= 600 ? setIsMobile(true) : setIsMobile(false);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const displayAlert = () => {
    setAlert(true);
  };

  const handleClick = async () => {
    try {
      const response = await Axios({
        method: 'get',
        url: '/api/stripe/billing',
      });
      router.push(response.data.message);
    } catch (error) {
      const modal = UIkit.modal.alert(error.response.data.message).dialog;
      const el = modal.$el;
      el.style.color = 'black';
    }
  };

  const props = {
    session: session,
    logo: Logo,
    signIn: signIn,
    signOut: signOut,
    handleClick: handleClick,
    handleError: handleError,
  };

  return (
    <div className='uk-position-relative'>
      {alert && (
        <div id='my-id' data-uk-modal>
          <div className='uk-modal-dialog uk-modal-body'>
            <h2 className='uk-modal-title'></h2>
            <button className='uk-modal-close' type='button'></button>
          </div>
        </div>
      )}
      {isMobile ? <MobileNavBar {...props} /> : null}
    </div>
  );
}
