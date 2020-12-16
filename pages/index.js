import Head from 'next/head';

import Navigation from '../components/Navigation';
import { SectionButton } from '../containers/Section';

export default function Home() {
  return (
    <div className='wrapper'>
      <Head>
        <title>Dev Challenges | Design System</title>
      </Head>

      <main className='main'>
        <Navigation />

        <SectionButton />
      </main>
    </div>
  );
}
