
// src/app/page.tsx
import styles from './home.module.css';
import { BentoGrid, BentoCard } from "@/components/BentoGrid"

export default function Home() {
  return (
    <main>
      <BentoGrid  className="grid-cols-4">
        {/* Card 1: Hero Card */}
        <BentoCard href="/about" class="BentoCard" className="md:col-span-2 lg:col-span-2 row-span-2">
          <div>
            <h1>Hero Card</h1>
            <h3>Crafting Systems: Code, Crafts & Concepts.</h3>
          </div>
          <h4>Photography: systems tools or crafting components. more likely art then a photograph</h4>
          <p>
            Short BIO and Philosophy!
          </p>
        </BentoCard>

        {/* Card 2: Case Study! */}
        <BentoCard class="BentoCard">
          <div>
            <span>Featured Case Study</span>
            <h3>Full Stack Productivity Dashboard!</h3>
          </div>
          <h4>Photography: A photograph of a whiteboard set up as a kanban board with a man in a suit infront of it.</h4>
        </BentoCard>

        {/* Card 3: Game Development */}
        <BentoCard class="BentoCard">
          <div>
            <span>gameDev Systems</span>
            <h3>Procedural Generation and Godot Games!</h3>
          </div>
          <h4>Photography: A close up photograph of my backgammon board mid legal move.</h4>

        </BentoCard>

        {/* Card 4: Idea Garden */}
        <BentoCard className="md:col-span-2 lg:col-span-2">
          <div>
            <span>Idea Garden</span>
            <h3>
              A botanical framework for personal management, idea nourishment and long-form thinking!
            </h3>
          </div>
          <h4>Photography: A rotating photograph of gardens and my plants i am growing</h4>

        </BentoCard>

        {/* Card 5: Tailoring Log */}
        <BentoCard className="md:col-span-1 lg:col-span-1">
          <div>
            <span>Tailoring Logs</span>
            <h3>Garment Construction!</h3>
          </div>
          <h4>Photography: An action shot of me cutting a piece of tweed/cordoroy cloth. brightly coloured or patterned.</h4>

          <p>
            Pattern making!
          </p>
        </BentoCard>

        {/* Card 6: Bookstagram*/}
        <BentoCard className="md:col-span-1, col-start-1 lg:col-span-1, col-start-1">
          <div>
            <span>Sean'sScholia & Reading Log</span>
            <h3 >My Bookstagram Account!</h3>
          </div>
          <h4>Photography: A Photograph of books or bookshelves with my Bookstagram logo over the top</h4>
          <p>
            How-to to my 4 coulour highlighter annotation system!
          </p>
        </BentoCard>

        {/* Card 7: TTRPG & World Building Blog */}
        <BentoCard className="md:col-span-1 lg:col-span-1">
          <div>
            <span>World Building & TTRPG Systems</span>
            <h3>Characters, Factions and more!</h3>
          </div>
          <h4>Photography: A close up action shot of a d20 rolling in the primary focus colour of my website."</h4>
        </BentoCard>
      </BentoGrid>
    </main>
  );
}