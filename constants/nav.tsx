import { string } from "prop-types"

interface SectionsInterface {
  HOME: string,
  ABOUT: string,
  GIHPY_SEARCH: string
};

const section: SectionsInterface = {
  HOME: 'home',
  ABOUT: 'about',
  GIHPY_SEARCH: 'Giphy search'
};

export default section;
