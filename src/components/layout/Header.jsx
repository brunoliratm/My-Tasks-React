import { Moon, Sun, Menu } from "lucide-react";

function Header({ toggleTheme, darkMode, toggleSidebar }) {
  return (
    <header className="w-full p-4 md:p-6 flex justify-between md:justify-end items-center top-0 left-0 z-30">
      <button
        className="text-2xl cursor-pointer hover:text-blue-500 transition-colors md:hidden"
        onClick={toggleSidebar}
      >
        <Menu />
      </button>

      <button
        className="text-2xl cursor-pointer hover:opacity-70 transition-opacity"
        onClick={toggleTheme}
      >
        {darkMode ? <Moon /> : <Sun />}
      </button>
    </header>
  );
}

export default Header;
