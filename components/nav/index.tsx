import { FunctionComponent } from 'react';
import Link from 'next/link';
// Constants
import sections from '../../constants/nav';

const {
  HOME,
  ABOUT
} = sections;

type PropsType = {
  selectedMenu?: string
};

const Nav: FunctionComponent<PropsType> = ({
  selectedMenu
}: PropsType) => (
  <ul>
    <Link href="/">
      <a
        className={selectedMenu === HOME ? 'nav--selected' : ''}
      >
        Home
      </a>
    </Link>
    <Link href="/about">
      <a
        className={selectedMenu === ABOUT ? 'nav--selected' : ''}
      >
        About us
      </a>
    </Link>
  </ul>
);

export default Nav;
