import { FunctionComponent } from 'react';
import Link from 'next/link';
// Constants
import sections from '../../constants/nav';
// Styles
import NavStyles from '../../styles/Nav.module.scss';
const {
  HOME,
  ABOUT,
  AGILE_ENGINE
} = sections;

type PropsType = {
  selectedMenu?: string
};

const Nav: FunctionComponent<PropsType> = ({
  selectedMenu
}: PropsType) => (
  <div
    className={NavStyles.container}
  >
    <ul>
      <Link href="/">
        <a
          className={selectedMenu === HOME ? 'nav--selected' : ''}
        >
          Home
        </a>
      </Link>
      <Link href="/agileengine">
        <a
          className={selectedMenu === AGILE_ENGINE ? 'nav--selected' : ''}        
        >
          Agile engine photos
        </a>
      </Link>
    </ul>
  </div>
);

export default Nav;
