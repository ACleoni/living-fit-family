import Head from 'next/head';
import React from 'react';
import Landing from '@components/landing/Landing';
import Services from '@components/services/Services';
import Modal from '@components/common/modal/Modal';
import { Store } from 'src/context/store';

export default function Index() {
  const { state: context, dispatch } = React.useContext(Store);
  console.log(context);
  return (
    <div>
      <Landing />
      {/* <Slider /> */}
      <Services />
      <Modal modalOpen={context.modalOpen} />
    </div>
  );
}
