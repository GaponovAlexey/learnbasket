import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const userAPI = 'https://jsonplaceholder.typicode.com'

export interface IPost {
  id: number;
  title: string;
  body: string
}


export const PostsServise = createApi({
  reducerPath: 'PostsServise',
  baseQuery: fetchBaseQuery({ baseUrl: userAPI }),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query<IPost[], number>({
      query: (limit: 5) => ({
        url: `/posts`,
        params: {
          _limit: limit
        }
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = PostsServise
