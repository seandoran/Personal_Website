// app/page.tsx
"use client";
import { useState, FormEvent } from "react";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import HabitTracker from "@/components/HabitTracker"
import KanbanBoard from "@/components/KanbanBoard";
import MediaWidget from "@/components/MediaWidget";

interface NotePayload {
  id: string;
  title: string;
  content: string;
  timestamp: string;
}

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    // 1. Build the clean JSON structure
    const noteData: NotePayload = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      timestamp: new Date().toISOString(),
    };

    // 2. Output the JSON (Viewable in your browser developer console)
    console.log("Generated Note JSON:", JSON.stringify(noteData, null, 2));
    
    // TODO: Add your redirection logic here
    // Example: router.push(`/your-target-route?payload=${encodeURIComponent(JSON.stringify(noteData))}`);

    // 3. Reset form instantly to prepare for the next quick note
    setTitle("");
    setContent("");
  };

  return (
    <main className="">
           <div id="bento-grid" className="scroll-mt-16 max-w-7xl mx-auto px-6 py-12">
            <BentoGrid>
              {/* Card 1: Idea Garden*/}
              <BentoCard className=" BentoCard md:col-span-3 lg:col-span-3 row-span-1 gap-4">
                  <h1 className="text-l font-bold mb-4 ">Seedlings</h1>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    {/* Title Input Bar */}
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Note title..."
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-medium"
                      autoFocus
                      required
                    />
                    
                    {/* Content Input Bar & Submit Trigger */}
                    <div className="flex gap-1">
                      <input
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Type your quick note details here..."
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                        required
                      />
                      
                      <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors whitespace-nowrap text-base"
                      >
                        plant seed
                      </button>
                    </div>
                  </form>
                
              </BentoCard>
      
              {/* Card 2: Blog */}  
              <BentoCard className="BentoCard md:col-span-1 lg:col-span-1 row-span-3 gap-4">
                <div>
                   <HabitTracker />
                </div>
                
              </BentoCard>
      
              {/* Card 3: Living Ledger */}
              <BentoCard  className="BentoCard md:col-span-2 lg:col-span-2 row-span-3 gap-4">
                <div>
                  <KanbanBoard />
              </div>
      
              </BentoCard>
      
              {/* Card 4: Literary Scholia */}
              <BentoCard className="md:col-span-1 lg:col-span-1 h-full min-h-0">
                <div>
                  <MediaWidget />
                </div>
      
              </BentoCard>
      
              {/* Card 5: TTRPG & world Bulding */}
              <BentoCard href="/about" className="md:col-span-1 lg:col-span-1">
                <div>
                  <h1 className='font-bold'>🎲 Worldbuilding & Factions</h1>
                  <p>
                    Political webs, ecological systems
                    and campaign lore for tabletop
                    games.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 font-mono text-xs cursor-pointer focus:outline-none">
                  <span>Explore Lore Systems</span>
                  <svg className="w-3.5 h-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </BentoCard>
      
              {/* Card 6: GameDev*/}
              <BentoCard href="/about" className="md:col-span-1, col-start-1 lg:col-span-1">
                <div>
                  <h1 className='font-bold'>⚙️ GameDEV</h1>
                  <p>
                    Interactive Rules & Godot procedural experiments.
                  </p>
                </div>
              </BentoCard>
            </BentoGrid>
            </div>

      
    </main>
  );
}
