import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAppDispatch } from '@/redux/hooks';
import EditTodoModal from './EditTodoModal';
import { ITodo, PRIORITY } from './interfaces';
import { deleteTodo, toggleComplete } from './todoSlice';

interface ITodoCardProps {
  todo: ITodo;
}

const TodoCard = ({ todo }: ITodoCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white rounded-md p-3 flex justify-between items-center border">
      <input
        type="checkbox"
        name="toggleComplete"
        onChange={() => dispatch(toggleComplete(todo.id))}
        id=""
      />
      <p>{todo.title}</p>
      <p>{todo.description}</p>

      <div>
        {todo.isCompleted ? (
          <p className="text-green-400">Done</p>
        ) : (
          <p className="text-red-400">Pending</p>
        )}
      </div>
      <p
        className={cn('capitalize', {
          'text-red-800': todo.priority === PRIORITY.high,
          'text-orange-500': todo.priority === PRIORITY.medium,
          'text-gray-700': todo.priority === PRIORITY.low,
        })}
      >
        {todo.priority}
      </p>
      <div className="space-x-3">
        <Button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="bg-red-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </Button>
        <EditTodoModal todo={todo} />
      </div>
    </div>
  );
};

export default TodoCard;
