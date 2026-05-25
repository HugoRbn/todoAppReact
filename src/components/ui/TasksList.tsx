import ButtonSuppr from "../buttons/ButtonSuppr.tsx";
import type { Task } from "../../data/task.ts";

const TasksList = ({ tasks, removeTask }: { tasks: Task[]; removeTask: (task: string) => void }) => {
  return (
    <ul className="taskList">
      {tasks.length > 0 ? (
        tasks.map((t) => (
          <li key={t.id}>
            <span>{t.name || t.id}</span>
            <ButtonSuppr removeTask={() => removeTask(t.id)} />
          </li>
        ))
      ) : (
        <li className="empty-state">Aucune tâche</li>
      )}
    </ul>
  );
};

export default TasksList;
