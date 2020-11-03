import React, { ChangeEvent, JSXElementConstructor } from 'react';
import { useRouter } from 'next/router';

import httpHandler from 'src/pages/api/http/httpHandler';
import styles from './Billing.module.scss';

export default function Billing() {
  const [email, setEmail] = React.useState('');
  const [displayPasswordField, setDisplayPasswordField] = React.useState(false);

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.type);
    switch (event.target.type) {
      case 'email':
        setEmail(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.length > 0) {
      setDisplayPasswordField(true);
      const data = await httpHandler('/api/mailer', 'POST', { email });
      const { token } = data;
      const session = await httpHandler('/api/stripe', 'POST', { email, token });
      router.push(session.url);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.logo}></div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input type='email' style={{ width: '100px', height: '200px' }} onChange={(event) => handleChange(event)} />
        </form>
      </div>
    </div>
  );
}
