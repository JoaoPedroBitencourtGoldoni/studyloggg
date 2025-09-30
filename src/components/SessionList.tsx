import React from "react";
import type { StudySession } from "../types";
import { SessionCard } from "./SessionCard";

export const SessionList: React.FC<{ sessions: StudySession[]; onDelete?: (id: string) => void }> = ({ sessions, onDelete }) => {
  if (sessions.length === 0) return <div className="text-center text-slate-600 p-6">Nenhuma sessão registrada ainda.</div>;
  return <div>{sessions.map(s => <SessionCard key={s.id} session={s} onDelete={onDelete} />)}</div>;
};
