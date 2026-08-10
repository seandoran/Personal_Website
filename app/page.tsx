
// src/app/page.tsx
import styles from './home.module.css';
import { BentoGrid, BentoCard } from "@/components/BentoGrid"

export default function Home() {
  return (
    <main>
      <BentoGrid className="grid-cols-3">
        {/* Card 1: Spans 2 columns on large screens */}
        <BentoCard className="md:col-span-2 lg:col-span-2">
          <div>
            <h1 className="text-xl font-semibold text-purple-400 uppercase tracking-wider">Hero Card</h1>
            <h3 className="text-xs font-bold mt-2">Crafting Systems: Code, Crafts & Concepts.</h3>
          </div>
          <p className="text-neutral-400 text-sm mt-2">
            Short BIO and Philosophy!
          </p>
        </BentoCard>

        {/* Card 2: Tall item spanning 2 rows */}
        <BentoCard>
          <div>
            <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Featured Case Study</span>
            <h3 className="text-xl font-bold mt-2">Full Stack Productivity Dashboard!</h3>
          </div>
          <p className="text-neutral-400 text-sm mt-2">
            
          </p>
        </BentoCard>

        {/* Card 3: Standard single cell */}
        <BentoCard>
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">gameDev Systems</span>
            <h3 className="text-xl font-bold mt-2">Procedural Generation and Godot Games!</h3>
          </div>
        </BentoCard>

        {/* Card 4: Spans 2 columns on medium screens */}
        <BentoCard className="md:col-span-2 lg:col-span-2">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Idea Garden</span>
            <h3 className="text-xl font-bold mt-2">A botanical framework for personal management, idea nourishment and long-form thinking!</h3>
          </div>
        </BentoCard>

        {/* Card 5: Large accent card spanning 2 columns and 1 row */}
        <BentoCard className="md:col-span-1 lg:col-span-1">
          <div>
            <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Tailoring Logs</span>
            <h3 className="text-xl font-bold mt-2">Garment Construction!</h3>
          </div>
          <p className="text-neutral-400 text-sm mt-2">
            Pattern making!
          </p>
        </BentoCard>

        {/* Card 6: Large accent card spanning 2 columns and 1 row */}
        <BentoCard className="md:col-span-1 lg:col-span-1">
          <div>
            <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Sean'sScholia & Reading Log</span>
            <h3 className="text-xl font-bold mt-2">My Bookstagram Account!</h3>
          </div>
          <p className="text-neutral-400 text-sm mt-2">
            How-to to my 4 coulour highlighter annotation system!
          </p>
        </BentoCard>

        {/* Card 7: Large accent card spanning 2 columns and 1 row */}
        <BentoCard className="md:col-span-1 lg:col-span-1">
          <div>
            <span className="text-xs font-semibold text-pink-400 uppercase tracking-wider">World Building & TTRPG Systems</span>
            <h3 className="text-xl font-bold mt-2">Characters, Factions and more!</h3>
          </div>
          <p className="text-neutral-400 text-sm mt-2">
          </p>
        </BentoCard>
      </BentoGrid>
    </main>
  );
}