import axios from 'axios'

import { API_KEY } from 'react-native-dotenv';

export const client = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/', headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  }
})
