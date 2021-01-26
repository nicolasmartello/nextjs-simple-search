
import MainContainer from '../../components/mainContainer';
import GiphyService from '../../services/giphy';

interface GiphyItemInterface {
  title: string
};

interface GiphyProps {
  list?: Array<GiphyItemInterface> | null
};

const Giphy = (props: GiphyProps) => {
  const { list } = props;
  return (
    <MainContainer>
      <h1>Giphy</h1>
      <div>
        {list && list.map(item => (
          <a>{item.title}</a>  
        ))}
      </div>
    </MainContainer>
  );
};

Giphy.getInitialProps = async () => {
  const list = await GiphyService.getTrendingTopic();
  return { list };
}

export default Giphy;