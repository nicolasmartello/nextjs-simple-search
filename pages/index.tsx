import { FunctionComponent } from 'react';
import MainContainer from '../components/mainContainer';

const Home: FunctionComponent = () => (
  <MainContainer
    title={(
      <>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </>
    )}
    displayFooter
  >
    <h1 className="title">
        Welcome to <a href="/agileengine">Agile engine exercise, click me!</a>
    </h1>
  </MainContainer>
);

export default Home;
