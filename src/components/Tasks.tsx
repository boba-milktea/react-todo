import type { TodoProps } from '../types.ts/todo';
import Button from './Button';

const Tasks = ({ list }: TodoProps) => {
  return (
    <ol>
      {list.map((task) => (
        <div
          key={task.id}
          className="flex items-center border-b-2 border-amber-950 py-4 px-2"
        >
          <li className="font-lg font-roboto text-amber-900 uppercase">
            {task.title}
          </li>
          <Button style="btn-delete ml-2 md:ml-4" text="DEL" />
          <Button style="btn-done ml-2 md:ml-4" text="DONE" />
        </div>
      ))}
    </ol>
  );
};

export default Tasks;
