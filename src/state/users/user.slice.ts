import { createSlice } from '@reduxjs/toolkit'
import { IUserState } from './interfaces';
import { getUsers } from './user.actions';

const initialState: IUserState = {
  loading: false,
  users: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true
    })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.loading = false
        state.users = payload
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false
      })
  }
})

export default userSlice.reducer