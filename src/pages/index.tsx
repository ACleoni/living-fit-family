import Head from 'next/head';
import React from 'react';
import Form from '../components/form/Form';
import Landing from '@/components/landing/Landing';
import Services from '@/components/services/Services';
import Online from '@/components/online/Online';

export default function Index() {
  const anchors = ['home', 'services', 'testimonials', 'contact'];

  return (
    <React.Fragment>
      <Landing />
      <Services />
      {/* <Landing />
      <Services />
      <Online />
      <Form /> */}
    </React.Fragment>
  );
}
