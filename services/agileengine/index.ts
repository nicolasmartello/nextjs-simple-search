import axios from 'axios';
import config from './config.json';

type HeaderType = {
  headers: {
    Authorization: string
  }
}

interface AgileEngineInterface {
  getToken: () => any,
  getHeader: () => any,
  getImages: (page?: number) => object,
  getImageDetail: (pid: string) => object, 
};

const AgileEngineService: AgileEngineInterface = {

  async getToken() {
    const res = await axios.post(`${config.URL}/auth`, {
      apiKey: '23567b218376f79d9415'
    });
    const { data: { token } } = res;
    return token;
  },

  async getHeader() {
    const token = await this.getToken();
    const header: HeaderType = {
      headers: { Authorization: `Bearer ${token}` }
    };
    return header;
  },

  async getImages(page) {
    const header = await this.getHeader();
    let url = `${config.URL}/images`;
    const params='';
    if (page) {
      url += `?page=${page}`; 
    }
    const res =  await axios.get(url, header);
    const { data: { pictures } } = res;

    return pictures;
  },

  async getImageDetail(pid) {
    if (!pid) {
      return null;
    }
    const header = await this.getHeader();
    let url = `${config.URL}/images/${pid}`;
    const res =  await axios.get(url, header);
    const { data } = res;

    return data;
  },

};

export default AgileEngineService;