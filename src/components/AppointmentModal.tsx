import { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Stethoscope, CheckCircle, FileText, Printer, AlertCircle } from 'lucide-react';
import { DEPARTMENTS, DOCTORS, HOSPITAL_INFO, Doctor } from '../data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: Doctor | null;
  initialDepartmentId?: string | null;
}

interface BookingReceipt {
  bookingId: string;
  patientName: string;
  patientPhone: string;
  doctorName: string;
  departmentName: string;
  date: string;
  slot: string;
  visitType: string;
  symptoms: string;
  bookedAt: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  initialDoctor,
  initialDepartmentId,
}: AppointmentModalProps) {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [selectedDept, setSelectedDept] = useState(
    initialDepartmentId || initialDoctor?.departmentId || DEPARTMENTS[0].id
  );
  const [selectedDoctorId, setSelectedDoctorId] = useState(
    initialDoctor?.id || DOCTORS[0].id
  );
  const [appointmentDate, setAppointmentDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [appointmentSlot, setAppointmentSlot] = useState('10:00 AM – 10:30 AM');
  const [visitType, setVisitType] = useState('New OPD Consultation');
  const [symptoms, setSymptoms] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [receipt, setReceipt] = useState<BookingReceipt | null>(null);

  // Sync state if initial props change
  useEffect(() => {
    if (initialDoctor) {
      setSelectedDoctorId(initialDoctor.id);
      setSelectedDept(initialDoctor.departmentId);
    } else if (initialDepartmentId) {
      setSelectedDept(initialDepartmentId);
      const doc = DOCTORS.find((d) => d.departmentId === initialDepartmentId);
      if (doc) setSelectedDoctorId(doc.id);
    }
  }, [initialDoctor, initialDepartmentId]);

  if (!isOpen) return null;

  // Filter doctors based on selected department
  const filteredDoctors = DOCTORS.filter((d) => d.departmentId === selectedDept);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setErrorMsg('Please enter the patient full name.');
      return;
    }
    const cleanPhone = patientPhone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    const doctor = DOCTORS.find((d) => d.id === selectedDoctorId) || DOCTORS[0];
    const dept = DEPARTMENTS.find((d) => d.id === selectedDept) || DEPARTMENTS[0];

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const receiptData: BookingReceipt = {
      bookingId: `MMH-2026-${randomSuffix}`,
      patientName: patientName.trim(),
      patientPhone: cleanPhone,
      doctorName: doctor.name,
      departmentName: dept.name,
      date: appointmentDate,
      slot: appointmentSlot,
      visitType,
      symptoms: symptoms.trim() || 'General Consultation',
      bookedAt: new Date().toLocaleString(),
    };

    setReceipt(receiptData);
    setErrorMsg('');
  };

  const handleReset = () => {
    setReceipt(null);
    setPatientName('');
    setPatientPhone('');
    setSymptoms('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-display">
              {receipt ? 'Appointment Confirmed' : 'Book OPD Consultation'}
            </h3>
            <p className="text-xs text-slate-300">
              {HOSPITAL_INFO.name} · Beside Amma Furniture Mall, Nellore
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {receipt ? (
          /* Confirmation Receipt State */
          <div className="p-6 sm:p-8 space-y-6">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-emerald-900">
                  Appointment Booked Successfully!
                </div>
                <div className="text-xs text-emerald-800 mt-1">
                  Confirmation SMS & WhatsApp details dispatched to +91 {receipt.patientPhone}. Please report 15 minutes before your slot.
                </div>
              </div>
            </div>

            {/* Receipt Details Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-slate-500">Booking Reference</span>
                <span className="font-mono font-bold text-slate-900 tabular-nums">
                  {receipt.bookingId}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-slate-500">Patient Name</span>
                <span className="font-semibold text-slate-900">{receipt.patientName}</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-slate-500">Consulting Specialist</span>
                <span className="font-semibold text-emerald-800">{receipt.doctorName}</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-slate-500">Department</span>
                <span className="text-slate-900">{receipt.departmentName}</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-slate-500">Scheduled Date & Slot</span>
                <span className="font-semibold text-slate-900">
                  {receipt.date} · {receipt.slot}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-slate-500">Reporting Location</span>
                <span className="text-slate-900 text-right">
                  OPD Reception, Ground Floor
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Booked At: {receipt.bookedAt}</span>
                <span className="text-emerald-700 font-medium">Affordable Consultation</span>
              </div>
            </div>

            {/* Assistance note */}
            <div className="text-xs text-slate-500 leading-relaxed bg-slate-100 p-3 rounded-lg">
              <strong>Need urgent assistance or change?</strong> Call our 24/7 reception at{' '}
              <a href={`tel:${HOSPITAL_INFO.phone}`} className="text-emerald-700 font-semibold underline">
                {HOSPITAL_INFO.phone}
              </a>
              . Wheelchair assistance is available at the entrance.
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Slip</span>
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors text-center"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Patient Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Patient Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mobile Number (for SMS & WhatsApp Confirmation) *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="e.g. 9876543210"
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900 font-mono"
                />
              </div>
            </div>

            {/* Department & Doctor Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Speciality Department
                </label>
                <select
                  value={selectedDept}
                  onChange={(e) => {
                    const newDept = e.target.value;
                    setSelectedDept(newDept);
                    const doc = DOCTORS.find((d) => d.departmentId === newDept);
                    if (doc) setSelectedDoctorId(doc.id);
                  }}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Specialist Doctor
                </label>
                <select
                  value={selectedDoctorId}
                  onChange={(e) => setSelectedDoctorId(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
                >
                  {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} ({doc.title.split('&')[0]})
                      </option>
                    ))
                  ) : (
                    <option value={DOCTORS[0].id}>{DOCTORS[0].name}</option>
                  )}
                </select>
              </div>
            </div>

            {/* Date & Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Appointment Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={appointmentSlot}
                    onChange={(e) => setAppointmentSlot(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
                  >
                    <option value="09:30 AM – 10:00 AM">09:30 AM – 10:00 AM (Morning)</option>
                    <option value="10:00 AM – 10:30 AM">10:00 AM – 10:30 AM (Morning)</option>
                    <option value="11:30 AM – 12:00 PM">11:30 AM – 12:00 PM (Morning)</option>
                    <option value="05:30 PM – 06:00 PM">05:30 PM – 06:00 PM (Evening)</option>
                    <option value="06:30 PM – 07:00 PM">06:30 PM – 07:00 PM (Evening)</option>
                    <option value="08:00 PM – 08:30 PM">08:00 PM – 08:30 PM (Evening)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Brief Symptoms */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Symptoms / Health Concern (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. High fever for 2 days, back pain, routine pregnancy checkup..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
              />
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Zero cancellation charge · Pay at counter</span>
              <span className="text-emerald-700 font-semibold">Immediate confirmation</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-sm text-center"
            >
              Confirm Appointment Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
