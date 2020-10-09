import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '@/components/header/Header'
import styles from '@/styles/Home.module.scss'
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

import Form from '../components/form/Form';
import React from "react";

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
};

export default function Index() {
  const anchors = ["home", "services", "testimonials", "contact"];

  return (
    <div>
      <ReactFullpage
        //fullpage options
        licenseKey={process.env.NEXT_PUBLIC_FULL_PAGE_LICENSE}
        scrollingSpeed={1000} /* Options here */
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={["#fff", "#fff", "#0798ec", "#fff"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                {/* <Video cloudName="dq0fvempx" publicId="landing-page-video" muted autoPlay loop>

                </Video> */}
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
