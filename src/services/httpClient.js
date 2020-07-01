import axios from 'axios';
import { endPointBaseURL } from '../config.json';


const api = axios.create({
    baseURL: endPointBaseURL,
    timeout: 1200000
})

export default function (url) {

    if (url) {
        api.baseURL = url;
    }
    return api;
}

