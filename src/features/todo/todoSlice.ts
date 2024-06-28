import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ITodo {
  title: string;
  description: string;
  isCompleted?: boolean;
}

interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
