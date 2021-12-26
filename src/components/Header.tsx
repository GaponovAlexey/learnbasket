import cn from 'classnames'
import React, { useState } from 'react'
import { useAppSelector } from '../hooks/hooks'

export const Header = () => {
  const { basket, count } = useAppSelector((state) => state.count)
  const [isShowCard, setISSHOWCARD] = useState(false)

  return (
    <div className='bg-cyan-200 p-2 '>
      <span>header</span>
      <span className='absolute right-3 '>
        <button
          className='bg-transparent'
          onClick={() => setISSHOWCARD(!isShowCard)}
        >
          basket
        </button>
      </span>
      <div
        className={cn('absolute right-0 p-5 shadow-md rounded-md', {
          hidden: isShowCard,
        })}
      >
        {basket.map((bask) => (
          <div key={bask.name} className='flex items-center'>
            <img src={bask.imagePath} alt={bask.name} className='mr-3 h-14' />
            <div>
              <div>{bask.name}</div>
              <div className='text-2xl'>
                {bask.count} * {bask.price}$
              </div>
              <div className='absolute right-0  text-red-600' >&times;</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
