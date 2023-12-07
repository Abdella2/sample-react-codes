import config from '../config.json';
import http from './httpService';

const apiEndpoint = `${config.baseUrl}/genders`;

export const getGenders = () => http.get(apiEndpoint);
