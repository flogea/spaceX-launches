import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const spacexUrl = 'https://api.spacexdata.com/';

export const api = createApi({
  reducerPath: 'spaceXApi',
  tagTypes: ['Launches'],
  baseQuery: fetchBaseQuery({ baseUrl: spacexUrl }),
  endpoints: (build) => ({
    getLaunches: build.query({
      query: () => `v5/launches`,
      providesTags: (result, error, arg) =>
        result ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Launches'] : ['Launches'],
    }),
    getRockets: build.query({
      query: () => `v4/rockets/`,
    }),
    getOneRocket: build.query({
      query: (id = '') => `v4/rockets/${id}`,
    }),
  }),
});

export const { useGetLaunchesQuery, useGetRocketsQuery, useGetOneRocketQuery } = api;
