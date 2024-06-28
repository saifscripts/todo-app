import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="bg-primary-gradient p-2 rounded-xl">
        <div className="p-5 bg-white rounded-lg bg-opacity-70 space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          {/* <div className="bg-white rounded-md p-5 font-bold flex justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
