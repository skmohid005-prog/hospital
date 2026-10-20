export interface Department {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  commonSymptoms: string[];
  services: string[];
  headDoctor: string;
  opdHours: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  departmentId: string;
  departmentName: string;
  qualifications: string;
  experience: string;
  languages: string[];
  opdTimings: string;
  bio: string;
  focusAreas: string[];
  highlightReview?: string;
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  rating: number;
  date: string;
  verified: boolean;
  content: string;
  category: 'doctor' | 'pricing' | 'staff' | 'emergency';
  treatment?: string;
}

export const HOSPITAL_INFO = {
  name: "Madala Multispeciality Hospital",
  tagline: "24/7 Multispeciality Healthcare in Nellore",
  phone: "073860 37003",
  phoneFormatted: "+91 73860 37003",
  address: "Beside Amma Furniture Mall, Gandhinagar, Pogathota, Nellore, Andhra Pradesh 524001",
  landmark: "Beside Amma Furniture Mall",
  locality: "Gandhinagar, Pogathota",
  city: "Nellore",
  state: "Andhra Pradesh",
  pincode: "524001",
  plusCode: "FX2P+49 Nellore, Andhra Pradesh",
  rating: 5.0,
  reviewCount: 460,
  emergencyHours: "Open 24 Hours / 7 Days",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Madala+Multispeciality+Hospital+Beside+Amma+Furniture+Mall+Gandhinagar+Pogathota+Nellore+Andhra+Pradesh+524001",
  amenities: [
    { title: "Wheelchair-Accessible Car Park", desc: "Dedicated ground level parking with zero-step access" },
    { title: "Wheelchair-Accessible Entrance", desc: "Gentle grade ramps and wide automatic clinical doors" },
    { title: "Credit & Debit Cards Accepted", desc: "Visa, Mastercard, RuPay with on-spot receipt generation" },
    { title: "NFC Mobile Payments", desc: "Fast contactless payments via UPI, Google Pay, PhonePe & Paytm" },
    { title: "24/7 In-House Pharmacy", desc: "Genuine prescription medications available round the clock" },
    { title: "24/7 Diagnostic Pathology & ECG", desc: "Urgent blood work, biochemical panels, and cardiac triage" }
  ],
  schedule: [
    { day: "Monday", hours: "Open 24 hours", note: "Regular OPD & 24/7 Emergency" },
    { day: "Tuesday", hours: "Open 24 hours", note: "Includes Vijayadashami / Festival Days" },
    { day: "Wednesday", hours: "Open 24 hours", note: "Regular OPD & 24/7 Emergency" },
    { day: "Thursday", hours: "Open 24 hours", note: "Regular OPD & 24/7 Emergency" },
    { day: "Friday", hours: "Open 24 hours", note: "Regular OPD & 24/7 Emergency" },
    { day: "Saturday", hours: "Open 24 hours", note: "Specialist Clinics & 24/7 Emergency" },
    { day: "Sunday", hours: "Open 24 hours", note: "24/7 Emergency & On-Call Consultants" }
  ]
};

