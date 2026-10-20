import { Phone, MapPin, Clock, Star, Accessibility, CreditCard, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface FooterProps {
  onBookAppointment: () => void;
}

export default function Footer({ onBookAppointment }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white font-display">
              {HOSPITAL_INFO.name}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Premier 24/7 multispeciality healthcare in Gandhinagar, Pogathota, Nellore. Providing evidence-based clinical treatments, critical ICU care, and compassionate patient service at affordable pricing.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 pt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white tabular-nums">5.0 Rating</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">460 Google Reviews</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Accessibility className="w-3 h-3 text-emerald-400" /> Wheelchair Accessible
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <CreditCard className="w-3 h-3 text-emerald-400" /> Cards & NFC UPI
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3 h-3 text-emerald-400" /> Open 24 Hours
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Clinical Services
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  General Medicine & Critical Care
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Orthopaedics & Joint Trauma
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Obstetrics & Gynaecology
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-white transition-colors">
                  Paediatrics & Neonatal Care
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  24/7 ICU & In-House Pharmacy
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Patient Reviews & Ratings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Landmark Details */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Location & Contact
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Beside Amma Furniture Mall, Gandhinagar, Pogathota, Nellore, Andhra Pradesh 524001
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-400">Google Plus Code:</span>
                <span className="text-slate-200 font-mono">{HOSPITAL_INFO.plusCode}</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="text-white font-mono font-bold hover:text-emerald-400 transition-colors"
                >
                  {HOSPITAL_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">
                  Open 24 Hours / 7 Days (Emergency & Trauma Active)
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookAppointment}
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors text-center"
              >
                Book OPD Appointment Online
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {HOSPITAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Gandhinagar, Pogathota, Nellore, AP</span>
            <span>·</span>
            <a href={`tel:${HOSPITAL_INFO.phone}`} className="hover:text-slate-300">
              Casualty: {HOSPITAL_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
