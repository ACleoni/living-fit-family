import React from 'react';

export default function Redirect() {
  return (
    <form method='POST' action='/pages/api/stripe' style={{ position: 'absolute', top: 50 }}>
      <button type='submit'>Manage Billing</button>
    </form>
  );
}
