import { Edit2, Trash2, Check } from "lucide-react";

function TaskItem({ task, toggleTask, deleteTask, editTask }) {
  return (
    <div className="flex items-center justify-between bg-slate-200 dark:bg-slate-800 p-4 rounded-lg mb-3 shadow-sm border border-transparent dark:border-slate-700">
      <div className="flex items-center gap-4">
        <button
          onClick={() => toggleTask(task.id)}
          className={`w-6 h-6 rounded flex items-center justify-center border transition-colors cursor-pointer ${
            task.completed
              ? "bg-slate-900 dark:bg-slate-100 border-slate-900 dark:border-slate-100 text-white dark:text-slate-900"
              : "border-slate-400 dark:border-slate-500 hover:border-blue-500"
          }`}
        >
          {task.completed && <Check size={16} strokeWidth={3} />}
        </button>
        <span
          className={`text-lg transition-all ${
            task.completed
              ? "line-through text-slate-400 dark:text-slate-500"
              : "text-slate-800 dark:text-slate-200"
          }`}
        >
          {task.text}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => {
            const newText = prompt("Edit task:", task.text);
            if (newText) editTask(task.id, newText);
          }}
          className="text-slate-500 hover:text-blue-500 p-2 transition-colors cursor-pointer"
        >
          <Edit2 size={18} />
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-slate-500 hover:text-red-500 p-2 transition-colors cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
