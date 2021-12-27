import counterSlice from './index'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import UserSlices from './UserSlices'
import { PostsServise } from '../servise/userServise'

export const store = configureStore({
  reducer: {
    count: counterSlice,
    user: UserSlices,
    [PostsServise.reducerPath]: PostsServise.reducer
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(PostsServise.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
