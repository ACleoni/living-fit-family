import Head from 'next/head';
import React from 'react';
import Form from '@components/form/form';
import Landing from '@components/landing/Landing';
import Services from '@components/services/Services';
import Testimonials from '@components/testimonials/Testimonials';

export default function Index() {
  return (
    <div className='uk-container-large'>
      <Landing />
      <Services />
      <Testimonials />
      <Form />
    </div>
  );
}
