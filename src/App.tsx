import Header from './components/Header';
import Input from './components/Input';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

import type { Todo } from './types.ts/todo';

import { useEffect, useState } from 'react';
import { getTodo } from './api/api';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (todos.length === 0) {
      const fetchUser = async () => {
        const data: Todo = await getTodo();
        setTodos((prev) => [...prev, data]);
      };
      fetchUser();
    }
  }, [todos]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-4/5 border-2 rounded-2xl border-amber-950 flex flex-col items-center mx-auto mb-16 md:w-3/5 lg:w-2/5 flex-grow">
        <Input
          onAddTodo={(newTodo: Todo) => setTodos((prev) => [...prev, newTodo])}
        />
        <TaskList list={todos} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
