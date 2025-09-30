import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { StudySession } from "../types";

interface SessionsContextValue {
  sessions: StudySession[];
  addSession: (s: StudySession) => void;
  removeSession: (id: string) => void;
  getSessionById: (id: string) => StudySession | undefined;
  stats: {
    totalSessions: number;
    totalMinutes: number;
    averageMinutes: number;
  };
}

const SessionsContext = createContext<SessionsContextValue | undefined>(undefined);

export const useSessions = () => {
  const ctx = useContext(SessionsContext);
  if (!ctx) throw new Error("useSessions must be used dentro do SessionsProvider");
  return ctx;
};

export const SessionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<StudySession[]>([]);

  const addSession = useCallback((s: StudySession) => {
    setSessions(prev => [s, ...prev]);
  }, []);

  const removeSession = useCallback((id: string) => {
    setSessions(prev => prev.filter(p => p.id !== id));
  }, []);

  const getSessionById = useCallback((id: string) => sessions.find(s => s.id === id), [sessions]);

  const stats = useMemo(() => {
    const totalSessions = sessions.length;
    const totalMinutes = sessions.reduce((acc, s) => acc + s.minutes, 0);
    const averageMinutes = totalSessions === 0 ? 0 : Math.round(totalMinutes / totalSessions);
    return { totalSessions, totalMinutes, averageMinutes };
  }, [sessions]);

  const value = useMemo(() => ({ sessions, addSession, removeSession, getSessionById, stats }), [sessions, addSession, removeSession, getSessionById, stats]);

  return <SessionsContext.Provider value={value}>{children}</SessionsContext.Provider>;
};
