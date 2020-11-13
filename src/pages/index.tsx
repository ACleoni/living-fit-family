import Head from 'next/head';
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Form from '../components/form/Form';
import Landing from '@/components/landing/Landing';
import Services from '@/components/services/Services';
import Online from '@/components/online/Online';

export default function Index() {
  const anchors = ['home', 'services', 'testimonials', 'contact'];

  return (
    <div>
      <Landing />
      {/* <Landing />
      <Services />
      <Online />
      <Form /> */}
    </div>
  );
}
