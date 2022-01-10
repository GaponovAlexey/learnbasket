import { AppDispatch } from './store'
import { user } from './type'
import { createAsyncThunk } from '@reduxjs/toolkit'

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userFetching())
//     await fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((json) => dispatch(userFetchingSucces(json)))
//   } catch (e: any) {
//     dispatch(userFetchingError(e.message))
//   }
// }

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
