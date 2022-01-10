import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUsers } from './ActionCreators'
import { CounterState, user } from './type'

// Define the initial state using that type
const initialState: CounterState = {
  IsLoading: false,
  error: '',
  user: [],
}

export const userSlies = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.user.push(payload)
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})


export default userSlies.reducer
