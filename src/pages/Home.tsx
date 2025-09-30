import { useSessions } from "../context/SessionContext";
import { SessionList } from "../components/SessionList";

export default function Home() {
  const { sessions, removeSession, stats } = useSessions();

  return (
    <div>
      <section className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="text-sm text-slate-500">Sessões</div>
          <div className="text-2xl font-bold">{stats.totalSessions}</div>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="text-sm text-slate-500">Total minutos</div>
          <div className="text-2xl font-bold">{stats.totalMinutes}</div>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="text-sm text-slate-500">Média (min)</div>
          <div className="text-2xl font-bold">{stats.averageMinutes}</div>
        </div>
      </section>
      <h2 className="text-xl font-semibold mb-3">Histórico</h2>
      <SessionList sessions={sessions} onDelete={removeSession} />
    </div>
  );
}
