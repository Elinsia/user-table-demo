import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = ''; // TODO: Find something like https://mockapi.io/

export const loadUsers = createAsyncThunk('users/loadUsers', async (_, thunkAPI) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addUser = createAsyncThunk('users/addUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateUser = createAsyncThunk('users/updateUser', async ({ id, user }, thunkAPI) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const removeUser = createAsyncThunk('users/removeUser', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
