// src/components/Footer.tsx
'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-800/80 bg-stone-950  font-sans mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-stone-800/60">
          
          {/* Column 1: Brand & Philosophy (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Minimal Monoline Claddagh Symbol SVG */}
              <svg 
                className="w-7 h-7 text-stone-300 stroke-current" 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="1.5"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Crown (Governance) */}
                <path d="M8 6l4-3 4 3-2 3H10L8 6z" />
                {/* Heart (Core Engines: Garden & Ledger) */}
                <path d="M12 18s-4-2.5-4-5a2.5 2.5 0 0 1 4-2 2.5 2.5 0 0 1 4 2c0 2.5-4 5-4 5z" />
                {/* Hands (Tactile Craft & Interface) */}
                <path d="M3 12h5m8 0h5" />
              </svg>

              <span className="font-serif text-lg text-stone-100 font-medium tracking-tight">
                SEAN DORAN
              </span>
            </div>

            <p className="text-sm  leading-relaxed max-w-sm">
              Cultivating ideas and stewarding physical systems—in code, on paper, and by hand.
            </p>

            {/* Claddagh Narrative Metaphor Badges */}
            <div className="pt-2 flex flex-wrap gap-2 font-mono text-[11px] ">
              <span className="px-2 py-0.5 rounded bg-gold-900 border border-gold-800">
                Hands: Interface Craft
              </span>
              <span className="px-2 py-0.5 rounded bg-gold-900 border border-gold-800">
                Heart: Core Logic & Memory
              </span>
              <span className="px-2 py-0.5 rounded bg-gold-900 border border-gold-800">
                Crown: Governed Architecture
              </span>
            </div>
          </div>

          {/* Column 2: The Core Engines (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs  uppercase tracking-wider">
              Core Engines
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/garden" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>🧠 The Idea Garden</span>
                  <span className="text-[10px] font-mono">/mind</span>
                </a>
              </li>
              <li>
                <a href="/ledger" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>📖 The Living Ledger</span>
                  <span className="text-[10px] font-mono">/matter</span>
                </a>
              </li>
              <li>
                <a href="/scholia" className="hover: transition-colors">
                  🖋️ Four-Colour Scholia
                </a>
              </li>
              <li>
                <a href="/projects/fullstack" className="hover: transition-colors">
                  ⚙️ Web Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Creative Feeds & Craft (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-mono text-xs  uppercase tracking-wider">
              Feeds & Craft
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/garden/art-history" className="hover: transition-colors">
                  Art History Log
                </a>
              </li>
              <li>
                <a href="/craft/tailoring" className="hover: transition-colors">
                  Tailoring Logs
                </a>
              </li>
              <li>
                <a href="/ttrpg" className="hover: transition-colors">
                  TTRPG Lore
                </a>
              </li>
              <li>
                <a href="/gamedev" className="hover: transition-colors">
                  GDScript Experiments
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: External Links (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-mono text-xs  uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 text-sm font-mono text-xs">
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover: transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover: transition-colors inline-flex items-center gap-1"
                >
                  <span>@SeansScholia</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@example.com" className="hover: transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {new Date().getFullYear()} Sean Doran. All rights reserved.</p>
          <p className="text-[11px]">
            Built with Next.js, Tailwind CSS & First-Principles Data Ownership.
          </p>
        </div>

      </div>
    </footer>
  );
}