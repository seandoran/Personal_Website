// app/page.tsx
"use client";
import { useState, FormEvent } from "react";

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

    // 1. Build the clean JSON payload
    const noteData: NotePayload = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      timestamp: new Date().toISOString(),
    };

    // 2. Process your JSON output here
    console.log("Generated Note JSON:", JSON.stringify(noteData, null, 2));
    
    // TODO: Insert your redirection logic or API push handler here
    // example: router.push(`/redirect-path?data=${encodeURIComponent(JSON.stringify(noteData))}`)

    // 3. Clear the text bars
    setTitle("");
    setContent("");
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-gray-50 text-gray-900">
      <div className="w-full max-w-xl bg-green p-6 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-xl font-bold mb-4 text-gray-800">Quick Note Creator</h1>
        
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
          
          {/* Content Input Bar */}
          <div className="flex gap-2">
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
              Generate JSON
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
