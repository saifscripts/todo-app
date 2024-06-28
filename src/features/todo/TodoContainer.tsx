import { useAppSelector } from '@/redux/hooks';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
  const { filterBy, todos } = useAppSelector((state) => state.todos);
  //   const { data: todos, isLoading } = useGetTodosQuery('');

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  const filteredTodos = todos?.filter((item) =>
    filterBy === 'none' ? true : item.priority === filterBy
  );

  return (
    <div>
      <div className="flex justify-between items-center">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="bg-primary-gradient p-2 rounded-xl">
        <div className="p-5 bg-white rounded-lg bg-opacity-70 space-y-3">
          {filteredTodos?.length ? (
            filteredTodos?.map((todo) => <TodoCard key={todo.id} todo={todo} />)
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
