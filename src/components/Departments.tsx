import { useState } from 'react';
import { Stethoscope, Activity, Heart, Baby, Sparkles, TestTube2, CheckCircle2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { DEPARTMENTS, Department } from '../data/hospitalData';

interface DepartmentsProps {
  onSelectDepartment: (deptId: string) => void;
}

const DEPT_ICONS: Record<string, React.ReactNode> = {
  'general-medicine': <Activity className="w-5 h-5 text-emerald-600" />,
  'orthopaedics': <Stethoscope className="w-5 h-5 text-emerald-600" />,
  'gynaecology': <Heart className="w-5 h-5 text-emerald-600" />,
  'paediatrics': <Baby className="w-5 h-5 text-emerald-600" />,
  'general-surgery': <Sparkles className="w-5 h-5 text-emerald-600" />,
  'diagnostics-pharmacy': <TestTube2 className="w-5 h-5 text-emerald-600" />,
};

export default function Departments({ onSelectDepartment }: DepartmentsProps) {
  const [selectedId, setSelectedId] = useState<string>(DEPARTMENTS[0].id);

  const activeDept = DEPARTMENTS.find((d) => d.id === selectedId) || DEPARTMENTS[0];

  return (
    <section id="departments" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
            Clinical Excellence in Nellore
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Multispeciality Departments & Clinical Services
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Our specialized medical units offer comprehensive diagnosis, medical management, minimally invasive procedures, and intensive care backed by accredited diagnostics.
          </p>
        </div>

        {/* Interactive Segmented Control / Department Grid Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-slate-100 rounded-xl mb-8">
          {DEPARTMENTS.map((dept) => {
            const isSelected = dept.id === selectedId;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedId(dept.id)}
                className={`flex flex-col items-center justify-center p-3 text-center rounded-lg transition-all text-xs font-semibold leading-snug ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <div className="mb-1.5">{DEPT_ICONS[dept.id] || <Activity className="w-4 h-4" />}</div>
                <span className="line-clamp-2">{dept.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Department Spotlight */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Overview & Symptoms */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="text-emerald-700 font-semibold">{activeDept.name}</span>
                <span aria-hidden="true">·</span>
                <span>Head: {activeDept.headDoctor}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 font-display">
                {activeDept.name}
              </h3>

              <p className="text-slate-700 leading-relaxed text-base">
                {activeDept.fullDesc}
              </p>

              {/* Symptoms Treated */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Common Symptoms & Conditions Treated
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeDept.commonSymptoms.map((symptom, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectDepartment(activeDept.id)}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors shadow-xs flex items-center gap-2 whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book OPD for {activeDept.name}</span>
                </button>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeDept.opdHours}</span>
                </div>
              </div>
            </div>

            {/* Right Col: Key Clinical Procedures & Services */}
            <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-xl p-6 space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Key Clinical Procedures & Facilities
              </div>

              <ul className="space-y-3">
                {activeDept.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Direct consultation & admission</span>
                <button
                  onClick={() => onSelectDepartment(activeDept.id)}
                  className="font-medium text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                >
                  <span>Select Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