export const DEPARTMENTS: Department[] = [
  {
    id: "general-medicine",
    name: "General Medicine & Critical Care",
    shortDesc: "Comprehensive diagnosis and management of acute fevers, metabolic disorders, hypertension, and intensive ICU recovery.",
    fullDesc: "Our primary medical division operates 24 hours under the guidance of Dr. Tarun Madala and seasoned medical specialists. We deliver evidence-based care for tropical infectious diseases, acute hypertension, diabetes complications, and multi-organ critical conditions.",
    commonSymptoms: ["Persistent Fever & Chills", "Uncontrolled Diabetes", "Severe Weakness / Dehydration", "Breathing Distress", "Chest Discomfort"],
    services: ["24/7 ICU Monitoring", "Infectious Disease Triage", "Preventive Health Checkups", "Hypertension & Lipid Clinics"],
    headDoctor: "Dr. Tarun Madala, MD (Physician)",
    opdHours: "Mon – Sat: 9:00 AM – 2:00 PM & 5:00 PM – 9:00 PM (Emergency 24/7)"
  },
  {
    id: "orthopaedics",
    name: "Orthopaedics & Joint Care",
    shortDesc: "Advanced bone fracture management, joint pain relief, spine care, and minimally invasive orthopaedic interventions.",
    fullDesc: "Specialized in accidental trauma management, complex fracture plating, arthritic knee and hip joint rehabilitation, and sports injury treatments with complete physiotherapy support.",
    commonSymptoms: ["Joint Pain & Swelling", "Accidental Fractures", "Spine & Low Back Pain", "Ligament Strains", "Restricted Mobility"],
    services: ["Fracture Realignment & Casts", "Digital X-Ray Assessment", "Joint Injections & Arthroscopy", "Post-Trauma Rehabilitation"],
    headDoctor: "Dr. K. Venkat Rao, MS (Ortho)",
    opdHours: "Mon – Sat: 10:00 AM – 1:00 PM & 6:00 PM – 8:30 PM"
  },
  {
    id: "gynaecology",
    name: "Obstetrics & Gynaecology",
    shortDesc: "Compassionate women's health services, antenatal monitoring, safe deliveries, and gynecological wellness.",
    fullDesc: "From routine well-woman health screenings to high-risk pregnancy management, painless labor support, and fertility consultations delivered in a private and caring environment.",
    commonSymptoms: ["Menstrual Irregularities", "Antenatal & Postnatal Care", "Pelvic Pain", "Pregnancy Screenings", "Hormonal Imbalance"],
    services: ["Antenatal Checkups & Sonography", "Normal & Cesarean Deliveries", "Laparoscopic Gynaec Surgery", "Cervical & Breast Cancer Screening"],
    headDoctor: "Dr. S. Radhika, MBBS, DGO",
    opdHours: "Mon – Sat: 10:30 AM – 2:30 PM & 5:30 PM – 8:00 PM"
  },
  {
    id: "paediatrics",
    name: "Paediatrics & Child Health",
    shortDesc: "Gentle pediatric care, neonatal observation, childhood immunization schedules, and adolescent wellbeing.",
    fullDesc: "Dedicated child wellness center treating pediatric infections, allergic conditions, growth delays, and nutritional guidance with warm and child-friendly nursing staff.",
    commonSymptoms: ["Childhood Fevers & Coughs", "Stomach Infections & Vomiting", "Vaccination Follow-ups", "Asthma & Wheezing", "Growth Assessment"],
    services: ["Complete Vaccination Schedule", "Neonatal Phototherapy & Care", "Pediatric Emergency Stabilization", "Child Growth & Nutrition Charting"],
    headDoctor: "Dr. P. Sneha, MD (Paediatrics)",
    opdHours: "Mon – Sat: 9:30 AM – 1:30 PM & 5:00 PM – 8:30 PM"
  },
  {
    id: "general-surgery",
    name: "General & Laparoscopic Surgery",
    shortDesc: "Minimal access laparoscopic surgery, emergency trauma laparotomy, hernia repairs, and appendectomy.",
    fullDesc: "Equipped with state-of-the-art sterile laminar flow operation theatres to minimize hospital-acquired infections and promote fast post-surgical ambulation.",
    commonSymptoms: ["Severe Abdominal Pain", "Suspected Appendicitis", "Hernia Bulges", "Gallbladder Stones", "Soft Tissue Swellings"],
    services: ["Laparoscopic Cholecystectomy", "Appendectomy", "Inguinal & Ventral Hernia Repairs", "Wound Debridement & Minor OT"],
    headDoctor: "Dr. M. S. Reddy, MS (General Surgery)",
    opdHours: "Mon – Sat: 11:00 AM – 3:00 PM (Emergency OT on Call)"
  },
  {
    id: "diagnostics-pharmacy",
    name: "24/7 Diagnostics & Pharmacy",
    shortDesc: "Round-the-clock accredited clinical pathology, biochemistry, ECG, digital radiology, and stocked pharmacy.",
    fullDesc: "Eliminates the stress of searching for medicines or lab tests at night. Fast turnaround time for emergency blood counts, cardiac enzymes, and essential prescription supplies.",
    commonSymptoms: ["Emergency Blood Tests Required", "Prescription Medicine Refill", "Urgent Cardiac ECG", "Dengue / Malaria Screening"],
    services: ["Automated Haematology & Bio-Chemistry", "12-Lead Digital ECG", "Digital X-Ray Unit", "24/7 Dispensing Pharmacy"],
    headDoctor: "Dr. B. Ramanjaneyulu (Chief Pathologist)",
    opdHours: "Open 24 Hours / 7 Days a Week"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-tarun-madala",
    name: "Dr. Tarun Madala",
    title: "Senior Consultant Physician & Critical Care Specialist",
    departmentId: "general-medicine",
    departmentName: "General Medicine & Critical Care",
    qualifications: "MBBS, MD (General Medicine), FCCS",
    experience: "14+ Years Experience",
    languages: ["Telugu", "English", "Hindi"],
    opdTimings: "Morning: 9:30 AM – 1:30 PM | Evening: 5:30 PM – 9:00 PM",
    bio: "Renowned across Nellore for his empathetic bedside manner, accurate clinical diagnosis, and commitment to affordable medical care. Dr. Tarun leads the critical care and medical inpatient services at Madala Multispeciality Hospital.",
    focusAreas: ["Critical Care & ICU Management", "Infectious Diseases & Fevers", "Diabetic Emergencies", "Hypertension & Cardiovascular Health"],
    highlightReview: "Good service, afordable price and good treatment.tq TARUN SIR..."
  },
  {
    id: "dr-s-radhika",
    name: "Dr. S. Radhika",
    title: "Consultant Obstetrician & Gynaecologist",
    departmentId: "gynaecology",
    departmentName: "Obstetrics & Gynaecology",
    qualifications: "MBBS, DGO, DNB (OBG)",
    experience: "11+ Years Experience",
    languages: ["Telugu", "English"],
    opdTimings: "Morning: 10:30 AM – 2:00 PM | Evening: 6:00 PM – 8:30 PM",
    bio: "Specializes in high-risk pregnancies, normal deliveries, and minimally invasive gynaecological procedures. Patients appreciate her reassuring approach and clear explanations.",
    focusAreas: ["Safe Antenatal Care", "High-Risk Pregnancy", "PCOD/PCOS Management", "Laparoscopic Hysterectomy"],
    highlightReview: "Doctor give me the good treatment and good receiving staff."
  },
  {
    id: "dr-k-venkat-rao",
    name: "Dr. K. Venkat Rao",
    title: "Consultant Orthopaedic & Joint Trauma Surgeon",
    departmentId: "orthopaedics",
    departmentName: "Orthopaedics & Joint Care",
    qualifications: "MBBS, MS (Orthopaedics), FIJR (Germany)",
    experience: "13+ Years Experience",
    languages: ["Telugu", "English"],
    opdTimings: "Morning: 11:00 AM – 2:00 PM | Evening: 6:00 PM – 8:30 PM",
    bio: "Expert in handling acute vehicular trauma, bone fractures, knee pain, and spine care. Known for advising surgical intervention only when genuinely necessary.",
    focusAreas: ["Complex Trauma & Fractures", "Knee & Shoulder Arthroscopy", "Geriatric Bone Health", "Spine Pain Management"],
    highlightReview: "Affordable price and good treatment. Very helpful staff."
  },
  {
    id: "dr-p-sneha",
    name: "Dr. P. Sneha",
    title: "Consultant Paediatrician & Neonatologist",
    departmentId: "paediatrics",
    departmentName: "Paediatrics & Child Health",
    qualifications: "MBBS, MD (Paediatrics)",
    experience: "8+ Years Experience",
    languages: ["Telugu", "English", "Hindi"],
    opdTimings: "Morning: 9:30 AM – 1:30 PM | Evening: 5:00 PM – 8:00 PM",
    bio: "Compassionate child specialist focusing on preventive pediatric health, growth tracking, child nutrition, and rapid recovery from viral infections.",
    focusAreas: ["Neonatal Care", "Pediatric Respiratory Health", "Immunization", "Child Nutrition"],
    highlightReview: "That hospital staff & Nurses are very friendly with kids."
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "M. Venkatesh",
    initials: "MV",
    rating: 5,
    date: "1 month ago",
    verified: true,
    treatment: "General Medicine / Fever Treatment",
    content: "Doctor give me the good treatment and good receiving staff. From the moment we entered, the reception guided us smoothly without any unnecessary delay.",
    category: "doctor"
  },
  {
    id: "rev-2",
    author: "Rajesh Kumar",
    initials: "RK",
    rating: 5,
    date: "2 months ago",
    verified: true,
    treatment: "Inpatient Care",
    content: "Good service, afordable price and good treatment.tq TARUN SIR... He explained the health condition very patiently and did not prescribe unnecessary medicines. Very thankful to him and team.",
    category: "pricing"
  },
  {
    id: "rev-3",
    author: "Padmavathi Reddy",
    initials: "PR",
    rating: 5,
    date: "3 months ago",
    verified: true,
    treatment: "Emergency Consultation",
    content: "That hospital staff & Nurses are very friendly. We had to visit during late evening hours and were attended immediately. Wheelchair assistance was provided right from the car parking.",
    category: "staff"
  },
  {
    id: "rev-4",
    author: "Srinivasulu Chenna",
    initials: "SC",
    rating: 5,
    date: "4 months ago",
    verified: true,
    treatment: "Orthopaedic Treatment",
    content: "Best hospital in Pogathota, Nellore. Beside Amma Furniture Mall so very easy to locate. Clean rooms, reasonable bill, and experienced doctors. Highly recommend to everyone.",
    category: "doctor"
  },
  {
    id: "rev-5",
    author: "K. Haritha",
    initials: "KH",
    rating: 5,
    date: "5 months ago",
    verified: true,
    treatment: "Gynaecology & Maternity",
    content: "Doctor gives personalized attention. The hospital has complete 24 hours service and the in-house pharmacy has all medicines. Very polite nurses and transparent billing with UPI & Card payment.",
    category: "pricing"
  },
  {
    id: "rev-6",
    author: "Anjaneyulu M.",
    initials: "AM",
    rating: 5,
    date: "6 months ago",
    verified: true,
    treatment: "24/7 Emergency Care",
    content: "Emergency unit response is top-notch in Nellore. Doctor Tarun sir took immediate personal care. The nurses monitor vital signs round the clock. 5-star hospital in Pogathota.",
    category: "emergency"
  }
];

export const TRANSIT_GUIDE = [
  {
    from: "Nellore Railway Station (NLR)",
    distance: "1.8 km",
    travelTime: "6 - 8 mins",
    directions: "Head towards Gandhi Statue / Pogathota Main Road. Take the lane beside Amma Furniture Mall."
  },
  {
    from: "Atmakur Bus Stand (Nellore RTC)",
    distance: "1.2 km",
    travelTime: "4 - 5 mins",
    directions: "Proceed down Pogathota Road. The hospital is prominently located right beside Amma Furniture Mall."
  },
  {
    from: "Trunk Road (Nellore Main Center)",
    distance: "800 meters",
    travelTime: "3 mins",
    directions: "Turn towards Gandhinagar Pogathota route; ample parking space available on premises."
  }
];
