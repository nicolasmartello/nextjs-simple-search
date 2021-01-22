import { NextFunctionComponent } from 'next';
import MainContainer from '../../components/mainContainer';
import  GiphyService from '../../services/giphy';

interface GiphyProps {
  list: Array<object>
};

const Giphy: NextFunctionComponent<GiphyProps> = (props: GiphyProps) => {
  const { list } = props;
  return (
    <MainContainer>
      <h1>Giphy</h1>
      <div>
        
      </div>
    </MainContainer>
  );
};

Giphy.getInitialProps = async () => {
  const list = await GiphyService.getTrendingTopic();
  return { list };
}

export default Giphy;