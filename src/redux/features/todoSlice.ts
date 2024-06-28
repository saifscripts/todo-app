import { createSlice } from '@reduxjs/toolkit';

// interface TodoState {
//   todos: string[];
// }

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
