import Head from 'next/head';
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Form from '../components/form/Form';
import Landing from '@/components/fullpage/landing/Landing';
import Services from '@/components/fullpage/services/Services';
import Online from '@/components/fullpage/online/Online';

export default function Index() {
  const anchors = ['home', 'services', 'testimonials', 'contact'];

  return (
    <div>
      <div>
        <Landing />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Online />
      </div>
      <div>
        <Form />
      </div>
      {/* </ReactFullpage.Wrapper> */}
      );
      {/* }} */}
      {/* /> */}
    </div>
  );
}
