import React from 'react';

export default function MailTemplate({ fullName, phoneNumber, instagram, email, message }) {
  const modifiedInstagram = instagram[0] === '@' ? instagram.substring(1) : instagram;
  return (
    <div style={{ padding: '15px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <a href='https://livingfitfamily.com'>
          <img
            src={'https://res.cloudinary.com/dq0fvempx/image/upload/v1605971940/LivingFitFamily_1_wj8rnw.jpg'}
            width={200}
          />
        </a>
      </div>
      <h3>Living Fit Family LLC - New Message</h3>
      <p>Hello, you have a message from a new potential client. Please see details below: </p>
      <div>
        <div style={{ marginBottom: '15px' }}>
          <span>
            <b>Name:</b> {fullName}
          </span>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <span>
            <b>Phone Number:</b> {phoneNumber}
          </span>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <span>
            <b>Instagram:</b> <a href={`https://www.instagram.com/${modifiedInstagram}/`}>{instagram}</a>
          </span>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <span>
            <b>Email:</b> {email}
          </span>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <span>
            <b>Message:</b> {message}
          </span>
        </div>
      </div>
    </div>
  );
}
