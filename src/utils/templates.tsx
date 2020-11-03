import React from 'react';

export default function MailTemplate(token: string) {
  return (
    <div>
      <p>Please use the following One Time Password to complete your request to manage your billing details.</p>
      <br />
      <b>{token}</b>
    </div>
  );
}
