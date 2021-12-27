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
  extraReducers: {
    [fetchUsers.fulfilled.type]: (
      state,
      { payload }: PayloadAction<user[]>
    ) => {
      state.IsLoading = false
      state.error = ''
      state.user = payload
    },
    [fetchUsers.pending.type]: (state) => {
      state.IsLoading = true
    },
    [fetchUsers.rejected.type]: (state, { payload }: PayloadAction<string>) => {
      state.IsLoading = false
      state.error = payload
    },
  },
})

// export const {} = userSlies.actions

export default userSlies.reducer
