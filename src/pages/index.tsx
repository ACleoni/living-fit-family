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
      <ReactFullpage
        licenseKey={process.env.NEXT_PUBLIC_FULL_PAGE_LICENSE}
        scrollingSpeed={1000}
        autoScrolling={false}
        scrollBar={true}
        anchors={anchors}
        sectionsColor={['#fff', '#fff', '#fff', '#fff']}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <Landing />
              </div>
              <div className='section'>
                <Services />
              </div>
              <div className='section'>
                <Online />
              </div>
              <div className='section'>
                <Form />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
