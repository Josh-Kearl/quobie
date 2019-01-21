import React from 'react';

import Quotes from './quotes/Quotes';
import '../assets/styles/components/Discover.css';

import mock from '../services/mock';

const Discover = () => (
  <section className="discover">
    <p className="discover-headline">Discover & discuss quotes from great literature.</p>
    <Quotes quotes={mock} />
  </section>
);

export default Discover;
