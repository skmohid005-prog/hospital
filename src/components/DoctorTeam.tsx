import { useState } from 'react';
import { Calendar, Clock, Star, Languages, Check, Award } from 'lucide-react';
import { DOCTORS, Doctor } from '../data/hospitalData';

interface DoctorTeamProps {
  onBookDoctor: (doctor: Doctor) => void;
}

export default function DoctorTeam({ onBookDoctor }: DoctorTeamProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              Our Medical Faculty
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Experienced Specialists Committed to Caring Healthcare
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Consult with top medical specialists in Nellore. Led by Dr. Tarun Madala, our physicians emphasize thorough clinical examinations, transparent guidance, and affordable care.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600 bg-white p-3 rounded-lg border border-slate-200 shrink-0">
            <Award className="w-5 h-5 text-emerald-600" />
            <div>
              <span className="font-semibold text-slate-900">Dr. Tarun Madala</span>
              <span className="text-xs block text-slate-500">Chief Consultant Physician</span>
            </div>
          </div>
        </div>

        {/* Feature Doctor Consultation Banner */}
        <div className="mb-12 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 relative min-h-[280px] bg-slate-100">
              {!imageError ? (
                <img
                  src="/src/assets/images/doctor_consultation_1792516761346.jpg"
                  alt="Doctor consulting with patient at Madala Multispeciality Hospital"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-emerald-50 text-emerald-800 p-8 text-center font-medium">
                  Compassionate Clinical Consultation Room
                </div>
              )}
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="text-emerald-700 font-semibold">Chief Medical Director</span>
                  <span aria-hidden="true">·</span>
                  <span>14+ Years Clinical Experience</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-600 font-medium">5.0 Star Patient Endorsement</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                  Dr. Tarun Madala
                </h3>
                <div className="text-sm font-medium text-emerald-700">
                  MBBS, MD (General Medicine), FCCS — Senior Consultant Physician
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Known across Nellore for his patient listening, precision treatment of fevers, diabetes, hypertension, and emergency stabilization. Families specifically commend Dr. Tarun for affordable and honest medical treatment without superfluous tests.
                </p>

                {/* Patient Quote callout */}
                <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-lg text-sm text-emerald-950 italic">
                  &ldquo;Good service, afordable price and good treatment.tq TARUN SIR... He explained the health condition very patiently.&rdquo;
                  <span className="block not-italic text-xs text-emerald-700 font-medium mt-1">
                    — Rajesh Kumar (Verified Patient Review)
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>OPD: 9:30 AM – 1:30 PM & 5:30 PM – 9:00 PM</span>
                </div>
                <button
                  onClick={() => onBookDoctor(DOCTORS[0])}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors shadow-xs flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consult Dr. Tarun</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="text-xs text-emerald-700 font-semibold">
                  {doc.departmentName}
                </div>

                <h4 className="text-lg font-bold text-slate-900 font-display">
                  {doc.name}
                </h4>

                <div className="text-xs text-slate-500 font-medium leading-relaxed">
                  {doc.qualifications}
                </div>

                <div className="text-xs text-slate-500">
                  <span>{doc.experience}</span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {doc.bio}
                </p>

                {/* Focus areas */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Focus Areas
                  </div>
                  <ul className="space-y-1">
                    {doc.focusAreas.slice(0, 3).map((area, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Languages className="w-3.5 h-3.5 text-slate-400" />
                  <span>{doc.languages.join(', ')}</span>
                </div>

                <button
                  onClick={() => onBookDoctor(doc)}
                  className="w-full py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors text-center"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
