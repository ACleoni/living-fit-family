import React from 'react';
import { Box } from '@material-ui/core';
import { Video } from 'cloudinary-react';
import Slider from '@components/common/slider/Slider';

export default function Landing() {
  return (
    <Video
      width={'100%'}
      cloudName={'dq0fvempx'}
      muted
      autoPlay
      loop
      playsInline
      data-keepplaying
      publicId='landing-page-video'
    ></Video>
  );
}
