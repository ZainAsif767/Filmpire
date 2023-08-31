import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

// /movie/popular?api_key=API_KEY_HERE&language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    //* Get Movies by {Type}
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        //* Get movies by Search
        if (searchQuery) {
          return `movie/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get movies by category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get Movies by Genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //* Get popular Movie
        return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),

    //* Get Movie
    getMovie: builder.query({
      query: ({ id }) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),

    //* Get user specific list
    getRecommendations: builder.query({
      // eslint-disable-next-line camelcase
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
} = tmdbApi;
