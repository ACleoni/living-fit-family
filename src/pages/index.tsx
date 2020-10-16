import Head from 'next/head'
import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Form from '../components/form/Form';



export default function Index() {
  const anchors = ["home", "services", "testimonials", "contact"];

  return (
    <div>
      <ReactFullpage
        licenseKey={process.env.NEXT_PUBLIC_FULL_PAGE_LICENSE}
        scrollingSpeed={1000}
        scrollBar={true}
        offsetSections={true}
        anchors={anchors}
        sectionsColor={["#fff", "#fff", "#0798ec", "#fff"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div style={{ width: '100%', height: '90vh', overflow: "hidden", display: 'inline-block', position: "absolute", top: 0 }}>
                  <div style={{ zIndex: 10, width: '100%', height: '90vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, left: 0 }}></div>
                  <video width='100%' height='100%' data-keepplaying muted autoPlay loop playsInline style={{ zIndex: 1, objectFit: 'cover' }}>
                    <source className="video-source" src="https://s3.amazonaws.com/assets.dailyburn.com/production/landing/LP_Core_v6.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="section">
                <div className="slide">

                </div>
                <div className="slide">

                </div>
                <div className="slide">

                </div>
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
