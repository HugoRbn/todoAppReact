import ButtonSuppr from "../buttons/ButtonSuppr.tsx";
import type {Task} from "../../data/task.ts";

const TasksList = ({ tasks, removeTask }: { tasks: Task[], removeTask: (task: string) => void }) => {

  return (
      <div>
        <ul className="taskList">
          {tasks.length > 0 ? tasks.map((t, key) =>
              <div>
                <li key={key}>{t.id}</li>
                <ButtonSuppr removeTask={() => removeTask(t.id)}></ButtonSuppr>
              </div>

              )
              : <p>Aucune taches</p>}
        </ul>
      </div>

  );
};

export default TasksList;
