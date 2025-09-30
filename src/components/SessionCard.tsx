import React from "react";
import type { StudySession } from "../types";
import { Link } from "react-router-dom";

export const SessionCard: React.FC<{ session: StudySession; onDelete?: (id: string) => void }> = ({ session, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-3 flex justify-between items-start">
      <div>
        <Link to={`/session/${session.id}`} className="text-lg font-semibold hover:underline">{session.subject}</Link>
        <div className="text-sm text-slate-500">{session.date} • {session.minutes} min</div>
        {session.notes && <p className="mt-2 text-sm text-slate-700">{session.notes}</p>}
      </div>
      {onDelete && <button className="text-sm text-red-600" onClick={() => onDelete(session.id)}>Excluir</button>}
    </div>
  );
};
