import ButtonAdd from "../buttons/ButtonAdd";

const TaskForm = ({
  task,
  setTask,
  addTask,
}: {
  task: string;
  setTask: (value: string) => void;
  addTask: () => void;
}) => {
  return (
    <form className="taskInputButton" onSubmit={addTask}>
      <input
          autoFocus
        className="taskInput"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <ButtonAdd type="submit" />
    </form>
  );
};

export default TaskForm;
