export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <header className="p-6 border-b border-zinc-800">
        <h1 className="text-xl font-bold tracking-tight">
          Sean's Personal website - Possibly a dashboard?
          </h1>
      </header>
      
      <div className="flex-1 p-6 flex flex-col gap-6">
        <p className="text-zinc-400">
          this dashboard will probably be used for managing my projects? will double check this
        </p>
        
        {/* Dashboard grid or components will go here */}
      </div>
    </main>
  );
}