import { useState } from "react";
import "./App.css";
import TasksList from "./components/ui/TasksList";
import TaskForm from "./components/ui/TaskForm";
import type {Task} from "./data/task.ts";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("taskList");
    return stored ? JSON.parse(stored) : [];
  });

  const addTask = (newTask: Task) => {
    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem("taskList", JSON.stringify(updated));
    setTask("");
  };

  const removeTask = (taskToRemove: string) => {
    const updated = tasks.filter((t) => t.id !== taskToRemove);
    setTasks(updated);
    localStorage.setItem("taskList", JSON.stringify(updated));
  };

  return (
    <div>
      <TaskForm task={task} setTask={setTask} addTask={() => addTask(task)}></TaskForm>
      <TasksList tasks={tasks} removeTask={(t) => removeTask(t)}></TasksList>
    </div>
  );
}

export default App;
