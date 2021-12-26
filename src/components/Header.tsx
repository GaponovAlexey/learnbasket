import React from 'react'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../hooks/hooks'
import { RootState } from '../Redux/store'

export const Header = () => {
  // const count = useSelector((state: RootState) => state.count.count)
  const count = useAppSelector(state => state.count.count)
  return (
    <div className='bg-cyan-200 p-2 '>
      <span>header</span>
      {count}
      <span className='absolute right-3'>basket</span>
    </div>
  )
}
