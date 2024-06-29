import { useGetTodosQuery } from '@/redux/api/api';
import { useState } from 'react';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
  const [priority, setPriority] = useState<string>('');
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>

      <div className="bg-primary-gradient p-2 rounded-xl">
        <div className="p-5 bg-white rounded-lg bg-opacity-70 space-y-3">
          {todos?.data?.length ? (
            todos?.data?.map((todo) => <TodoCard key={todo._id} todo={todo} />)
          ) : (
            <div className="bg-white rounded-md p-5 font-bold flex justify-center items-center">
              <p>No Task</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
