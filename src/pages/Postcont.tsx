import React, { FC } from 'react'
import { TBasket } from '../Redux'
// import logo from '../image/1.jpg'

type zap = {
  title: string
  url: string
}


export const Postcont:FC<zap> = ({title, url}) => {
  return (
    <div className='' >
      <img className='' src={url} alt="logo" />
      <div className="">{title}</div>
    </div>
  )
}
