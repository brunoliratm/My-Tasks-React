import { useState } from "react";

function TaskInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-2xl mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your task here.."
        className="flex-1 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-transparent dark:border-slate-700"
      />
      <button
        type="submit"
        className="bg-black dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 text-white dark:text-white font-bold px-6 py-3 rounded-lg transition-colors cursor-pointer"
      >
        + Add
      </button>
    </form>
  );
}

export default TaskInput;
