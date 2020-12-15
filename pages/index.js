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
          <div>
            <h3 className='btn-label'>{`<Button />`}</h3>
            <Button title='Default' defaultHoverFocus />
          </div>
        </div>

        <div className='section__btn flex'>
          <div>
            <h3 className='btn-label'>{`<Button variant="outline" />`}</h3>
            <Button title='Default' color='primary' variant='outline' />
          </div>
          <div>
            <h3 className='btn-label'>{`<Button variant="outline" />`}</h3>
            <Button
              title='Default'
              color='primary'
              variant='outline'
              primaryOutlineHoverFocus
            />
          </div>
        </div>

        <div className='section__btn flex'>
          <div>
            <h3 className='btn-label'>{`<Button variant="text" />`}</h3>
            <Button title='Default' color='primary' variant='text' />
          </div>
          <div>
            <h3 className='btn-label'>{`<Button variant="text" />`}</h3>
            <Button
              title='Default'
              color='primary'
              variant='text'
              primaryTextHoverFocus
            />
          </div>
        </div>

        <div className='section__btn flex'>
          <div>
            <h3 className='btn-label'>{`<Button disableShadow />`}</h3>
            <Button title='Default' color='primary' disabledShadow />
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

        <div className='section__btn flex'>
          <div>
            <h3 className='btn-label'>{`<Button startIcon="local_grocery_store" />`}</h3>
            <Button
              title='Default'
              color='primary'
              startIcon='local_grocery_store'
            />
          </div>
          <div>
            <h3 className='btn-label'>{`<Button endIcon="local_grocery_store" />`}</h3>
            <Button
              title='Default'
              color='primary'
              endIcon='local_grocery_store'
            />
          </div>
        </div>

        <div className='section__btn flex'>
          <div>
            <h3 className='btn-label'>{`<Button size="sm" />`}</h3>
            <Button title='Default' color='primary' size='sm' />
          </div>
          <div>
            <h3 className='btn-label'>{`<Button size="md" />`}</h3>
            <Button title='Default' color='primary' size='md' />
          </div>
          <div>
            <h3 className='btn-label'>{`<Button size="lg" />`}</h3>
            <Button title='Default' color='primary' size='lg' />
          </div>
        </div>

        <div className='section__btn flex'>
          <div>
            <h3 className='btn-label'>{`<Button color="default" />`}</h3>
            <Button title='Default' color='default' />
          </div>
          <div>
            <h3 className='btn-label'>{`<Button color="primary" />`}</h3>
            <Button title='Default' color='primary' />
          </div>
          <div>
            <h3 className='btn-label'>{`<Button color="secondary" />`}</h3>
            <Button title='Default' color='secondary' />
          </div>
          <div>
            <h3 className='btn-label'>{`<Button color="danger" />`}</h3>
            <Button title='Default' color='danger' />
          </div>
        </div>
      </section>
    </div>
  );
}
