// components/HabitTracker.tsx
"use client";
import { useState, FormEvent } from "react";

interface Habit {
  id: string;
  name: string;
  streak: number;
  completedToday: boolean;
}

export default function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: "1", name: "Drink 2L Water", streak: 5, completedToday: true },
    { id: "2", name: "Read 10 Pages", streak: 12, completedToday: false },
    { id: "3", name: "30 min Workout", streak: 0, completedToday: false },
    { id: "4", name: "Code for 1 hour", streak: 3, completedToday: false },
    { id: "5", name: "Stretch / Yoga", streak: 8, completedToday: true },
  ]);
  const [newHabitName, setNewHabitName] = useState("");

  const handleAddHabit = (e: FormEvent) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;

    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name: newHabitName.trim(),
      streak: 0,
      completedToday: false,
    };

    setHabits([...habits, newHabit]);
    setNewHabitName("");
  };

  const toggleHabit = (id: string) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          const updatedCompletion = !habit.completedToday;
          return {
            ...habit,
            completedToday: updatedCompletion,
            streak: updatedCompletion ? habit.streak + 1 : Math.max(0, habit.streak - 1),
          };
        }
        return habit;
      })
    );
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="w-full text-[#306238] select-none flex flex-col h-full justify-between">
      <div>
        {/* Header Title Banner */}
        <div className="flex items-center justify-between mb-3 shrink-0">
          <h2 className="text-sm font-bold uppercase tracking-wider opacity-60">Watering Can</h2>
          <span className="text-xs font-bold bg-white/20 px-2.5 py-0.5 rounded-full">
            {habits.filter(h => h.completedToday).length}/{habits.length}
          </span>
        </div>

        {/* Input Interactive Insertion Form */}
        <form onSubmit={handleAddHabit} className="flex gap-2 mb-4 shrink-0">
          <input
            type="text"
            value={newHabitName}
            onChange={(e) => setNewHabitName(e.target.value)}
            placeholder="Add new habit entry..."
            className="flex-1 px-3 py-2 bg-white/20 border border-white/10 rounded-xl text-sm placeholder:text-[#306238]/40 text-[#306238] focus:outline-none focus:bg-white/30 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#306238] text-[#9EBB97] font-bold text-sm rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Add
          </button>
        </form>

        {/* 
          CRITICAL 3-ROW SCROLL FIX:
          - max-h-[580px] captures the exact 3-row layout boundary space securely.
          - overflow-y-auto only triggers if you flood it with more than ~12 active habits.
        */}
        <div className="max-h-[580px] overflow-y-auto pr-1 space-y-2 scrollbar-thin">
          {habits.length === 0 ? (
            <p className="text-center text-sm opacity-50 py-8">No habits tracked yet.</p>
          ) : (
            habits.map((habit) => (
              <div
                key={habit.id}
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                  habit.completedToday 
                    ? "bg-white/30 border-white/20 opacity-80" 
                    : "bg-white/10 border-white/5"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Circle Check Node */}
                  <button
                    onClick={() => toggleHabit(habit.id)}
                    className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors shrink-0 ${
                      habit.completedToday
                        ? "bg-[#306238] border-[#306238] text-[#9EBB97]"
                        : "bg-white/20 border-white/20 hover:bg-white/30"
                    }`}
                    aria-label="Toggle completion status"
                  >
                    {habit.completedToday && (
                      <svg className="w-3 h-3 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    )}
                  </button>

                  <div className="min-w-0">
                    <p className={`text-sm font-bold truncate leading-tight ${habit.completedToday ? "line-through opacity-50" : ""}`}>
                      {habit.name}
                    </p>
                    <p className="text-[10px] font-semibold opacity-60 mt-0.5">
                      🔥 {habit.streak} day streak
                    </p>
                  </div>
                </div>

                {/* Delete Trigger Button */}
                <button
                  onClick={() => deleteHabit(habit.id)}
                  className="opacity-40 hover:opacity-100 p-1 transition-opacity text-[#306238] shrink-0"
                  aria-label="Remove item"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Persistent Bottom Label Node */}
      <div className="text-[10px] font-bold uppercase tracking-wider opacity-40 pt-3 mt-4 border-t border-white/10 shrink-0">
        Consistency builds habits
      </div>
    </div>
  );
}
