import Head from 'next/head';
import { FunctionComponent, ReactNode } from 'react';
import styles from '../../styles/Home.module.css';
import Nav from '../nav';

interface PropsType {
  children: ReactNode,
  displayFooter?: boolean,
  title?: string | ReactNode
};

const MainContainer: FunctionComponent<PropsType> = ({
  children,
  displayFooter = false,
  title
}) => (
  <div className={styles.container}>
    <Nav />
    <main className={styles.main}>
      {title && (
        <Head>
          {title}
        </Head>
      )}
      {children}
    </main>
    {displayFooter && (
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    )}
  </div>
);

export default MainContainer;
