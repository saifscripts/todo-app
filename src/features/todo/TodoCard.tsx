const TodoCard = () => {
  return (
    <div className="bg-white rounded-md p-3 flex justify-between items-center">
      <input type="checkbox" name="" id="" />
      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-3+">
        <button>delete</button>
        <button>edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
