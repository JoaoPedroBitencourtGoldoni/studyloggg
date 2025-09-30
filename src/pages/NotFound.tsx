import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center p-10">
      <h2 className="text-2xl font-bold mb-2">404 — Página não encontrada</h2>
      <p className="mb-4">A rota que você tentou acessar não existe.</p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded">Ir para Home</Link>
    </div>
  );
}
