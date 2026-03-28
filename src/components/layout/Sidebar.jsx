import { ListTodo, Menu, Settings } from "lucide-react";
import avatar from "../../assets/avatar.png";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`
        ${isOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0 md:w-20"}
        absolute md:relative z-50 h-full bg-slate-100 dark:bg-slate-800 flex flex-col items-center py-8 border-r border-slate-200 dark:border-slate-700 transition-all duration-300
      `}
    >
      <div
        className={`w-full mb-8 flex ${isOpen ? "justify-between px-6" : "justify-center px-0"} items-center`}
      >
        {isOpen && <span className="font-bold text-xl md:hidden">Menu</span>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl cursor-pointer hover:text-blue-500 transition-colors hidden md:block"
        >
          <Menu />
        </button>
      </div>

      <div
        className={`flex flex-col items-center mb-6 transition-all duration-300 overflow-hidden ${isOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0 mb-0"}`}
      >
        <img
          src={avatar}
          alt="Jane Doe"
          className="w-20 h-20 rounded-full mb-3 "
        />
        <h2 className="font-semibold text-lg whitespace-nowrap">Jane Doe</h2>
        <span className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
          janedoe@gmail.com
        </span>
      </div>
      <hr className="w-4/5 border-slate-400 dark:border-slate-400" />
      <nav className="w-full mt-3 px-4 flex flex-col gap-2">
        <button
          className={`flex items-center ${isOpen ? "justify-start px-4" : "justify-center px-0"} gap-3 w-full bg-white dark:bg-slate-900 py-3 rounded-lg font-medium shadow-sm transition-all`}
        >
          <ListTodo className="min-w-6" />
          {isOpen && <span className="whitespace-nowrap">My Tasks</span>}
        </button>
        <button
          className={`flex items-center ${isOpen ? "justify-start px-4" : "justify-center px-0"} gap-3 w-full py-3 rounded-lg font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-not-allowed`}
        >
          <Settings className="min-w-6" />
          {isOpen && <span className="whitespace-nowrap">Settings</span>}
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
