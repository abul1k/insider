import $axios from '@/plugins/axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (params, thunkAPI) => {
    try {
      const res = await $axios.get(`/users/`, { params })
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)