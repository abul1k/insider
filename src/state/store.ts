import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './users/user.slice'
import layout from './layout/layout'

const reducers = combineReducers({ users: userSlice, layout: layout })

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
