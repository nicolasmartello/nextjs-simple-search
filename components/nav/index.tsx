import { FunctionComponent, useState } from 'react';
import Link from 'next/link';

const Nav: FunctionComponent = () => {
  const [selectedMenu, setSelectedMenu] = useState('home');
  
  return (
    <ul>
      <Link href="/">
        <a
          className={selectedMenu === 'home' ? 'nav--selected' : ''}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={selectedMenu === 'about' ? 'nav--selected' : ''}
        >
          About us
        </a>
      </Link>
      <Link href="/jumpstart">
        <a
          className={selectedMenu === 'about' ? 'nav--selected' : ''}
        >
          Jump start
        </a>
      </Link>
    </ul>
  );
}
  

export default Nav;
