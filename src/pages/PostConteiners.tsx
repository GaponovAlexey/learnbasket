import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { PostsServise } from '../servise/userServise'
import { Postcont } from './Postcont'

export const PostConteiners = () => {
  const { user } = useAppSelector((state) => state.user)
  return (
    <div className='element'>
      {user.map((el) => (
        <Postcont key={el.id} {...el} />
      ))}
    </div>
  )
}
