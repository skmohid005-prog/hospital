import { useState } from 'react';
import { Accessibility, CreditCard, ShieldCheck, HeartPulse, Sparkles, Building2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function Facilities() {
  const [icuImgError, setIcuImgError] = useState(false);
  const [pharmacyImgError, setPharmacyImgError] = useState(false);

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            Hospital Infrastructure & Technology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Modern Facilities Designed for Patient Comfort & Critical Care
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From our fully equipped intensive care unit to 24/7 in-house pharmacy and wheelchair accessibility, every detail ensures seamless medical attention in Nellore.
          </p>
        </div>

        {/* 2-Column Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: ICU & Critical Care Ward */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between group">
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
              {!icuImgError ? (
                <img
                  src="/src/assets/images/hospital_icu_facility_1792516761317.jpg"
                  alt="Modern ICU facility and patient monitoring ward at Madala Hospital"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  onError={() => setIcuImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-700">
                  Intensive Care Unit & Monitoring Ward
                </div>
              )}
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <HeartPulse className="w-4 h-4 text-emerald-600" />
                <span>24/7 Critical Monitoring</span>
                <span aria-hidden="true">·</span>
                <span>Central Oxygen & Ventilators</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Intensive Care Unit (ICU) & High Dependency Ward
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Staffed round the clock by critical care physicians and experienced nursing teams. Equipped with multiparameter cardiac monitors, defibrillators, invasive line setup, and sterile isolation beds.
              </p>
            </div>
          </div>

          {/* Card 2: 24/7 Pharmacy & Diagnostic Lab */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between group">
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
              {!pharmacyImgError ? (
                <img
                  src="/src/assets/images/hospital_pharmacy_lab_1792516762756.jpg"
                  alt="24/7 Pharmacy dispensary and diagnostic lab reception at Madala Hospital"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  onError={() => setPharmacyImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-700">
                  In-House Pharmacy & Diagnostics
                </div>
              )}
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Full Medicine Stocks</span>
                <span aria-hidden="true">·</span>
                <span>Rapid Lab Reports</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">
                24/7 In-House Pharmacy & Diagnostic Laboratory
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Eliminates midnight searches across Nellore for vital medicines. Our temperature-controlled dispensary stocks complete injectables, antibiotics, and pediatric drops, alongside automated blood and urine testing.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Amenities & Accessibility Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Wheelchair Accessibility */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center">
              <Accessibility className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">
              Wheelchair-Accessible Infrastructure
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Zero-obstacle access featuring dedicated wheelchair parking bays right by the entrance, continuous gradient ramps, wide automatic doors, and elevator access to all inpatient floors.
            </p>
            <div className="text-xs font-medium text-emerald-700 pt-1">
              Wheelchair assistance available at reception 24/7
            </div>
          </div>

          {/* Payment Convenience */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">
              Cards, UPI & NFC Mobile Payments
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Transparent, computerized billing accepting all Credit cards (Visa, MasterCard, RuPay), Debit cards, and tap-and-pay NFC mobile payments via Google Pay, PhonePe, and Paytm.
            </p>
            <div className="text-xs font-medium text-emerald-700 pt-1">
              Itemized digital bills for easy reimbursement
            </div>
          </div>

          {/* Operation Theatres & Inpatient Wards */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 font-display">
              Sterile OTs & Hygienic Wards
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Equipped with HEPA-filtered laminar airflow surgical suites for infection-free procedures, alongside comfortable air-conditioned single rooms, sharing suites, and daycare beds.
            </p>
            <div className="text-xs font-medium text-emerald-700 pt-1">
              Attendant resting spaces & cafeteria nearby
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
