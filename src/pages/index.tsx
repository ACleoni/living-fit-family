import Head from 'next/head'
import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Form from '../components/form/Form';
import Landing from '@/components/fullpage/landing/Landing';



export default function Index({ }) {
  const anchors = ["home", "services", "testimonials", "contact"];

  return (
    <div>
      <ReactFullpage
        licenseKey={process.env.NEXT_PUBLIC_FULL_PAGE_LICENSE}
        scrollingSpeed={1000}
        autoScrolling={false}
        scrollBar={true}
        anchors={anchors}
        sectionsColor={["#fff", "#fff", "#fff", "#fff"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Landing />
              </div>
              <div className="section">
                <span style={{ color: 'black', height: '20rem', fontSize: '3rem', fontWeight: "bold", width: '100%', textAlign: 'center', display: 'block', padding: '5rem' }}>Services</span>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div style={{ border: '1px solid black', maxWidth: '720px', width: '520px', height: '500px' }}>
                    {/* <img width='100%' height='100%' src="https://res.cloudinary.com/dq0fvempx/image/upload/v1602819461/1on1.jpg" /> */}
                  </div>
                  <div style={{ border: '1px solid black', padding: '1rem', maxWidth: '720px', width: '480px', height: '500px' }}>

                  </div>
                  <div style={{ border: '1px solid black', padding: '1rem', maxWidth: '720px', width: '480px', height: '500px' }}>

                  </div>
                </div>
                {/* <div className="slide">

                </div>
                <div className="slide">

                </div>
                <div className="slide">

                </div> */}
              </div>
              <div className="section">

              </div>
              <div className="section">
                <Form />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  )
}
