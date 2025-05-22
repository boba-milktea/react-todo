export type Todo = {
  userId: number;
  id: number | string;
  title: string;
  completed: boolean;
} | null;

export type TodoProps = {
  list: Todo[];
};
