import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const userAPI = 'https://jsonplaceholder.typicode.com/'

export interface IPost {
  id: number
  title: string
  body: string
}

export const PostsServise = createApi({
  reducerPath: 'mypath',
  baseQuery: fetchBaseQuery({ baseUrl: userAPI }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: () => ({
        url: `posts`,
      }),
    }),
  }),
})
