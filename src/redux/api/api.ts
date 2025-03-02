import { ITodo } from '@/features/todo/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<{ success: boolean; data: ITodo[] }, string>({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append('priority', priority);
        }

        return {
          url: '/tasks',
          method: 'GET',
          params,
        };
      },
      providesTags: ['todo'],
    }),
    addTodo: builder.mutation<
      { success: boolean; data: ITodo },
      Partial<ITodo>
    >({
      query: (data) => {
        return {
          url: '/task',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['todo'],
    }),
    deleteTodo: builder.mutation<{ success: boolean; data: ITodo }, string>({
      query: (id) => ({
        url: `/task/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['todo'],
    }),
    updateTodo: builder.mutation<
      { success: boolean; data: ITodo },
      { id: string; data: Partial<ITodo> }
    >({
      query: (options) => ({
        url: `/task/${options.id}`,
        method: 'PUT',
        body: options.data,
      }),
      invalidatesTags: ['todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = baseApi;
