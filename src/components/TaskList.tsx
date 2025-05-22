import type { TodoProps } from '../types.ts/todo';
import Tasks from './Tasks';

const TaskList = ({ list }: TodoProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-roboto text-2xl">Task</h2>
      <hr className="h-1 my-2 w-xs md:w-md lg:w-lg bg-amber-950" />
      <Tasks list={list} />
    </div>
  );
};

export default TaskList;
