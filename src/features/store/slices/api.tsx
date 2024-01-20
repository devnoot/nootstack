import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api`.
  reducerPath: 'api',

  // All of our requests will have URLs starting with '/api'
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),

  // The `endpoints` represent operations and requests for this api.
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => '/items',
    }),
    getItemById: builder.query({
      query: (id) => `/items/${id}`,
    }),
  }),
})

// @ts-ignore
export const { useGetItemsQuery, useGetItemByIdQuery } = apiSlice
