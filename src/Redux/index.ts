import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TProd = {
  id: number
  name: string
  imagePath: string
  price: number
}
export type TBasket = {
  id: number
  imagePath: string
  name: string
  count?: number
  price: number
}

export interface CounterState {
  count: number
  products: Array<TProd>
  basket: Array<TBasket>
 
}

const initialState: CounterState = {
  count: 0,
  products: [
    {
      id: 1,
      name: 'Apple MacBook Pro, 10 core 62ГБ, 5122ГБ',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 267690,
    },
    {
      id: 2,
      name: 'Apple MacBook Pro 14.2"10 core 32ГБ, 5122ГБ',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 494990,
    },
    {
      id: 3,
      name: 'Apple MacBook Pro 14.2" 10 core 32ГБ, 1ТБ ',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 294990,
    },
  ],
  basket: [
    {
      id: 0,
      imagePath: 'https://items.s1.citilink.ru/1624332_v01_b.jpg',
      name: 'MacBook Pro 14.2", Apple M1 Max',
      count: 1,
      price: 5520,
    },
  ],

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addReducer: (state, { payload }: PayloadAction<TBasket>) => {
      const { id, imagePath, name, price } = payload
      const oneId = state.basket.find((el) => el.id === id)
      // eslint-disable-next-line no-lone-blocks
      {
        oneId
          ? state.basket.push({
              id,
              imagePath,
              name,
              price,
              count: state.count + 1,
            })
          : console.log(oneId)
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addReducer } = counterSlice.actions

export default counterSlice.reducer
