import React, { useState, useEffect, useRef } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import Logo from '../../../public/Logo.svg';
import { useRouter } from 'next/router';
import MobileNavBar from './navigation/mobile/mobile-navbar';
import StandardNavBar from './navigation/standard/standard-navbar';

// import UIkit from 'uikit';
import Axios from 'axios';

export default function Header() {
  const router = useRouter();
  const [headerState, setHeaderState] = useState('');
  const [session, loading] = useSession();
  const [isMobile, setIsMobile] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY >= 500) {
      return setHeaderState('scroll');
    } else {
      return setHeaderState('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    window.screen.width <= 960 ? setIsMobile(true) : setIsMobile(false);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const handleClick = async () => {
    // try {
    //   const response = await Axios({
    //     method: 'get',
    //     url: '/api/stripe/billing',
    //   });
    //   router.push(response.data.message);
    // } catch (error) {
    //   const modal = UIkit.modal.alert(error.response.data.message).dialog;
    //   const el = modal.$el;
    //   el.style.color = 'black';
    // }
  };

  const props = {
    session: session,
    logo: Logo,
    signIn: signIn,
    signOut: signOut,
    handleClick: handleClick,
  };

  return <div>{isMobile ? <MobileNavBar {...props} /> : <StandardNavBar {...props} />}</div>;
}
