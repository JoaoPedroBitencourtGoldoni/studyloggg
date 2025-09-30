import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">StudyLog</Link>
          <nav className="space-x-2">
            <Link to="/" className="px-3 py-1 rounded hover:bg-slate-100">Home</Link>
            <Link to="/add" className="px-3 py-1 rounded bg-blue-600 text-white">Nova Sessão</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 py-3 text-sm text-slate-600">
          StudyLog • Checkpoint 5
        </div>
      </footer>
    </div>
  );
}
