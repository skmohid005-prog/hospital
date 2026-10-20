import { useState, useMemo } from 'react';
import { Star, CheckCircle, Search, MessageSquarePlus, ThumbsUp } from 'lucide-react';
import { REVIEWS, HOSPITAL_INFO, Review } from '../data/hospitalData';

interface ReviewsSectionProps {
  onWriteReview: () => void;
  userReviews?: Review[];
}

export default function ReviewsSection({ onWriteReview, userReviews = [] }: ReviewsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allReviews = useMemo(() => {
    return [...userReviews, ...REVIEWS];
  }, [userReviews]);

  const filteredReviews = useMemo(() => {
    return allReviews.filter((rev) => {
      const matchesCategory =
        activeCategory === 'all' || rev.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        rev.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (rev.treatment && rev.treatment.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [allReviews, activeCategory, searchQuery]);

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Rating KPI Hero Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 mb-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Rating Breakdown */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-8 text-center sm:text-left">
              <div>
                <div className="text-5xl sm:text-6xl font-extrabold text-slate-900 font-display tabular-nums tracking-tight">
                  5.0
                </div>
                <div className="flex text-amber-400 mt-2 justify-center sm:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Overall Google Rating
                </div>
              </div>

              <div className="flex-1 space-y-1.5 w-full">
                <div className="text-xs text-slate-500 font-medium mb-1">
                  Based on <strong className="text-slate-900 font-bold tabular-nums">460 Verified Reviews</strong>
                </div>

                {/* Star bars */}
                {[
                  { star: '5 Star', pct: '98%', count: '451' },
                  { star: '4 Star', pct: '2%', count: '9' },
                  { star: '3 Star', pct: '0%', count: '0' },
                  { star: '2 Star', pct: '0%', count: '0' },
                  { star: '1 Star', pct: '0%', count: '0' },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-10 text-right shrink-0">{row.star}</span>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: row.pct }}
                      />
                    </div>
                    <span className="w-8 text-right font-mono tabular-nums text-slate-400 text-[11px]">
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights from Patient Feedback */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Patient Endorsements in Nellore
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Recognized for Honest Advice, Caring Nurses & Affordable Care
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Families from Pogathota, Gandhinagar, and across Nellore district trust Madala Multispeciality Hospital for round-the-clock availability, empathetic doctor consultations led by Dr. Tarun Madala, and respectful nursing care.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onWriteReview}
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  <span>Share Your Experience</span>
                </button>

                <a
                  href={HOSPITAL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
                >
                  View on Google Maps (460 reviews) →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'doctor', label: 'Doctor Care' },
              { id: 'pricing', label: 'Affordable Pricing' },
              { id: 'staff', label: 'Friendly Staff' },
              { id: 'emergency', label: '24/7 Emergency' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search patient experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-800"
            />
          </div>
        </div>

        {/* Reviews Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.length === 0 ? (
            <div className="col-span-full py-12 text-center text-sm text-slate-500 bg-white rounded-xl border border-slate-200">
              No reviews found matching &quot;{searchQuery}&quot;. Clear your search query to see all 460 reviews.
            </div>
          ) : (
            filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  {/* Rating Stars & Date */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span>{rev.date}</span>
                  </div>

                  {/* Review Content */}
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{rev.content}&rdquo;
                  </p>

                  {/* Treatment if mentioned */}
                  {rev.treatment && (
                    <div className="text-[11px] font-medium text-slate-500 pt-1">
                      Department: {rev.treatment}
                    </div>
                  )}
                </div>

                {/* Author Info */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center font-display">
                      {rev.initials}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{rev.author}</div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span>Verified Patient</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
