import Button from './Button';
import { useTaskContext } from '../context/TaskContext';

import { useEffect, useState } from 'react';

const Input = () => {
  const { handleAdd, handleEdit, editingTodo, setEditingTodo } =
    useTaskContext();
  const [input, setInput] = useState('');

  useEffect(() => {
    editingTodo ? setInput(editingTodo.title) : setInput('');
  }, [editingTodo]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') return;
    if (editingTodo) {
      handleEdit(editingTodo.id, input);
      setEditingTodo(null);
    } else {
      handleAdd(input);
    }

    setInput('');
  };

  console.log(input);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center w-4/5"
    >
      <input
        value={input ?? ''}
        type="text"
        name="task"
        className="border-2 p-2 rounded-2xl w-full my-8 md:w-3/5 font-roboto "
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit" style="btn-add ml-2 md:ml-4" text="ADD" />
    </form>
  );
};

export default Input;
