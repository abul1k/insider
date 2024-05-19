import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  isDarkTheme: boolean
}

const initialState: CounterState = {
  isDarkTheme: false,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme
    },
  },
})

export const { switchTheme } = layoutSlice.actions
export default layoutSlice.reducer
