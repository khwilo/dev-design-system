import Head from 'next/head';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className='wrapper'>
      <Head>
        <title>Dev Challenges | Design System</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='section flow'>
        <h1 className='section-heading1'>Buttons</h1>

        <div className='section__btn flex'>
          <div>
            <h3 className='button-label'>{`<Button />`}</h3>
            <Button title='Default' />
          </div>
        </div>
      </section>
    </div>
  );
}
