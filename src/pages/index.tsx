import Head from 'next/head';
import React from 'react';
import Landing from '@components/landing/Landing';
import { Media, MediaContextProvider } from '../utils/config';
import Services from '@components/services/Services';

export default function Index({ children }) {
  return (
    <div>
      <Services />
    </div>
  );
}
