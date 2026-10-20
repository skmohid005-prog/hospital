import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Is Madala Multispeciality Hospital open 24 hours on holidays and festivals like Vijayadashami?",
    a: "Yes. Madala Multispeciality Hospital operates 24 hours every single day of the week, including all public holidays, Sundays, and festivals like Vijayadashami. Our emergency casualty, casualty medical officer, ICU, and 24/7 in-house pharmacy remain fully operational at all times."
  },
  {
    q: "What makes Dr. Tarun Madala's consultation so well-regarded by patients?",
    a: "Dr. Tarun Madala (MD Physician) is celebrated by hundreds of Nellore families for his empathetic bedside manner, clinical accuracy, and commitment to affordable care. As reflected in patient feedback ('Good service, afordable price and good treatment.tq TARUN SIR...'), he avoids unnecessary prescriptions and provides thorough guidance."
  },
  {
    q: "How do I reach the hospital from Nellore Railway Station or Bus Stand?",
    a: "We are located right beside Amma Furniture Mall in Gandhinagar, Pogathota, Nellore. It is just 1.8 km (approx. 6–8 minutes) from Nellore Railway Station (NLR) and 1.2 km from Atmakur Bus Stand. Auto-rickshaws and cabs know the landmark 'Amma Furniture Mall, Pogathota' very well."
  },
  {
    q: "What payment methods and cards are accepted at billing?",
    a: "We accept all major Credit Cards (Visa, MasterCard, RuPay), Debit Cards, and NFC Contactless Mobile Payments via UPI, Google Pay, PhonePe, and Paytm, as well as Cash. Computerized, itemized receipts are immediately provided for insurance and mediclaim reimbursement."
  },
  {
    q: "Is wheelchair assistance available for elderly or injured patients?",
    a: "Yes, 100%. We have dedicated wheelchair-accessible car parking right next to the entrance, zero-step ramp access, wide entrance gates, and hospital attendants ready with wheelchairs to assist patients directly from their vehicle into the OPD or casualty ward."
  },
  {
    q: "How can I book an appointment or get emergency ambulance support?",
    a: "You can book directly through our online appointment system on this website, or call our direct hospital helpline at 073860 37003. For emergency admissions, you can walk in immediately without prior appointment."
  }
];

export default function HospitalFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">
            Patient Guide & Hospital Information
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Answers to common queries regarding doctor consultations, emergency triage, timings, and payment options.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900 font-display">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Help Card */}
        <div className="mt-10 p-5 rounded-xl bg-emerald-50 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-emerald-950 font-display">
              Have another question or need emergency assistance?
            </div>
            <div className="text-xs text-emerald-800 mt-0.5">
              Our 24-hour medical helpdesk in Pogathota, Nellore is ready to assist.
            </div>
          </div>
          <a
            href={`tel:${HOSPITAL_INFO.phone}`}
            className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-2 shrink-0 shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {HOSPITAL_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
