export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <header className="p-6 border-b border-zinc-800">
        <h1 className="text-xl font-bold tracking-tight">Sean's Blog!</h1>
      </header>
      
      <div className="flex-1 p-6 flex flex-col gap-6">
        <p className="text-zinc-400">This will be my personal blog page for putting my essays and personal thougths on display</p>
        
        {/* Dashboard grid or components will go here */}
      </div>
    </main>
  );
}