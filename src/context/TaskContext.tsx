import { createContext, useContext } from 'react';
import type { Todo } from '../types.ts/todo';

type taskContextType = {
  handleAdd: (todo: string) => void;
  handleEdit: (id: string | number, editedTodo: string) => void;
  handleDelete: (id: string | number) => void;
  handleDone: (id: string | number) => void;
  handleFind: (id: string | number) => void;
  editingTodo: Todo | undefined;
  setEditingTodo: React.Dispatch<React.SetStateAction<Todo | undefined>>;
};

export const TaskContext = createContext<taskContextType | undefined>(
  undefined
);

export const useTaskContext = (): taskContextType => {
  const context = useContext(TaskContext);
  if (!context)
    throw Error('useTaskContext must be inside of an TaskContextProvider');
  return context;
};
