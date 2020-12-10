import Head from 'next/head';
import React from 'react';
import Landing from '@components/landing/Landing';
import Services from '@components/services/Services';
import Modal from '@components/common/modal/Modal';
import Slider from '@components/common/slider/Slider';
import { Store } from 'src/context/store';
import { Grid, Paper, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Index() {
  const { state: context, dispatch } = React.useContext(Store);
  console.log(context);
  return (
    <div>
      <Landing />
      <Services />
      <Modal modalOpen={context.modalOpen} />
    </div>
  );
}
