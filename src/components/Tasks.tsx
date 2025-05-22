import type { TodoProps } from '../types.ts/todo';
import { useTaskContext } from '../context/TaskContext';
import Button from './Button';

const Tasks = ({ list }: TodoProps) => {
  const { handleDelete, handleDone, handleFind } = useTaskContext();

  return (
    <ol>
      {list.map((task) => (
        <div
          key={task?.id}
          className="flex items-center justify-between border-b-2 border-amber-950 py-4 px-2"
        >
          <li
            className={`${task?.completed ? 'line-through opcity-50' : ''}font-lg font-roboto text-amber-900 uppercase`}
          >
            {task?.title}
          </li>
          <div>
            <Button
              onClick={() => handleDelete(String(task?.id))}
              style="btn-delete ml-2 md:ml-4"
              text="DEL"
            />
            <Button
              onClick={() => handleDone(String(task?.id))}
              style="btn-done ml-2 md:ml-4"
              text="DONE"
            />
            <Button
              onClick={() => handleFind(String(task?.id))}
              style="btn-edit ml-2 md:ml-4"
              text="EDIT"
            />
          </div>
        </div>
      ))}
    </ol>
  );
};

export default Tasks;
