import axios from 'axios';
import {BASE_API_URL} from '../constants/constants.ts';

const server = axios.create({
  baseURL: BASE_API_URL,
});

export default server;
