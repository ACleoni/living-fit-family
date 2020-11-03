import React, { ChangeEvent, JSXElementConstructor } from 'react';
import styles from './Billing.module.scss';

export default function Billing() {
  const [email, setEmail] = React.useState('');
  const [displayPasswordField, setDisplayPasswordField] = React.useState(false);

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.type);
    switch (event.target.type) {
      case 'email':
        setEmail(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.length > 0) {
      setDisplayPasswordField(true);
      postData('/api/mailer', { email }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <h2 className='animation a1'>Welcome Back</h2>
          <h4 className='animation a2'>Log in to your account using email and password</h4>
        </div>
        <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
          <input
            type='email'
            className={`${styles.formField} ${styles.animation} ${styles.a3}`}
            placeholder='Email Address'
            onChange={(event) => handleChange(event)}
          />
          {displayPasswordField ? (
            <input
              type='password'
              className={`${styles.formField} ${styles.animation} ${styles.a4}`}
              placeholder='Password'
            />
          ) : null}
          <p className='animation a5'>
            <a href='#'>Resend Password</a>
          </p>
          <button className='animation a6' type='submit'>
            LOGIN
          </button>
        </form>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
