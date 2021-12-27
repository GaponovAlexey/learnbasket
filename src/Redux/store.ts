import counterSlice from './index'
import { configureStore } from '@reduxjs/toolkit'
import UserSlices from './UserSlices'

export const store = configureStore({
  reducer: {
    count: counterSlice,
    user: UserSlices
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
