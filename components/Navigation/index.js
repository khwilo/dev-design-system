import Link from 'next/link';

import styles from './Navigation.module.css';

const Navigation = () => (
  <section className={styles.container}>
    <h1 className='logo'>
      <span style={{ color: '#F7542E' }}>Dev</span>challenges.io
    </h1>
    <nav className={styles.nav}>
      <ul className={styles.nav___list}>
        <li className={styles.nav___item}>
          <Link href='#buttons'>
            <a className={styles.nav___link}>Button</a>
          </Link>
        </li>
        <li className={styles.nav___item}>
          <Link href='#inputs'>
            <a className={styles.nav___link}>Input</a>
          </Link>
        </li>
      </ul>
    </nav>
  </section>
);

export default Navigation;
