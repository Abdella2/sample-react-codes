import http from './httpService';

export const getGenders = () => http.get('http://localhost:4000/api/genders');
