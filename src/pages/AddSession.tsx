import React, { useState } from "react";
import { useSessions } from "../context/SessionContext"
import { useNavigate } from "react-router-dom";
import type { StudySession } from "../types";

export default function AddSession() {
  const { addSession } = useSessions();
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState<number | "">("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [notes, setNotes] = useState("");

  const makeId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !minutes || Number(minutes) <= 0) {
      alert("Preencha Assunto e Minutos válidos.");
      return;
    }
    const session: StudySession = {
      id: makeId(),
      subject: subject.trim(),
      minutes: Number(minutes),
      date,
      notes: notes.trim() || undefined
    };
    addSession(session);
    navigate("/");
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Nova Sessão</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Assunto</label>
          <input className="mt-1 w-full p-2 border rounded" value={subject} onChange={e => setSubject(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm">Duração (min)</label>
          <input type="number" min={1} className="mt-1 w-full p-2 border rounded" value={minutes === "" ? "" : minutes} onChange={e => setMinutes(e.target.value === "" ? "" : Number(e.target.value))} />
        </div>
        <div>
          <label className="block text-sm">Data</label>
          <input type="date" className="mt-1 w-full p-2 border rounded" value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm">Notas</label>
          <textarea className="mt-1 w-full p-2 border rounded" value={notes} onChange={e => setNotes(e.target.value)} />
        </div>
        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Adicionar</button>
          <button type="button" onClick={() => navigate("/")} className="px-4 py-2 border rounded">Cancelar</button>
        </div>
      </form>
    </div>
  );
}
