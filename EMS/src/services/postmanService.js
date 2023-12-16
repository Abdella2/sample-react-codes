import config from '../config.json';
import http from './httpService';

const apiEndpoint = `${config.baseUrl}/auth`;

export async function post(account) {
  try {
    const { data } = await http.post(apiEndpoint, account);
    console.log(data);
  } catch (err) {
    if (err.response && err.response.status === 400) {
      const { data } = err.response;
      console.log(data);
    }
  }
}
