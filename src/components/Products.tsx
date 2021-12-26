import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { ProductItem } from './ProductItem'

export const Products = () => {
  const { products } = useAppSelector((state) => state.count)
  return (
    <div className='m-6' >
      {products.map((prod) => (
        <ProductItem key={prod.name} {...prod} />
      ))}
    </div>
  )
}
