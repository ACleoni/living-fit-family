import React, { ChangeEvent, JSXElementConstructor } from 'react';
import { useRouter } from 'next/router';

import httpHandler from 'src/pages/api/http/httpHandler';
import styles from './Billing.module.scss';
import Logo from '../../../public/Logo.svg';
import next from 'next';

export default function Billing() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [active, setActive] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  const emailRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const phaseFormRef = React.useRef(null);
  const sendRef = React.useRef(null);
  const loadingRef = React.useRef(null);

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      loadingRef.current.classList.add(styles.show);
      const session = await httpHandler('/api/stripe', 'POST', { email, password });
      router.push(session.url);
    } catch (error) {
      loadingRef.current.classList.remove(styles.show);
      alert('Oops, something went wrong. Please try again.');
    }
  };

  function trim(str) {
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
      if (/\S/.test(str.charAt(i))) {
        str = str.substring(0, i + 1);
        break;
      }
    }
    return str;
  }

  function isEmail(str) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(str);
  }

  const send = () => {
    httpHandler('/api/mailer', 'POST', { email });
  };

  const next = () => {
    if (email) {
      buttonRef.current.classList.add(styles.active);
      phaseFormRef.current.classList.add(styles.next);
      sendRef.current.classList.add(styles.show);
      setActive(true);
      send();
    } else {
      emailRef.current.classList.add(styles.error);
    }
  };

  const back = () => {
    if (active) {
      buttonRef.current.classList.remove(styles.active);
      phaseFormRef.current.classList.remove(styles.next);
      setActive(false);
    }
  };

  const removeError = (ref) => {
    try {
      ref.classList.remove(styles.error);
    } catch (msg) {}
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.backButton} id='back-button' ref={buttonRef} onClick={() => back()}>
        <i className='fa fa-arrow-left' />
      </div>
      <div className={styles.line}>
        <div>Login</div>
        <p>{active ? 'Enter 6 digit passcode sent to your email' : 'Enter your credentials'}</p>
      </div>
      <div className={styles.phases} id='phase-form' ref={phaseFormRef}>
        <div id='phase-1'>
          <input
            id='email'
            ref={emailRef}
            autoComplete='off'
            onChange={(event) => setEmail(event.target.value)}
            onFocus={() => removeError(this)}
            type='text'
            placeholder='Enter Email'
          />
          <button onClick={() => next()}>Next</button>
        </div>
        <div id='phase-2'>
          <input
            type='password'
            onChange={(event) => setPassword(event.target.value)}
            onFocus={() => removeError(this)}
            id='password'
            placeholder='Enter password'
          />
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>
      <div className={styles.send} ref={sendRef}>
        <a onClick={() => send()}>Resend Code</a>
      </div>
      <div className={styles.loading} ref={loadingRef} />
    </div>
  );
}
