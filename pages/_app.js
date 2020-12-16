import { SectionContextProvider } from '../context/';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SectionContextProvider>
      <Component {...pageProps} />
    </SectionContextProvider>
  );
}

export default MyApp;
