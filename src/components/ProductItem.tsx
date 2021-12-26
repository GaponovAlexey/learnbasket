import React from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { addReducer } from '../Redux'

interface Prod {
  id: number
  name: string
  imagePath: string
  price: number
}

export const ProductItem: React.FC<Prod> = ({ name, id, imagePath, price }) => {
  const dispatch = useAppDispatch()
  return (
    <div className='flex rounded-md shadow-md p-5 w-2/5 mx-auto flex-col items-center'>
      <img className='h-24' src={imagePath} alt={name} />
      <div>{name}</div>
      <div className='text-2xl'>{price}</div>
      <button
        onClick={() => dispatch(addReducer({ id, name, imagePath, price }))}
        className='text-red-600 bg-sky-100 rounded-md p-1'
      >
        bay
      </button>
    </div>
  )
}
