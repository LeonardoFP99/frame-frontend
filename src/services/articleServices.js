import axios from 'axios';

const baseURL = import.meta.env.VITE_APIURL;

export function getAllPosts() {
    const response = axios.get(`${baseURL}/article`);
    return response;
}