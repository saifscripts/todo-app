export const PRIORITY = {
  high: 'high',
  medium: 'medium',
  low: 'low',
} as const;

export type IPriority = keyof typeof PRIORITY;
export type IFilterBy = keyof typeof PRIORITY | 'none';

export interface ITodo {
  _id?: string;
  title: string;
  description: string;
  priority: IPriority;
  isCompleted?: boolean;
}

export interface TodoState {
  todos: ITodo[];
  filterBy: IFilterBy;
}
