import $axios from '@/plugins/axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IParams } from '../interfaces'

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (params: IParams, thunkAPI) => {
    try {
      const { data } = await $axios.get(`/users/`, { params })
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
