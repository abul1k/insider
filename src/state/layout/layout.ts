import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  isDarkTheme: boolean
}

const initialState: CounterState = {
  isDarkTheme: JSON.parse(localStorage.getItem('isDarkMode') || 'false'),
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme
      localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkTheme))
    },
  },
})

export const { switchTheme } = layoutSlice.actions
export default layoutSlice.reducer
