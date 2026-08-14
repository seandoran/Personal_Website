'use client';
import React from 'react';


export default function HeroSection() {
    const scrollToGrid = () => {
    const gridElement = document.getElementById('bento-grid');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Updates URL hash cleanly without a page reload or link conflict
      window.history.pushState(null, '', '#bento-grid');
    }
  };
  
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 flex flex-col items-start gap-8 border-b border-stone-800/60">
      
      {/* 1. Status / Narrative Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 text-xs font-mono text-stone-300 shadow-sm">
        {/* Sparkle Icon SVG */}
        <svg className="w-3.5 h-3.5 text-amber-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
        <span>SYSTEMS CRAFTER</span>
        <span className="text-stone-600">•</span>
        <span className="text-stone-400">CODE, CRAFTS, & CONCEPTS</span>
      </div>

      {/* 2. Main Narrative Headline */}
      <div className="space-y-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-stone-100 leading-[1.15]">
          Cultivating ideas and stewarding physical systems.
        </h1>
        
        {/* Sub-headline / Expanded Philosophy */}
        <p className="text-lg md:text-xl text-stone-400 max-w-3xl font-sans leading-relaxed">
          From full-stack web engineering and procedural game logic to hand-tailored garments, literary analysis, and botanical care—I design structured, long-term systems across digital and material worlds[cite: 1, 2].
        </p>
      </div>

      {/* 3. Primary Engine Portals & Actions */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-800/40">
        
        {/* Core Pillars CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Idea Garden Link */}
          <a
            href="#idea-garden"
            className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 font-sans text-sm font-medium hover:bg-emerald-900/50 hover:border-emerald-600/60 transition-all duration-200 shadow-sm"
          >
            {/* Brain/Mind SVG */}
            <svg className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span>Explore The Idea Garden</span>
            <span className="text-xs text-emerald-500 font-mono">/mind</span>
          </a>

          {/* Living Ledger Link */}
          <a
            href="#living-ledger"
            className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-amber-950/40 border border-amber-800/50 text-amber-300 font-sans text-sm font-medium hover:bg-amber-900/50 hover:border-amber-600/60 transition-all duration-200 shadow-sm"
          >
            {/* Book/Ledger SVG */}
            <svg className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>Inspect The Living Ledger</span>
            <span className="text-xs text-amber-500 font-mono">/matter</span>
          </a>
        </div>

        {/* Scroll Indicator to Bento Grid */}
        <button
          type="button"
          onClick={scrollToGrid}
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 font-mono text-xs cursor-pointer focus:outline-none"
        >
          <span>System Grid</span>
          <svg className="w-3.5 h-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

      </div>

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 -z-10 w-72 h-72 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-96 -z-10 w-80 h-80 bg-amber-950/15 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}