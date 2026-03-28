import { useState } from "react";
import TaskFilter from "../components/tasks/TaskFilter";
import TaskInput from "../components/tasks/TaskInput";
import TaskList from "../components/tasks/TaskList";
import { useTasks } from "../hooks/useTasks";

function TasksPage() {
  const { tasks, addTask, toggleTask, deleteTask, editTask } = useTasks();
  const [filter, setFilter] = useState("all");
  const tasksLeft = tasks.filter((task) => !task.completed).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="flex-1 flex flex-col items-center p-4 pt-20 md:pt-0 md:p-8 overflow-y-auto w-full relative">
      <h1 className="text-4xl font-bold mb-8">My Tasks</h1>

      <TaskInput onAdd={addTask} />

      {tasks.length > 0 && (
        <TaskFilter
          currentFilter={filter}
          setFilter={setFilter}
          tasksLeft={tasksLeft}
        />
      )}

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </main>
  );
}

export default TasksPage;
