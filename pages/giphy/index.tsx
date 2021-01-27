/*------------------------------------------------*/
/* LIBRARIES
/*------------------------------------------------*/
import { useEffect, useState } from 'react';
/*------------------------------------------------*/
/* INTERNAL DEPENDENCIES
/*------------------------------------------------*/
// Components
import MainContainer from '../../components/mainContainer';
import SearchBar from '../../components/searchBar';
// Services
import GiphyService from '../../services/giphy';

interface ListItemInterface {
  title: string,
  id: string,
};

type ListType = Array<ListItemInterface>;

// SSR - POC
// interface GiphyProps {
//   list?: ListType | null
// };

const Giphy = () => {
  const [
    listState,
    setListState
  ] = useState<ListType | null>(null);
  const getTrendingTopic = async () => {
    const list: any = await GiphyService.getTrendingTopic();
    setListState(list);
  };
  const searchGiphy = async (text: string) =>  {
    let list: any;
    if (text.length > 3) {
      list = await GiphyService.getTrendingTopic();
    } else {
      list = await GiphyService.get(text);
    }
    
    setListState(list);
  };

  useEffect(() => {
    getTrendingTopic();
  }, []);

  return (
    <MainContainer>
      <h1>Giphy</h1>
      <SearchBar
        onSearch={searchGiphy}
      />
      <div>
        {listState && listState.map(item => (
          <a key={item.id}>{item.title}</a>  
        ))}
      </div>
    </MainContainer>
  );
};

// SSR - POC
// Giphy.getInitialProps = async () => {
//   const list = await GiphyService.getTrendingTopic();
//   return { list };
// }

export default Giphy;