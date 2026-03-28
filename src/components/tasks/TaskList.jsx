import selfie from "../../assets/selfie.svg";
import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 mt-7 w-full max-w-2xl px-4 text-center sm:text-left">
        <img
          src={selfie}
          alt="Empty state"
          className="w-full max-w-55 sm:max-w-75 md:max-w-90"
        />
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
          Empty as my motivation on Monday 😅. <br /> Let's start adding stuff!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mt-6">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
