export interface ITodo {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

export interface TodoState {
  todos: ITodo[];
}
