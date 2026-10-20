import { useState } from 'react';
import Header from './components/Header';
import EmergencyBanner from './components/EmergencyBanner';
import Hero from './components/Hero';
import Departments from './components/Departments';
import DoctorTeam from './components/DoctorTeam';
import Facilities from './components/Facilities';
import ReviewsSection from './components/ReviewsSection';
import LocationAndHours from './components/LocationAndHours';
import HospitalFaq from './components/HospitalFaq';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AppointmentModal from './components/AppointmentModal';
import ReviewModal from './components/ReviewModal';
import { Doctor, Review } from './data/hospitalData';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);

  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [userReviews, setUserReviews] = useState<Review[]>([]);

  const handleOpenAppointment = (doctor?: Doctor, deptId?: string) => {
    setSelectedDoctor(doctor || null);
    setSelectedDeptId(deptId || null);
    setAppointmentModalOpen(true);
  };

  const handleSelectDepartment = (deptId: string) => {
    handleOpenAppointment(undefined, deptId);
  };

  const handleBookDoctor = (doctor: Doctor) => {
    handleOpenAppointment(doctor);
  };

  const handleAddReview = (newReview: Review) => {
    setUserReviews((prev) => [newReview, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Casualty / Emergency Status Banner */}
      <EmergencyBanner />

      {/* Strict Top Bar Contract Header */}
      <Header onBookAppointment={() => handleOpenAppointment()} />

      <main className="flex-1">
        {/* Hero with split columns, 460 reviews proof, and full-width KPI strip */}
        <Hero onBookAppointment={() => handleOpenAppointment()} />

        {/* Specialized Departments with interactive tabs */}
        <Departments onSelectDepartment={handleSelectDepartment} />

        {/* Doctor Team spotlighting Dr. Tarun Madala and specialists */}
        <DoctorTeam onBookDoctor={handleBookDoctor} />

        {/* Hospital Facilities, ICU, 24/7 Pharmacy & Accessibility Showcase */}
        <Facilities />

        {/* Verified Patient Reviews (5.0 rating · 460 reviews) */}
        <ReviewsSection
          onWriteReview={() => setReviewModalOpen(true)}
          userReviews={userReviews}
        />

        {/* Location, Landmark (Beside Amma Furniture Mall), 24h Schedule & Transit */}
        <LocationAndHours />

        {/* Hospital FAQs & Guidance */}
        <HospitalFaq />
      </main>

      {/* Institutional Footer */}
      <Footer onBookAppointment={() => handleOpenAppointment()} />

      {/* Floating Emergency & Quick OPD Booking Trigger */}
      <FloatingActions onBookAppointment={() => handleOpenAppointment()} />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => {
          setAppointmentModalOpen(false);
          setSelectedDoctor(null);
          setSelectedDeptId(null);
        }}
        initialDoctor={selectedDoctor}
        initialDepartmentId={selectedDeptId}
      />

      {/* Interactive Patient Review Modal */}
      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
}
