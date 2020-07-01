import httpClient from '../services/httpClient';

export const getAllPosts = () => httpClient().get('/posts');

export const postMyPost = (post) => httpClient().post('/posts', post);


