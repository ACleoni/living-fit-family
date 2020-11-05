import React from 'react';

export default function MailTemplate(oneTimePassword: string) {
  return (
    <div>
      <p>Please use the following One Time Password to complete your request to manage your billing details:</p>
      <b>{oneTimePassword}</b>
    </div>
  );
}
