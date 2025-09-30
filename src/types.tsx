export interface StudySession {
  id: string;
  subject: string;
  minutes: number;
  date: string; // yyyy-mm-dd
  notes?: string;
}
