import Container from '@/components/ui/Container';
import TodoContainer from '@/features/todo/TodoContainer';

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl my-10 font-semibold">My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
