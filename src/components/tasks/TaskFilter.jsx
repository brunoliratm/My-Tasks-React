function TaskFilter({ currentFilter, setFilter, tasksLeft }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="flex w-full max-w-2xl justify-between items-center mb-1 px-1">
      <div className="flex gap-3 text-slate-500 font-medium items-center">
        {filters.map((filter, index) => (
          <span key={filter} className="flex items-center gap-4">
            <button
              onClick={() => setFilter(filter.toLowerCase())}
              className={`transition-colors cursor-pointer ${
                currentFilter === filter.toLowerCase()
                  ? "text-black dark:text-white font-bold"
                  : "hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              {filter}
            </button>
            {index < filters.length - 1 && (
              <span className="text-slate-600">|</span>
            )}
          </span>
        ))}
      </div>

      <span className="text-slate-500 text-sm">
        {tasksLeft} {tasksLeft === 1 ? "task" : "tasks"} left
      </span>
    </div>
  );
}

export default TaskFilter;
