import { ITodo } from '@/features/todo/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<ITodo, string>({
      query: () => 'tasks',
    }),
  }),
});

export const { useGetAllTodosQuery } = baseApi;
