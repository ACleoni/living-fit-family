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
      <div className={styles.loginBox}>
        <div className={styles.logo}></div>
      </div>
    </div>
  );
}
