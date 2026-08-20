
// src/app/page.tsx
import styles from './home.module.css';
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div id="bento-grid" className="scroll-mt-16 max-w-7xl mx-auto px-6 py-12">
      <BentoGrid>
        {/* Card 1: Idea Garden*/}
        <BentoCard href="/about" className=" BentoCard md:col-span-2 lg:col-span-2 row-span-1">
          <div>
            <h1 className="font-bold">🧠 THE IDEA GARDEN</h1>
            <p> 
              The digital home for my mind. 
              A hyperlinked personal wiki where raw thoughts, essays, 
              and research are tended into mature concepts.<br />
            </p>
            <h3 className="font-bold">Integrated Modules:</h3>
            <ul>
               <li>🎨 Art History Log (Analysis & Visual Notes)</li>
               <li>🎲 Lore & Worldbuilding (TTRPG Systems)</li>
            </ul>
            <div className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 font-mono text-xs cursor-pointer focus:outline-none">
              <span>Open The Idea Garden</span>
              <svg className="w-3.5 h-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
        </BentoCard>

        {/* Card 2: Blog */}
        <BentoCard href="/about" className="BentoCard md:col-span-1 lg:col-span-1 row-span-2">
          <div>
            <h1 className="font-bold">THE FLOWER STAND (BLOG)</h1>
            <h3>🌹 ESSAYS, BLOG, & DISPATCHES</h3>
            <p className="italic"> Polished public writings and deep dives into systems and culture.</p>
          <h4 className="font-bold">Latest Posts:</h4>
          <ul>
            <li>• "Tending to Systems in 2026"</li>
            <li>• "On Renaissance Perspective"</li>
          </ul>
          </div>
          
        </BentoCard>

        {/* Card 3: Living Ledger */}
        <BentoCard href="/about"  className="BentoCard md:col-span-2 lg:col-span-2 row-span-1">
          <div>
            <h1 className="font-bold"> 📖 THE LIVING LEDGER </h1>
            <p> 
              The digital steward for my physical world. A custom 
              app tracking lifespans, maintenance, and usage 
              cycles of my tangible belongings. <br />
            </p>
            <h3 className="font-bold">Integrated Modules:</h3>
            <ul>
               <li>📚 Library, EDC, & Personal Gear</li>
               <li>🪴 Botany & Soil Log (Terracotta Systems) </li>
               <li>🧵 The Wardrobe Roll (Tailoring Wear Cycles)</li>
            </ul>
          </div>
          <div
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 font-mono text-xs cursor-pointer focus:outline-none"
        >
          <span>Inspect The Living Ledger</span>
          <svg className="w-3.5 h-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        </BentoCard>

        {/* Card 4: Literary Scholia */}
        <BentoCard href="/about" className="md:col-span-1 lg:col-span-1">
          <div>
            <h1 className='font-bold'>📚 @SeansScholia Feed</h1>
            <p>
             Classic literature breakdowns,
             four-colour pen annotations, and
             reading logs.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 font-mono text-xs cursor-pointer focus:outline-none">
              <span>View Bookstagram Archive</span>
              <svg className="w-3.5 h-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
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