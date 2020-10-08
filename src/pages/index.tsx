import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage';
import Header from '@/components/header/Header'
import styles from '@/styles/Home.module.scss'
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

import Map from '../components/map/map';
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
        sectionsColor={["#282c34", "#ff5f45", "#0798ec", "#fff"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                  <CloudinaryContext cloudName="dq0fvempx">
                    <Video publicId="landing-page-video" muted loop autoPlay>
                      <Transformation width="300" crop="scale"  overlay="text:arial_60:watchme" gravity="north" y="20" />
                    </Video>
                  </CloudinaryContext>
              </div>
              <div className="section">
                <div className="slide">
                  {/* <h3 style={{ width: '100%', justifyContent: 'center' }}>Slide 2.1</h3> */}
                </div>
                <div className="slide">
                  {/* <h3>Slide 2.2</h3> */}
                </div>
                <div className="slide">
                  {/* <h3>Slide 2.3</h3> */}
                </div>
              </div>
              <div className="section">
                {/* <h3>Section 3</h3> */}
              </div>
              <div className="section">
                <Map location={location} zoomLevel={10} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  )
}
