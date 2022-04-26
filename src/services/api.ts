import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fake-server-rocketshoes.herokuapp.com/',
});