import axios from 'axios';
import config from './config.json';

interface GiphyInterface {
  get: (filterBy: string, limit?: number) => object,
  getTrendingTopic: (limit?: number) => object,
};

const GiphyService: GiphyInterface = {

  async get(filterBy, limit = 20) {
    const res = await axios.get(`${config.GIPHY_URI}/search`, {
      params: {
        q: filterBy,
        limit,
        api_key: config.GIPHY_KEY,
      },
    });
    const payload = res.data;
    const { data } = payload;
    return data;
  },

  async getTrendingTopic(limit = 10) {
    const res =  await axios.get(`${config.GIPHY_URI}/trending`, {
      params: {
        limit,
        api_key: config.GIPHY_KEY,
      },
    });
    const payload = res.data;
    const { data } = payload;
    return data;
  }

};

export default GiphyService;