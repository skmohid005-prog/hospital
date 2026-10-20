import { Phone, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface FloatingActionsProps {
  onBookAppointment: () => void;
}

export default function FloatingActions({ onBookAppointment }: FloatingActionsProps) {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-center gap-2 sm:gap-3">
      {/* 24/7 Phone Call Button */}
      <a
        href={`tel:${HOSPITAL_INFO.phone}`}
        className="flex items-center gap-2 px-3.5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 text-xs font-semibold"
        aria-label="Call Hospital Emergency"
      >
        <Phone className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">24/7 Call: {HOSPITAL_INFO.phone}</span>
        <span className="sm:hidden font-mono">24/7 Call</span>
      </a>

      {/* Book OPD Button */}
      <button
        onClick={onBookAppointment}
        className="flex items-center gap-2 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 text-xs font-semibold"
      >
        <Calendar className="w-4 h-4" />
        <span>Book OPD</span>
      </button>
    </div>
  );
}
