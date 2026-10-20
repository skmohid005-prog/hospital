import { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, Car, Train, Bus, ExternalLink } from 'lucide-react';
import { HOSPITAL_INFO, TRANSIT_GUIDE } from '../data/hospitalData';

export default function LocationAndHours() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `${HOSPITAL_INFO.name}, ${HOSPITAL_INFO.address}. Plus Code: ${HOSPITAL_INFO.plusCode}. Phone: ${HOSPITAL_INFO.phone}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            Visit & Contact Information
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Location, Landmark & 24-Hour Schedule
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Conveniently situated in Pogathota, Gandhinagar, right beside Amma Furniture Mall in the heart of Nellore. Fully accessible with on-site parking and immediate 24/7 casualty reception.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Plus Code & Transit */}
          <div className="lg:col-span-7 space-y-6">
            {/* Address Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Hospital Address</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                  {HOSPITAL_INFO.name}
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {HOSPITAL_INFO.address}
                </p>
              </div>

              {/* Landmark Callout */}
              <div className="p-4 bg-emerald-50/70 border border-emerald-200/60 rounded-xl space-y-1">
                <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
                  Key Landmark
                </div>
                <div className="text-sm font-semibold text-emerald-900">
                  Beside Amma Furniture Mall, Pogathota
                </div>
                <p className="text-xs text-emerald-800">
                  Visible signage from the main road with dedicated ambulance ramp and wheelchair car park.
                </p>
              </div>

              {/* Plus Code & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Google Maps Plus Code</div>
                  <div className="text-sm font-bold text-slate-900 font-mono">
                    {HOSPITAL_INFO.plusCode}
                  </div>
                  <div className="text-[11px] text-slate-400">Searchable in Google Maps</div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1">
                  <div className="text-xs text-slate-500 font-medium">24/7 Helpline & OPD</div>
                  <div className="text-sm font-bold text-slate-900 font-mono">
                    {HOSPITAL_INFO.phoneFormatted}
                  </div>
                  <div className="text-[11px] text-slate-400">Casualty, ambulance & appointments</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/80 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Call</span>
                </a>
              </div>
            </div>

            {/* Nellore Transit Proximity Guide */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                How to Reach Us (Transit Distances)
              </div>

              <div className="space-y-3">
                {TRANSIT_GUIDE.map((route, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        {i === 0 ? <Train className="w-4 h-4" /> : i === 1 ? <Bus className="w-4 h-4" /> : <Car className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{route.from}</div>
                        <div className="text-xs text-slate-500">{route.directions}</div>
                      </div>
                    </div>

                    <div className="text-right shrink-0 pl-11 sm:pl-0">
                      <span className="text-xs font-bold text-emerald-700 tabular-nums font-mono block">
                        {route.distance}
                      </span>
                      <span className="text-[11px] text-slate-400">{route.travelTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 24 Hours Weekly Schedule */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                <Clock className="w-4 h-4" />
                <span>Operating Timings</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Open 24 Hours / 7 Days
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Emergency trauma, casualty care, ICU admissions, and our in-house pharmacy remain continuously open 24 hours throughout every day of the week, including festival days such as Vijayadashami.
              </p>
            </div>

            {/* Weekly Days List */}
            <div className="border-t border-slate-800 divide-y divide-slate-800/80 pt-2">
              {HOSPITAL_INFO.schedule.map((item, idx) => {
                const isSpecial = item.day === 'Tuesday';
                return (
                  <div
                    key={idx}
                    className={`py-3 flex items-center justify-between text-xs ${
                      isSpecial ? 'bg-emerald-950/40 -mx-3 px-3 rounded-lg border border-emerald-800/40' : ''
                    }`}
                  >
                    <div>
                      <span className="font-semibold text-white">
                        {item.day}
                        {isSpecial && <span className="text-emerald-400 font-normal"> (Vijayadashami)</span>}
                      </span>
                      <span className="block text-[11px] text-slate-400">{item.note}</span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-semibold text-emerald-400 font-mono">
                        {item.hours}
                      </span>
                      {isSpecial && (
                        <span className="block text-[10px] text-slate-400">Hours might differ for OPD</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Accessibility & Payment Badges */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Accessibility & Payment Notes
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Wheelchair-accessible car park & ramp entrance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Credit Cards, Debit Cards, and NFC Mobile Payments accepted</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>24-hour security guards & ambulance parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
