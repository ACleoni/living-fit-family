import React, { useRef } from 'react';
import UIkit from 'uikit';

type FormRequestBody = {
  fullName: string;
  phoneNumber: string;
  instagram: string;
  email: string;
  message: string;
};

export default function Form() {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { elements } = e.target;
    let body: FormRequestBody;

    for (let i = 0; i < elements.length; i++) {
      const key = elements[i].name;
      const value = elements[i].value;
      if (key && value) {
        body = { ...body, [key]: value };
      }
    }

    fetch('/api/mailer', { method: 'POST', body: JSON.stringify(body) }).then(() => {
      const modal = UIkit.modal.alert(
        'We received your message! Thank you for your interest in our training services. Somone from our team will be in contact with you shortly. '
      ).dialog;
      const el = modal.$el;
      el.style.color = 'black';
      form.current.reset();
    });
  };

  return (
    <div className='uk-container uk-padding'>
      <h1 className='uk-text-light uk-text-center'>Get In Touch</h1>
      <form onSubmit={(e) => handleSubmit(e)} className='uk-grid-small' data-uk-grid ref={form}>
        <div className='uk-margin-small uk-width-1-1'>
          <div className='uk-inline uk-width-1-1'>
            <span className='uk-form-icon' uk-icon='icon: user'></span>
            <input className='uk-input' name='fullName' placeholder='full name' required />
          </div>
        </div>
        <div className='uk-margin-small uk-width-1-2@s'>
          <div className='uk-inline uk-width-1-1'>
            <span className='uk-form-icon' uk-icon='icon: receiver'></span>
            <input className='uk-input' name='phoneNumber' placeholder='phone number' required />
          </div>
        </div>
        <div className='uk-margin-small uk-width-1-4@s'>
          <div className='uk-inline uk-width-1-1'>
            <span className='uk-form-icon' uk-icon='icon: instagram'></span>
            <input className='uk-input' name='instagram' placeholder='instagram' required />
          </div>
        </div>
        <div className='uk-margin-small uk-width-1-4@s'>
          <div className='uk-inline uk-width-1-1'>
            <span className='uk-form-icon' uk-icon='icon: mail'></span>
            <input className='uk-input' name='email' placeholder='email' required />
          </div>
        </div>
        <div className='uk-margin-small uk-width-1-2@s'>
          <textarea className='uk-textarea' name='message' placeholder='message' rows={5} required />
        </div>
        <div>
          <button type='submit' className='uk-button uk-button-primary'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
