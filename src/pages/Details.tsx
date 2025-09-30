import { useParams, Link } from "react-router-dom";
import { useSessions } from "../context/SessionContext";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const { getSessionById } = useSessions();
  const session = id ? getSessionById(id) : undefined;

  if (!session) {
    return (
      <div className="bg-white p-6 rounded shadow">
        <p className="mb-4">Sessão não encontrada.</p>
        <Link to="/" className="text-blue-600">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl">
      <h2 className="text-2xl font-bold mb-2">{session.subject}</h2>
      <div className="text-sm text-slate-500">{session.date} • {session.minutes} minutos</div>
      {session.notes && <p className="mt-4">{session.notes}</p>}
      <div className="mt-4"><Link to="/" className="text-blue-600">Voltar</Link></div>
    </div>
  );
}
