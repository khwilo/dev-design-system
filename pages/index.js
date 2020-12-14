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
            <h3 className='btn-label'>{`<Button />`}</h3>
            <Button title='Default' />
          </div>
        </div>

        <div className='section__btn flex'>
          <div>
            <h3 className='btn-label'>{`<Button variant="outline" />`}</h3>
            <Button title='Default' variant='outline' />
          </div>
        </div>

        <div className='section__btn flex'>
          <div>
            <h3 className='btn-label'>{`<Button variant="text" />`}</h3>
            <Button title='Default' variant='text' />
          </div>
        </div>

        <div className='section__btn flex'>
          <div>
            <h3 className='btn-label'>{`<Button disableShadow />`}</h3>
            <Button title='Default' disabledShadow />
          </div>
        </div>

        <div className='section__btn flex'>
          <div>
            <h3 className='btn-label'>{`<Button disabled />`}</h3>
            <Button title='Default' disabled />
          </div>
          <div>
            <h3 className='btn-label'>{`<Button variant="text" disabled />`}</h3>
            <Button title='Default' variant='text' disabled />
          </div>
        </div>
      </section>
    </div>
  );
}
