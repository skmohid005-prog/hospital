import { Phone, AlertCircle, Clock, Navigation } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function EmergencyBanner() {
  return (
    <div className="bg-red-50 border-y border-red-100 py-3.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5 text-red-900 font-medium">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>
            <strong className="font-semibold">24/7 Emergency & Trauma Admissions Active:</strong> Medical officer on duty round the clock.
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5 text-slate-700">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden md:inline text-xs text-slate-500">Ambulance & Casualty:</span>
          </div>

          <a
            href={`tel:${HOSPITAL_INFO.phone}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="tabular-nums font-mono">{HOSPITAL_INFO.phone}</span>
          </a>

          <a
            href={HOSPITAL_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-red-800 hover:text-red-950 font-medium transition-colors"
          >
            <Navigation className="w-3 h-3" />
            <span>Map Route</span>
          </a>
        </div>
      </div>
    </div>
  );
}
