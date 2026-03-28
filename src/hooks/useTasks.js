import { useState, useEffect, useCallback } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((text) => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }, []);

  const editTask = useCallback((id, newText) => {
    if (!newText.trim()) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task,
      ),
    );
  }, []);

  return { tasks, addTask, deleteTask, toggleTask, editTask };
}
