export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <header className="p-6 border-b border-zinc-800">
        <h1 className="text-xl font-bold tracking-tight">Sean's Personal website - Admin</h1>
      </header>
      
      <div className="flex-1 p-6 flex flex-col gap-6">
        <p className="text-zinc-400">I will be placing my Admin dashboard here. this will include the analytics page and the blog post confirmation page.</p>
        
        {/* Dashboard grid or components will go here */}
      </div>
    </main>
  );
}