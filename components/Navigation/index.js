import React from 'react';

import { SectionContext } from '../../context';
import styles from './Navigation.module.css';

const Navigation = () => {
  const { currentSection, setCurrentSection } = React.useContext(
    SectionContext
  );

  return (
    <section className={styles.container}>
      <h1 className='logo'>
        <span style={{ color: '#F7542E' }}>Dev</span>challenges.io
      </h1>
      <nav className={styles.nav}>
        <ul className={styles.nav___list}>
          <li className={styles.nav___item}>
            <a
              className={styles.nav___link}
              onClick={() => setCurrentSection(1)}
              style={{
                color: currentSection === 1 && '#090f31',
                fontWeight: currentSection === 1 && 'var(--fw-bold)',
              }}
            >
              Button
            </a>
          </li>
          <li className={styles.nav___item}>
            <a
              className={styles.nav___link}
              onClick={() => setCurrentSection(2)}
              style={{
                color: currentSection === 2 && '#090f31',
                fontWeight: currentSection === 2 && 'var(--fw-bold)',
              }}
            >
              Input
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;
