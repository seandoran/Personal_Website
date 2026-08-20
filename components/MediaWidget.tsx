// components/MediaWidget.tsx
"use client";

interface SocialItem {
  name: string;
  url: string;
  icon: string;
}

interface ProjectItem {
  name: string;
  url: string;
}

export default function MediaWidget() {
  const socials: SocialItem[] = [
    { name: "GitHub", url: "https://github.com", icon: "💻" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
    { name: "X", url: "https://x.com", icon: "🐦" },
    { name: "YouTube", url: "https://youtube.com", icon: "📺" },
  ];

  const projects: ProjectItem[] = [
    { name: "Portfolio Hub", url: "https://myportfolio.dev" },
    { name: "SaaS App", url: "https://saasapp.com" },
  ];

  return (
    /* 
      CRITICAL FIX: 
      - We wrap everything in a layout element that has full height ('h-full').
      - We cancel out your 'flex-col justify-between' on BentoCard by using 'w-full'.
      - Text colors are set to match your design palette choice (#306238).
    */
    <div className="w-full h-full flex flex-col justify-between min-h-0 overflow-hidden select-none">
      <div>
        {/* Compressed Header */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
            Garedn Tour - Links & Media
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#306238] animate-pulse" />
        </div>

        {/* Social Icons Strip */}
        <div className="grid grid-cols-4 gap-2 mb-2.5">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square flex items-center justify-center bg-white/20 border border-white/10 rounded-xl hover:bg-white/30 text-base transition-colors"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Project Links Stack */}
        <div className="flex flex-col gap-1.5">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-2.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/5 rounded-lg text-xs font-semibold transition-colors group/link"
            >
              <span className="truncate pr-2">{project.name}</span>
              <svg 
                className="w-2.5 h-2.5 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all shrink-0" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
