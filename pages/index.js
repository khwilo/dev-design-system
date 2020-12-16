import Head from 'next/head';
import React from 'react';

import Navigation from '../components/Navigation';
import { SectionButton, SectionInput } from '../containers/Section';
import { SectionContext } from '../context';

export default function Home() {
  const { currentSection } = React.useContext(SectionContext);

  return (
    <div className='wrapper'>
      <Head>
        <title>Dev Challenges | Design System</title>
      </Head>

      <main className='main'>
        <Navigation />

        <div className='main__content'>
          {currentSection === 1 ? <SectionButton /> : null}

          {currentSection === 2 ? <SectionInput /> : null}
        </div>
      </main>
    </div>
  );
}
