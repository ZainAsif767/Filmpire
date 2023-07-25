import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
  },
});

export const fetchToken = async () => {
  try {
    const { data } = await moviesApi.get('/authentication/token/new');

    const token = data.request_token;

    if (data.success) {
      localStorage.setItem('request_token', token);

      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Sorry, your token could not be created.');
  }
};

export const createSessionId = async () => {
  const token = localStorage.getItem('request_token');

  if (token) {
    try {
      // eslint-disable-next-line camelcase
      const { data: { session_id } } = await moviesApi.post('authenticate/session/new', {
        request_token: token,
      });

      localStorage.setItem('session_id', session_id);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
};
