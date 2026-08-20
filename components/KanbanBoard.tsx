// components/KanbanBoard.tsx
"use client";
import { useState, DragEvent, FormEvent, TouchEvent, useRef } from "react";

type ColumnId = "Germinating" | "Sprouting" | "In-Bloom";

interface Task {
  id: string;
  title: string;
  column: ColumnId;
}

interface Column {
  id: ColumnId;
  title: string;
}

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Design the dashboard landing view", column: "Germinating" },
    { id: "2", title: "Setup Next.js global state structure", column: "Sprouting" },
    { id: "3", title: "Configure Tailwind styles config layout", column: "In-Bloom" },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const activeTouchTaskId = useRef<string | null>(null);

  const columns: Column[] = [
    { id: "Germinating", title: "Germinating" },
    { id: "Sprouting", title: "Sprouting" },
    { id: "In-Bloom", title: "In Bloom" },
  ];

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: newTaskTitle.trim(),
      column: "Germinating",
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  // Desktop Drag & Drop API Handlers
  const handleDragStart = (e: DragEvent, taskId: string) => {
    e.dataTransfer.setData("text/plain", taskId);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent, targetColumn: ColumnId) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    moveTask(taskId, targetColumn);
  };

  // Mobile Touch Drag & Drop Tracking System
  const handleTouchStart = (e: TouchEvent, taskId: string) => {
    activeTouchTaskId.current = taskId;
    const target = e.currentTarget as HTMLElement;
    target.classList.add("opacity-50", "scale-95");
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!activeTouchTaskId.current) return;
    if (e.cancelable) e.preventDefault();
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const taskId = activeTouchTaskId.current;
    activeTouchTaskId.current = null;
    
    const target = e.currentTarget as HTMLElement;
    target.classList.remove("opacity-50", "scale-95");

    if (!taskId) return;

    const touch = e.changedTouches[0];
    const targetEl = document.elementFromPoint(touch.clientX, touch.clientY);
    const columnContainer = targetEl?.closest("[data-column-id]");
    
    if (columnContainer) {
      const targetColumn = columnContainer.getAttribute("data-column-id") as ColumnId;
      moveTask(taskId, targetColumn);
    }
  };

  const moveTask = (taskId: string, targetColumn: ColumnId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, column: targetColumn } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    /* 
      CRITICAL SCROLL FIXED HEIGHT CONFIG:
      - 'h-full min-h-0' strips auto-expansion logic on both view ports.
    */
    <div className="w-full h-full flex flex-col justify-between min-h-0 overflow-hidden select-none text-[#306238]">
      
      {/* 1. Fixed Header Section */}
      <div className="shrink-0 mb-2">
        <div className="flex items-center justify-between mb-1.5">
          <h2 className="text-xs font-bold uppercase tracking-wider opacity-60">Garden Planner</h2>
          <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
            Total Tasks: {tasks.length}
          </span>
        </div>

        <form onSubmit={handleAddTask} className="flex gap-1.5 max-w-sm">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Add task to backlog..."
            className="flex-1 px-3 py-1 bg-white/20 border border-white/10 rounded-xl text-xs placeholder:text-[#306238]/40 text-[#306238] focus:outline-none focus:bg-white/30 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-2.5 py-1 bg-[#306238] text-[#9EBB97] font-bold text-xs rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Add
          </button>
        </form>
      </div>

      {/* 2. Scrollable Canvas Frame Setup */}
      {/* 
        - max-h-[510px] sets a strict height boundary matching a row-span-3 card dimensions (220px * 3 - padding).
        - overflow-y-auto ensures that on mobile, when columns grow, the board tracks scrolling inside the card box.
      */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-2 flex-1 min-h-0 overflow-y-auto md:overflow-visible max-h-[510px] pr-0.5 scrollbar-thin">
        {columns.map((col) => {
          const filteredTasks = tasks.filter((t) => t.column === col.id);

          return (
            <div
              key={col.id}
              data-column-id={col.id}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, col.id)}
              className="flex flex-col bg-white/10 border border-white/5 rounded-2xl p-2 min-h-[110px] md:min-h-0 h-auto md:h-full shrink-0 mb-1 md:mb-0"
            >
              {/* Column Title Track */}
              <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-white/10 shrink-0">
                <h3 className="text-[10px] font-bold uppercase tracking-wider opacity-70">{col.title}</h3>
                <span className="text-[9px] bg-white/10 px-1.5 py-0.2 rounded-md font-bold">
                  {filteredTasks.length}
                </span>
              </div>

              {/* Lane Cards Sub-List Channel */}
              <div className="flex flex-col gap-1 flex-1 md:overflow-y-auto pr-0.5 scrollbar-none">
                {filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    onTouchStart={(e) => handleTouchStart(e, task.id)}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="p-1.5 bg-white/30 border border-white/10 rounded-xl shadow-xs cursor-grab active:cursor-grabbing hover:bg-white/40 touch-none transition-all group flex items-start justify-between gap-2 shrink-0"
                  >
                    <p className="text-xs font-bold leading-snug text-[#306238] break-words pr-1">
                      {task.title}
                    </p>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="opacity-60 md:opacity-0 group-hover:opacity-100 text-[#306238] p-0.5 transition-all shrink-0"
                      aria-label="Delete item"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}

                {filteredTasks.length === 0 && (
                  <div className="flex-1 flex items-center justify-center border border-dashed border-white/20 rounded-xl py-3 opacity-30">
                    <p className="text-[9px] font-medium tracking-wide">Empty</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Static Footnote Label */}
      <div className="text-[9px] font-bold uppercase tracking-wider opacity-40 pt-1.5 mt-1.5 border-t border-white/10 shrink-0 hidden md:block">
        Hold & drag items to execute tasks
      </div>
    </div>
  );
}
