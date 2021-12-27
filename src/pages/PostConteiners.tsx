import React from 'react'
import { PostsServise } from '../servise/userServise'

export const PostConteiners = () => {
  const {data: posts } = PostsServise.useFetchAllPostsQuery(5)
  return (
    <div>
     {posts?.map(el => el.body)}
    </div>
  )
}
