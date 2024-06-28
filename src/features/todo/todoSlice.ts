import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodo, TodoState } from './interfaces';

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
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      const taskIndex = state.todos.findIndex(
        (item) => item.id === action.payload
      );

      state.todos.splice(taskIndex, 1);
      state.todos.push({
        ...task,
        isCompleted: !task!.isCompleted,
      } as ITodo);
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
