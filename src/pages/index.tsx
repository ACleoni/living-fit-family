import Head from 'next/head';
import React from 'react';
import Form from '@components/form/Form';
import Landing from '@components/landing/Landing';
import Services from '@components/services/Services';
import Slider from '@components/common/slider/Slider';

export default function Index() {
  return (
    <div>
      <Landing />
      <Slider />
      <Services />
      {/* <Services />
      <Testimonials />
      <Form /> */}
    </div>
  );
}
