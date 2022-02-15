import { AppDispatch } from './store'
import { user } from './type'
import { createAsyncThunk } from '@reduxjs/toolkit'

const userAPI = 'https://jsonplaceholder.typicode.com/photos'

export const fetchUsers = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    try {
      const response = await fetch(userAPI)
      return response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue('not valid posts')
    }
  }
)
