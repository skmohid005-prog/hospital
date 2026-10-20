import { useState } from 'react';
import { X, Star, CheckCircle, AlertCircle } from 'lucide-react';
import { HOSPITAL_INFO, Review } from '../data/hospitalData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: Review) => void;
}

export default function ReviewModal({ isOpen, onClose, onSubmitReview }: ReviewModalProps) {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [treatment, setTreatment] = useState('General Consultation');
  const [category, setCategory] = useState<'doctor' | 'pricing' | 'staff' | 'emergency'>('doctor');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!content.trim() || content.trim().length < 10) {
      setErrorMsg('Please write at least 10 characters detailing your experience.');
      return;
    }

    const initials = author
      .trim()
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    const newReview: Review = {
      id: `rev-user-${Date.now()}`,
      author: author.trim(),
      initials: initials || 'PT',
      rating,
      date: 'Just now',
      verified: true,
      content: content.trim(),
      category,
      treatment,
    };

    onSubmitReview(newReview);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setAuthor('');
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold font-display">
              {submitted ? 'Thank You!' : 'Write a Patient Review'}
            </h3>
            <p className="text-xs text-slate-300">
              {HOSPITAL_INFO.name} · Nellore
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-display">
              Your Feedback has been Recorded!
            </h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you for trusting Dr. Tarun Madala and the team at Madala Multispeciality Hospital. Your review helps other patients in Nellore find honest and compassionate care.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Padmavathi R."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-110 transition-transform focus:outline-hidden"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-slate-600 font-medium ml-2">
                  {rating === 5 ? '5.0 - Excellent Care' : `${rating}.0 Stars`}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Department / Service Visited
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 text-slate-900"
                >
                  <option value="General Medicine / Dr. Tarun">General Medicine / Dr. Tarun</option>
                  <option value="24/7 Emergency & ICU">24/7 Emergency & ICU</option>
                  <option value="Orthopaedics & Joint Care">Orthopaedics & Joint Care</option>
                  <option value="Gynaecology & Maternity">Gynaecology & Maternity</option>
                  <option value="Paediatrics & Child Care">Paediatrics & Child Care</option>
                  <option value="Diagnostics & Pharmacy">Diagnostics & Pharmacy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Aspect
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 text-slate-900"
                >
                  <option value="doctor">Doctor Treatment & Diagnosis</option>
                  <option value="pricing">Affordable Pricing & Billing</option>
                  <option value="staff">Hospital Staff & Nurses</option>
                  <option value="emergency">24/7 Emergency Care</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Review & Comments *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Share your feedback about doctor treatment, nurse care, cleanliness, and overall experience..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 text-slate-900"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors text-center shadow-xs"
            >
              Submit Patient Review
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
