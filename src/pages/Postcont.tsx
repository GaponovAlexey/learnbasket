import React, { FC } from 'react'
import { TBasket } from '../Redux'

type zap = {
  title: string
  url: string
}

export const Postcont: FC<zap> = ({ title, url }) => {
  return (
    <div className=''>
      {/* <img className='' src={logo} alt='logo' /> */}
      <div className=''>{title}</div>
    </div>
  )
}
