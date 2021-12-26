import React from 'react'

interface Prod {
  id: number
  name: string
  imagePath: string
  price: number
}

export const ProductItem: React.FC<Prod> = ({
  name,
  id,
  imagePath,
  price,
}) => {
  return <div>{name}</div>
}
