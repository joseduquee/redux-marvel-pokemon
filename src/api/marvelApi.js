import axios from 'axios';
import { useSelector } from 'react-redux';

const publicKey = '29c3f870edb371f5cccd1933f3eb0b79',
    privateKey = '8bfb3e9e4e4c6a5197980571830d1a847c3d5e46',
    hash = 'bcecf11f87f84a84871ac133b9d1aa09';

export const endUrl = `&ts=1&apikey=${ publicKey }&hash=${ hash }`

export const marvelApi = axios.create({
    baseURL: `https://gateway.marvel.com:443/v1/public`,
})