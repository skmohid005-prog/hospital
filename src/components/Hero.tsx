import { useState } from 'react';
import { Phone, MapPin, Calendar, Clock, Star, ShieldCheck, Accessibility, CreditCard } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface HeroProps {
  onBookAppointment: () => void;
}

export default function Hero({ onBookAppointment }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-emerald-950/40 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">
        {/* Two-column hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Unboxed editorial kicker / metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-emerald-400">
              <span>Gandhinagar, Pogathota, Nellore</span>
              <span aria-hidden="true">·</span>
              <span>Beside Amma Furniture Mall</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">Open 24 Hours</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-balance leading-tight">
              Compassionate, 24/7 Multispeciality Healthcare in Nellore
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Led by Dr. Tarun Madala and senior clinical consultants, Madala Multispeciality Hospital delivers comprehensive emergency care, inpatient treatment, advanced diagnostics, and affordable medical attention tailored for every family.
            </p>

            {/* Proof point adjacent to proposition */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-sm text-slate-300 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white tabular-nums">5.0</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300 font-medium">460 Verified Patient Reviews</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-medium">100% Patient Satisfaction</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onBookAppointment}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors shadow-md flex items-center justify-center gap-2 whitespace-nowrap focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Calendar className="w-4 h-4" />
                <span>Book OPD Appointment</span>
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/80 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Emergency: {HOSPITAL_INFO.phone}</span>
              </a>

              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Directions</span>
              </a>
            </div>

            {/* Quick trust notice */}
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full emergency team & pharmacy on duty tonight, including holidays and festivals.</span>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-800 shadow-2xl h-full min-h-[340px] sm:min-h-[420px] flex flex-col justify-end">
              {!imageError ? (
                <img
                  src="/src/assets/images/hero_hospital_building_1792516760309.jpg"
                  alt="Madala Multispeciality Hospital building exterior in Pogathota, Nellore"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">Madala Multispeciality Hospital</h3>
                  <p className="text-sm text-slate-300 max-w-sm">Beside Amma Furniture Mall, Gandhinagar, Pogathota, Nellore</p>
                </div>
              )}

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Location Badge over photo */}
              <div className="relative p-5 sm:p-6 space-y-2 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                  <span>Pogathota, Nellore</span>
                  <span>·</span>
                  <span>Google Plus Code: {HOSPITAL_INFO.plusCode}</span>
                </div>
                <p className="text-sm text-slate-200">
                  Wheelchair-accessible entrance & car parking on premises with zero steps from vehicle to consultation room.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Full-Width KPI & Facility Strip below Hero Split */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400">
              <Clock className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Availability</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-display">Open 24 Hours</div>
            <div className="text-xs text-slate-400">All 7 days & national holidays</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="text-xs uppercase tracking-wider font-semibold">Google Rating</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-display tabular-nums">5.0 / 5.0</div>
            <div className="text-xs text-slate-400">460 verified patient reviews</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400">
              <Accessibility className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Accessibility</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-display">Wheelchair Ready</div>
            <div className="text-xs text-slate-400">Dedicated car park & flat ramps</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-400">
              <CreditCard className="w-4 h-4" />
              <span className="text-xs uppercase tracking-wider font-semibold">Payment Modes</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white font-display">NFC & UPI / Cards</div>
            <div className="text-xs text-slate-400">Instant contactless & debit/credit</div>
          </div>
        </div>
      </div>
    </section>
  );
}
