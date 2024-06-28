import { ITodo } from '@/features/todo/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getTodos: builder.query<{ success: boolean; data: ITodo[] }, string>({
      query: () => ({
        url: '/tasks',
        method: 'GET',
      }),
    }),
    addTodo: builder.mutation<{ success: boolean; data: ITodo }, ITodo>({
      query: (data) => ({
        url: '/task',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = baseApi;
