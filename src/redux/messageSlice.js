import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRandomMessage = async () => {
  const response = await axios.get('http://localhost:3000/api/random_greeting');
  return response.data;
};

export const fetchRandomMessage = createAsyncThunk(
  'greeting/fetchRandomMessage',
  async () => {
    const response = await getRandomMessage();
    return response;
  },
);

const messageSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: '',
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchRandomMessage.pending]: (state) => ({ ...state, status: 'loading' }),
    [fetchRandomMessage.fulfilled]: (state, action) => ({
      ...state,
      status: 'succeeded',
      message: action.payload.greeting,
    }),
    [fetchRandomMessage.rejected]: (state) => ({
      ...state,
      status: 'failed',
      message: 'Error fetching message',
    }),
  },
});

export default messageSlice.reducer;
