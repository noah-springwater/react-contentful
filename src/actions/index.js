import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = '';
const API_TOKEN = '';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=post`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
