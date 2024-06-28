import TodoCard from './TodoCard';

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filter</button>
      </div>

      <div className="bg-slate-100 p-5 rounded-xl space-y-3">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        {/* <div className="bg-white rounded-md p-5 font-bold flex justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
