import Button from './Button';
import type { Todo } from '../types.ts/todo';
import { v4 as uuidv4 } from 'uuid';


//need to fix the onAddTodo
type InputProps = {
  onAddTodo: (todo: Todo) => void;
};

const Input = ({ onAddTodo }: InputProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const task = formData.get('task');
    onAddTodo(task);
    formEl.reset();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center w-4/5"
    >
      <input
        type="text"
        name="task"
        className="border-2 p-2 rounded-2xl w-full my-8 md:w-3/5 "
      />
      <Button type="submit" style="btn-add ml-2 md:ml-4" text="ADD" />
    </form>
  );
};

export default Input;
