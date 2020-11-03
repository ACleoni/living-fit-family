import React, { ChangeEvent, JSXElementConstructor } from 'react';
import { useRouter } from 'next/router';

import httpHandler from 'src/pages/api/http/httpHandler';
import styles from './Billing.module.scss';
import Logo from '../../../public/Logo.svg';

export default function Billing() {
  const [email, setEmail] = React.useState('');
  const [counter, setCounter] = React.useState(0);
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const [displayPasswordField, setDisplayPasswordField] = React.useState(false);

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    switch (event.target.type) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (counter == 0) {
      setCounter(counter + 1);
      setDisplayPasswordField(true);
      const data = await httpHandler('/api/mailer', 'POST', { email });
      console.log(data);
    }

    if (counter == 1) {
      try {
        const session = await httpHandler('/api/stripe', 'POST', { email, password });
        router.push(session.url);
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.test} ${styles.loginBox}`}>
        <div className={styles.row}>
          <div className={styles.logo}>
            <img src={Logo} width='400px' height='auto' />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.instruction} style={{}}>
            <h5>One-Time-Password(OTP)</h5>
          </div>
          <form onSubmit={(event) => handleSubmit(event)}>
            {displayPasswordField ? (
              <input
                className={styles.input}
                type='password'
                name='password'
                placeholder='Password'
                onChange={(event) => handleChange(event)}
              />
            ) : (
              <input
                className={styles.input}
                type='email'
                name='email'
                placeholder='Email'
                onChange={(event) => handleChange(event)}
              />
            )}
            <div className={styles.errormessage}>Please enter a valid email / password</div>
            <input
              className={styles.input}
              type='submit'
              name='submit'
              defaultValue='SUBMIT'
              onSubmit={(event) => handleSubmit(event)}
            />
          </form>
          <div className={styles.instruction} style={{}}>
            If you did not receive your OTP or your OTP has expired, please click here to resend.
          </div>
        </div>
      </div>
    </div>
  );
}
