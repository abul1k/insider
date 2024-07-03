import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  isDarkTheme: boolean
  isSidebarOpen: boolean
}

const initialState: CounterState = {
  isDarkTheme: JSON.parse(localStorage.getItem('isDarkMode') || 'false'),
  isSidebarOpen: JSON.parse(localStorage.getItem('isSidebarOpen') || 'true'),
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme
      localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkTheme))
    },

    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
      localStorage.setItem('isSidebarOpen', JSON.stringify(state.isSidebarOpen))
    }
  },
})

export const { switchTheme, toggleSidebar } = layoutSlice.actions
export default layoutSlice.reducer
