import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark in display face */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-display whitespace-nowrap shrink-0 hover:text-emerald-700 transition-colors"
          >
            {HOSPITAL_INFO.name}
          </a>

          {/* Zone 2: 4-5 concise single-line nav links with hover underlines */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="#departments"
              className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-600"
            >
              Departments
            </a>
            <a
              href="#doctors"
              className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-600"
            >
              Doctors
            </a>
            <a
              href="#facilities"
              className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-600"
            >
              Facilities
            </a>
            <a
              href="#reviews"
              className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-600"
            >
              Reviews
            </a>
            <a
              href="#location"
              className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-600"
            >
              Location & Hours
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0"
              title="Call hospital emergency desk"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span className="tabular-nums font-mono">{HOSPITAL_INFO.phone}</span>
            </a>
            <button
              onClick={onBookAppointment}
              className="px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors whitespace-nowrap shrink-0 shadow-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              aria-label="Call Hospital"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            <a
              href="#departments"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
            >
              Departments
            </a>
            <a
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
            >
              Specialist Doctors
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
            >
              Facilities & ICU
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
            >
              Patient Reviews (5.0 ★)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-800 rounded-md hover:bg-slate-50"
            >
              Location, Landmark & Hours
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookAppointment();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800"
            >
              Book Appointment
            </button>
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="w-full py-2.5 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-lg hover:bg-emerald-100 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Emergency Helpline: {HOSPITAL_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
