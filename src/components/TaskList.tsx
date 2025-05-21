import type { TodoProps } from '../types.ts/todo';
import Tasks from './Tasks';

const TaskList = ({ list }: TodoProps) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-roboto text-2xl">Task</h2>
      <hr className="w-xs md:w-md  lg:w-lg" />
      <Tasks list={list}/>
    </div>
  );
};

export default TaskList;
