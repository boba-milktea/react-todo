// components
import Header from './components/Header';
import Input from './components/Input';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
// context
import { TaskContext } from './context/TaskContext';
// type
import type { Todo } from './types.ts/todo';
// hooks
import { useEffect, useState } from 'react';
// api
import { getTodo } from './api/api';
// uuid
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | undefined>(null);

  const handleAdd = (newTodo: string) => {
    setTodos((prev) => [
      ...prev,
      { userId: 11, id: uuidv4(), completed: false, title: newTodo }
    ]);
  };

  const handleDelete = (id: string | number) => {
    setTodos((prev) => prev.filter((todo) => todo?.id !== id));
  };

  const handleEdit = (id: string | number, editedTodo: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo?.id === id ? { ...todo, title: editedTodo } : todo
      )
    );
  };

  const handleFind = (id: string | number) => {
    setEditingTodo(todos.find((todo) => todo?.id === id));
  };

  const handleDone = (id: string | number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo?.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    if (todos.length === 0) {
      const fetchUser = async () => {
        const data: Todo = await getTodo();
        setTodos((prev) => [...prev, data]);
      };
      fetchUser();
    }
  }, [todos]);

  console.log(todos);

  return (
    <TaskContext.Provider
      value={{
        handleAdd,
        handleDelete,
        handleDone,
        handleEdit,
        handleFind,
        editingTodo,
        setEditingTodo
      }}
    >
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="w-4/5 border-2 rounded-2xl border-amber-950 flex flex-col items-center mx-auto mb-16 md:w-3/5 lg:w-2/5 flex-grow">
          <Input />
          <TaskList list={todos} />
        </main>
        <Footer />
      </div>
    </TaskContext.Provider>
  );
};

export default App;
