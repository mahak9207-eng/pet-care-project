export const INITIAL_SPECIES_CATEGORIES = [
  {
    id: 'dogs',
    name: 'Canine Care',
    label: 'Dogs (श्वान)',
    icon: 'Dog',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive guidelines for canines covering Indian vaccination schedules, tick/flea prevention in summer, active exercise, nutrition & dental health.',
    commonBreeds: ['Indian Pariah (Desi Dog)', 'Golden Retriever', 'Labrador', 'German Shepherd', 'Pug', 'Indian Spitz'],
    averageLifespan: '10 - 15 Years',
    keyNeeds: ['Daily exercise (45-60 mins)', 'Bi-annual dental scaling', 'Heartworm & flea/tick prevention', 'Balanced diet tailored to climate'],
    routineChecklist: [
      'Morning walk and brisk exercise in cool hours',
      'Measured meal portion with fresh water',
      'Teeth brushing or ayurvedic dental chew',
      'Evening coat brushing and tick inspection'
    ]
  },
  {
    id: 'cats',
    name: 'Feline Care',
    label: 'Cats (बिल्ली)',
    icon: 'Cat',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    description: 'Specialized feline wellness focusing on urinary health, clean water fountains, indoor enrichment, scratching posts & core vaccination.',
    commonBreeds: ['Indian Domestic (Billi)', 'Persian Cat', 'British Shorthair', 'Siamese', 'Maine Coon'],
    averageLifespan: '12 - 18 Years',
    keyNeeds: ['Hydration management (clean filtered water)', 'Daily scooped litter box', 'Vertical climbing shelves', 'Core FVRCP vaccines'],
    routineChecklist: [
      'Fresh wet food and clean water replacement',
      'Litter box inspection and scooping',
      '15 minutes of laser or feather wand play',
      'Coat de-shedding brushing'
    ]
  },
  {
    id: 'birds',
    name: 'Avian Care',
    label: 'Birds (पक्षी)',
    icon: 'Bird',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=600&q=80',
    description: 'Avian habitat balance, draft prevention, balanced organic pellet nutrition, and non-stick cookware safety.',
    commonBreeds: ['Cockatiel', 'Budgerigar (Budgie)', 'Indian Ringneck Parrot', 'Lovebird', 'Canary'],
    averageLifespan: '8 - 25+ Years',
    keyNeeds: ['Teflon/non-stick PTFE fume free home', 'Safe sunlight / UVB exposure', 'Daily foraging toys', 'Pellet-based diet over oily seeds'],
    routineChecklist: [
      'Cage paper replacement and water dish sanitize',
      'Fresh chopped greens & pellet replenishment',
      'Supervised out-of-cage flying session',
      'Evening cage cover and 10-12 hr dark rest'
    ]
  },
  {
    id: 'small-mammals',
    name: 'Small Mammals',
    label: 'Rabbits & Small Pets (खरगोश)',
    icon: 'Rabbit',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600&q=80',
    description: 'Herbivore digestive wellness, continuous timothy hay access, teeth wear maintenance, and gentle social handling.',
    commonBreeds: ['Indian Domestic Rabbit', 'Holland Lop', 'Guinea Pig', 'Hamster'],
    averageLifespan: '5 - 12 Years',
    keyNeeds: ['80% Timothy Hay intake', 'Avoid sudden Indian summer heat', 'Chew blocks for non-stop teeth growth', 'Spacious play pen'],
    routineChecklist: [
      'Unlimited fresh timothy hay refill',
      'Fresh dark leafy greens serving',
      'Water bottle check and refill',
      'Habitat bedding spot-cleaning'
    ]
  },
  {
    id: 'reptiles-aquatics',
    name: 'Reptiles & Aquatics',
    label: 'Fish & Aquatics (मछली)',
    icon: 'Fish',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80',
    description: 'Precision temperature gradient control, seasonal aeration, water parameters & filtration monitoring.',
    commonBreeds: ['Betta Fish', 'Goldfish', 'Guppy', 'Neon Tetra', 'Indian Star Tortoise (Rescue Care)'],
    averageLifespan: '3 - 15+ Years',
    keyNeeds: ['Aquarium aeration and clean filter', 'Water chlorine neutralizing drops', 'Strict portion feeding', 'Weekly 20% water exchange'],
    routineChecklist: [
      'Inspect aquarium temperature and filter flow',
      'Scheduled feeding according to species cycle',
      'Spot clean tank glass and substrate',
      'Inspect water clarity and fish aeration'
    ]
  }
];

export const INITIAL_SERVICES = [
  {
    id: 'emergency',
    title: '24/7 Emergency Care',
    icon: 'Ambulance',
    color: '#ef4444',
    bg: '#fef2f2',
    description: 'Round-the-clock emergency hospital with trauma stabilization, oxygen therapy, and emergency surgery capability.',
    availability: '24 Hours / 7 Days Open',
    priceEstimate: '₹1,200 - ₹3,500 (Evaluation)'
  },
  {
    id: 'routine',
    title: 'General Wellness & Vaccines',
    icon: 'ShieldCheck',
    color: '#10b981',
    bg: '#ecfdf5',
    description: 'Complete nose-to-tail physical examinations, core Rabies & 9-in-1 / 7-in-1 vaccinations, and microchipping.',
    availability: 'Mon - Sat, 9:00 AM - 7:00 PM',
    priceEstimate: '₹500 - ₹950'
  },
  {
    id: 'dental',
    title: 'Advanced Dental Suite',
    icon: 'Sparkles',
    color: '#3b82f6',
    bg: '#eff6ff',
    description: 'Ultrasonic scaling, subgingival polishing, digital dental radiographs, and tooth extractions to prevent periodontal infections.',
    availability: 'Mon - Fri, 10:00 AM - 5:00 PM',
    priceEstimate: '₹1,800 - ₹4,500'
  },
  {
    id: 'surgery',
    title: 'Soft Tissue & Orthopedic Surgery',
    icon: 'Activity',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    description: 'Modern sterile surgical suites with continuous multi-parameter vital monitoring and tailored multimodal pain relief.',
    availability: 'Scheduled & Emergency',
    priceEstimate: '₹3,500 - ₹15,000'
  },
  {
    id: 'diagnostics',
    title: 'In-House Laboratory & Ultrasound',
    icon: 'Microscope',
    color: '#f59e0b',
    bg: '#fffbeb',
    description: 'Rapid 15-minute blood chemistry panels, CBC, digital x-ray imaging, cytology, and non-invasive abdominal ultrasound.',
    availability: 'Daily Walk-in & Scheduled',
    priceEstimate: '₹750 - ₹2,500'
  },
  {
    id: 'grooming',
    title: 'Therapeutic Grooming & Spa',
    icon: 'Scissors',
    color: '#ec4899',
    bg: '#fdf2f8',
    description: 'Ayurvedic & medicated anti-tick baths, coat de-shedding, sanitary trimming, ear cleaning, and gentle nail clipping.',
    availability: 'Tue - Sun, 9:30 AM - 6:00 PM',
    priceEstimate: '₹600 - ₹1,800'
  }
];

export const INITIAL_CARE_RESOURCES = [
  {
    id: 'res-1',
    title: 'Essential Puppy & Kitten Vaccination Timelines in India',
    category: 'Preventive Health',
    author: 'Dr. Rajesh Sharma, MVSc',
    readTime: '4 min read',
    summary: 'A complete week-by-week guide to maternal antibody fading and essential core vs lifestyle vaccines.',
    content: 'Between weeks 6 to 16, young companion animals experience a gradual decline in maternal antibodies. Core vaccines such as DHPPiL (9-in-1) for dogs and Tricat (FVRCP) for cats should be initiated around 7-8 weeks of age and repeated every 3 to 4 weeks until at least 16 weeks old. Anti-Rabies Vaccine (ARV) is administered at 12 to 14 weeks based on national health mandates.',
    tags: ['Vaccines', 'Puppies', 'Kittens', 'Immunity']
  },
  {
    id: 'res-2',
    title: 'Toxic Household Foods: What Pets in Indian Homes Must Never Ingest',
    category: 'Emergency & Safety',
    author: 'Dr. Vikram Patel, Veterinary Toxicologist',
    readTime: '5 min read',
    summary: 'Detailed toxicological review of onions, garlic, raisins, chocolate, and sugar substitutes.',
    content: 'Onions and garlic (very common in Indian gravies and cooked dishes) contain thiosulfates that cause severe hemolytic anemia in dogs and cats. Grapes and raisins can trigger acute renal shutdown. Keep sweets containing xylitol strictly out of reach and save emergency veterinary hospital numbers.',
    tags: ['Toxicology', 'Emergency', 'Food Safety']
  },
  {
    id: 'res-3',
    title: 'Preventing Tick Fever & Seasonal Skin Allergies During Summer & Monsoons',
    category: 'Preventive Health',
    author: 'Dr. Ananya Verma, BVSc & AH',
    readTime: '5 min read',
    summary: 'How to safeguard dogs against Rhipicephalus sanguineus brown dog ticks and flea bite dermatitis.',
    content: 'In humid and hot seasons across India, tick populations explode. Brown dog ticks transmit Ehrlichia and Babesia (Tick Fever), causing sudden high fever, lethargy, and platelet drops. Use spot-on treatments or monthly chewables (Simparica/Bravecto) and inspect paw pads and ear flaps daily.',
    tags: ['Tick Fever', 'Parasite Prevention', 'Summer Care']
  },
  {
    id: 'res-4',
    title: 'Recognizing Early Signs of Dental Disease in Aging Pets',
    category: 'Dental Care',
    author: 'Dr. Priya Nair, MVSc (Dental Specialist)',
    readTime: '4 min read',
    summary: 'Over 80% of dogs and cats over age 3 show signs of periodontal tartar. Learn to spot the subtle clues.',
    content: 'Persistent bad breath (halitosis) indicates bacterial buildup breaking down gum tissue. Watch for dropping kibble, chewing on one side, and red inflamed gingival margins. Early stage gingivitis is reversible with ultrasonic dental scaling under safe anesthesia.',
    tags: ['Dental', 'Senior Pets', 'Gingivitis']
  }
];

export const INITIAL_VET_CLINICS = [
  {
    id: 'clinic-1',
    name: 'Metropolitan Veterinary Hospital & 24/7 Trauma Care',
    specialties: ['Emergency', 'Surgery', 'General Practice', 'Cardiology'],
    rating: 4.9,
    reviewsCount: 342,
    city: 'Connaught Place, Delhi NCR',
    address: '452 Barakhamba Road, Connaught Place, New Delhi',
    phone: '+91 98112 34890',
    email: 'help@metrovethospital.in',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=700&q=80',
    leadDoctor: 'Dr. Rajesh Sharma, MVSc, DACVECC',
    consultationFee: 750,
    openHours: '24 Hours / 7 Days Open',
    badge: 'Premier Emergency Center',
    availableSlots: ['09:00 AM', '10:30 AM', '01:15 PM', '03:45 PM', '05:00 PM', '07:30 PM'],
    features: ['24/7 ICU & Oxygen', 'Ultrasound & Digital X-Ray', 'In-House Laboratory', 'Isolation Ward']
  },
  {
    id: 'clinic-2',
    name: 'Paws & Whiskers Holistic Pet Clinic',
    specialties: ['General Practice', 'Dermatology', 'Dentistry', 'Acupuncture'],
    rating: 4.8,
    reviewsCount: 219,
    city: 'Bandra West, Mumbai',
    address: '882 Hill Road, Bandra West, Mumbai',
    phone: '+91 98201 89134',
    email: 'care@pawswhiskersholistic.in',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80',
    leadDoctor: 'Dr. Ananya Verma, BVSc & AH, CVA',
    consultationFee: 600,
    openHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
    badge: 'Fear-Free Certified',
    availableSlots: ['09:30 AM', '11:00 AM', '02:00 PM', '04:15 PM'],
    features: ['Low-Stress Feline Rooms', 'Laser Therapy', 'Herbal & Diet Counseling', 'Digital Radiography']
  },
  {
    id: 'clinic-3',
    name: 'All-India Avian & Exotic Animal Hospital',
    specialties: ['Exotic Pets', 'Surgery', 'General Practice'],
    rating: 4.95,
    reviewsCount: 184,
    city: 'Indiranagar, Bengaluru',
    address: '312 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru',
    phone: '+91 98450 67299',
    email: 'appointments@avianexoticsvet.in',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=700&q=80',
    leadDoctor: 'Dr. Vikram Patel, MVSc (Avian & Exotics)',
    consultationFee: 850,
    openHours: 'Mon - Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM',
    badge: 'Specialist Facility',
    availableSlots: ['10:00 AM', '11:30 AM', '01:30 PM', '03:00 PM'],
    features: ['Micro-surgical Instruments', 'Avian Incubators', 'Specific Enclosure Habitation', 'Exotic Nutritionist']
  },
  {
    id: 'clinic-4',
    name: 'Apex Animal Dental & Orthopedic Surgical Suites',
    specialties: ['Dentistry', 'Surgery', 'Dermatology'],
    rating: 4.75,
    reviewsCount: 156,
    city: 'Civil Lines, Jaipur',
    address: '1410 Jacob Road, Civil Lines, Jaipur',
    phone: '+91 94140 43811',
    email: 'contact@apexanimaldental.in',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=700&q=80',
    leadDoctor: 'Dr. Priya Nair, MVSc, DAVDC',
    consultationFee: 700,
    openHours: 'Mon - Fri: 9:30 AM - 6:00 PM',
    badge: 'Dental Specialty Lead',
    availableSlots: ['08:30 AM', '10:15 AM', '01:00 PM', '02:45 PM', '04:30 PM'],
    features: ['Ultrasonic Scaling', 'Sub-gingival Digital Sensors', 'Endodontics', 'Safe Inhalation Isoflurane']
  },
  {
    id: 'clinic-5',
    name: 'Sanjeevani Pet Care & Vaccination Center',
    specialties: ['General Practice', 'Vaccines', 'Microchipping', 'Dermatology'],
    rating: 4.7,
    reviewsCount: 290,
    city: 'Kothrud, Pune',
    address: '710 Paud Road, Near Kothrud Stand, Pune',
    phone: '+91 98500 78965',
    email: 'reception@sanjeevanipetcare.in',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80',
    leadDoctor: 'Dr. Amit Kulkarni, BVSc',
    consultationFee: 500,
    openHours: 'Mon - Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 2:00 PM',
    badge: 'Community Affordable Care',
    availableSlots: ['09:15 AM', '11:45 AM', '02:30 PM', '03:45 PM', '05:30 PM'],
    features: ['Walk-in Vaccine Clinics', 'Pet Pharmacy', 'Senior Pet Mobility Checks', 'Microchip Registry']
  }
];

export const INITIAL_PETS = [
  {
    id: 'pet-1',
    name: 'Sheru',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 3.5,
    gender: 'Male',
    weight: '29.5 kg',
    color: 'Golden Cream',
    avatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80',
    microchipId: '985-1410-0928-112',
    primaryVet: 'Dr. Rajesh Sharma (Metropolitan Animal Hospital)',
    allergies: ['Chicken Protein', 'Certain Grass Pollens'],
    preferences: ['Loves fetch with tennis balls', 'Enjoys lake swimming', 'Prefers fish and rice kibble'],
    careRoutines: {
      diet: '2.5 cups Grain-Free Salmon & Rice formula (split 8:00 AM & 7:00 PM)',
      exercise: '60 minutes active jogging and ball retrieval daily in park',
      medications: 'Omega-3 Fish Oil capsule daily; Monthly Simparica Trio chew',
      grooming: 'Weekly undercoat brushing; monthly professional bath & ear cleaning'
    },
    vaccinations: [
      { id: 'v1', name: 'Anti-Rabies Vaccine (ARV)', dateGiven: '2024-04-10', nextDue: '2027-04-10', batch: 'RB-99824X', status: 'Up to Date' },
      { id: 'v2', name: 'DHPPiL 9-in-1 Booster', dateGiven: '2025-02-15', nextDue: '2026-02-15', batch: 'DH-44109M', status: 'Due Soon' },
      { id: 'v3', name: 'Bordetella (Kennel Cough)', dateGiven: '2025-08-20', nextDue: '2026-02-20', batch: 'BD-77182K', status: 'Due Soon' },
      { id: 'v4', name: 'Corona & Leptospirosis Booster', dateGiven: '2025-05-12', nextDue: '2026-05-12', batch: 'LP-33901B', status: 'Up to Date' }
    ],
    notes: 'Mild seasonal itchiness in monsoon. Responsive to Apoquel if prescribed.'
  },
  {
    id: 'pet-2',
    name: 'Simba',
    species: 'Cat',
    breed: 'Indian Domestic (Billi)',
    age: 2.0,
    gender: 'Male (Neutered)',
    weight: '4.8 kg',
    color: 'Tabby Brown & White',
    avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80',
    microchipId: '985-2309-8812-440',
    primaryVet: 'Dr. Ananya Verma (Paws & Whiskers)',
    allergies: ['No known food or drug allergies'],
    preferences: ['Catnip mouse toy lover', 'Loves sunbathing on balcony window hammock', 'Filtered running water only'],
    careRoutines: {
      diet: '1 pouch Royal Canin Hairball Wet (morning) + 40g dental kibble (night)',
      exercise: '20 minutes indoor feather wand chasing & puzzle ball hunting',
      medications: 'Monthly Revolution Plus topical flea/tick/ear mite preventative',
      grooming: 'Bi-weekly silicone bristle de-shedding'
    },
    vaccinations: [
      { id: 'v5', name: 'Tricat Core (FVRCP)', dateGiven: '2024-09-18', nextDue: '2027-09-18', batch: 'FV-88219L', status: 'Up to Date' },
      { id: 'v6', name: 'Feline Leukemia (FeLV)', dateGiven: '2024-09-18', nextDue: '2026-09-18', batch: 'FL-22019A', status: 'Up to Date' },
      { id: 'v7', name: 'Anti-Rabies Purevax', dateGiven: '2024-11-05', nextDue: '2025-11-05', batch: 'RP-09182C', status: 'Up to Date' }
    ],
    notes: 'Hydration needs close monitoring in warm months. Drinks from stainless steel fountain.'
  },
  {
    id: 'pet-3',
    name: 'Mitthu',
    species: 'Bird',
    breed: 'Lutino Cockatiel',
    age: 1.5,
    gender: 'Male',
    weight: '92 grams',
    color: 'Yellow with Bright Orange Cheek Patches',
    avatar: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=400&q=80',
    microchipId: 'Leg Band #AV-4912',
    primaryVet: 'Dr. Vikram Patel (All-India Avian Clinic)',
    allergies: ['Teflon fumes / Non-stick PTFE toxic sensitivity (Strict Home Policy)'],
    preferences: ['Whistles sweet tunes', 'Loves fresh coriander & spinach treats', 'Enjoys warm water mist bathing'],
    careRoutines: {
      diet: '70% Harrison’s Organic Fine Pellets + 30% fresh chopped greens & seasonal cucumber',
      exercise: 'Daily 45 minutes supervised flight in bird-safe enclosed room',
      medications: 'Avian multivitamin drops once weekly in fresh drinking water',
      grooming: 'Warm water mist bottle spray 3x weekly; natural wood perch conditioning'
    },
    vaccinations: [
      { id: 'v8', name: 'Polyomavirus Avian Vaccine', dateGiven: '2024-06-14', nextDue: '2025-06-14', batch: 'PY-11029Z', status: 'Up to Date' }
    ],
    notes: 'Very cheerful and vocal in morning. Beak and nail length within optimal limits.'
  },
  {
    id: 'pet-4',
    name: 'Rocky',
    species: 'Dog',
    breed: 'Pug',
    age: 5.0,
    gender: 'Male',
    weight: '10.5 kg',
    color: 'Fawn with Black Mask',
    avatar: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80',
    microchipId: '985-7721-0091-382',
    primaryVet: 'Dr. Priya Nair (Apex Animal Dental & Surgical)',
    allergies: ['Dust mites', 'Beef byproduct treats'],
    preferences: ['Short gentle evening strolls', 'Orthopedic memory foam mattress', 'Soft rubber chew toys'],
    careRoutines: {
      diet: 'Digestive sensitivity dry kibble (1.2 cups split into 2 meals)',
      exercise: 'Two 15-minute gentle flat walks during cooler early morning/night',
      medications: 'Daily facial fold antiseptic wipes; joint glucosamine chew',
      grooming: 'Daily nose butter balm and facial fold drying'
    },
    vaccinations: [
      { id: 'v9', name: 'Anti-Rabies (3-Year)', dateGiven: '2024-01-20', nextDue: '2027-01-20', batch: 'RB-11442V', status: 'Up to Date' },
      { id: 'v10', name: 'DHPPiL Booster', dateGiven: '2025-01-18', nextDue: '2026-01-18', batch: 'DH-90184P', status: 'Due Soon' },
      { id: 'v11', name: 'Bordetella Oral', dateGiven: '2024-10-10', nextDue: '2025-10-10', batch: 'BO-22910M', status: 'Up to Date' }
    ],
    notes: 'Brachycephalic respiratory care. Keep in cool ventilated room if ambient temperature exceeds 28°C.'
  }
];

export const INITIAL_HEALTH_RECORDS = [
  {
    id: 'rec-1',
    petId: 'pet-1',
    petName: 'Sheru',
    date: '2025-10-15',
    category: 'Bi-annual Routine Exam',
    clinic: 'Metropolitan Veterinary Hospital',
    veterinarian: 'Dr. Rajesh Sharma',
    vitalStats: { weight: '29.5 kg', temperature: '101.4 °F', heartRate: '88 bpm', respiration: '22 bpm' },
    diagnosisNotes: 'Heart & lungs clear on auscultation. Coat is dense and shiny. Mild tartar on upper right premolars; schedule dental scaling within 6 months.',
    prescriptions: [
      { name: 'Simparica Trio (Flea/Tick/Heartworm)', dose: '1 chew monthly', duration: '6 months refill' }
    ],
    followUp: 'Return in February for DHPPiL & Bordetella boosters.'
  },
  {
    id: 'rec-2',
    petId: 'pet-2',
    petName: 'Simba',
    date: '2025-09-10',
    category: 'Urinary Health & Weight Check',
    clinic: 'Paws & Whiskers Holistic Pet Clinic',
    veterinarian: 'Dr. Ananya Verma',
    vitalStats: { weight: '4.8 kg', temperature: '100.8 °F', heartRate: '150 bpm', respiration: '28 bpm' },
    diagnosisNotes: 'Abdomen soft and non-painful. Bladder palpation normal. Urine specific gravity within optimal range. Weight is stable.',
    prescriptions: [
      { name: 'Cosequin Feline Joint & Bladder chew', dose: '1 capsule sprinkled on wet food', duration: 'Ongoing' }
    ],
    followUp: 'Annual wellness check in September 2026.'
  },
  {
    id: 'rec-3',
    petId: 'pet-4',
    petName: 'Rocky',
    date: '2025-11-02',
    category: 'Skin Fold & Allergy Follow-up',
    clinic: 'Apex Animal Dental & Surgical',
    veterinarian: 'Dr. Priya Nair',
    vitalStats: { weight: '10.5 kg', temperature: '101.9 °F', heartRate: '96 bpm', respiration: '30 bpm' },
    diagnosisNotes: 'Facial folds show minimal redness. Skin barrier improving with twice-weekly medicated wipes. Ear canals clear with no yeast detected.',
    prescriptions: [
      { name: 'Chlorhexidine Pet Wipes', dose: 'Wipe facial fold gently once daily', duration: '30 pads' }
    ],
    followUp: 'Check-in if facial rubbing or redness recurs.'
  }
];

export const INITIAL_APPOINTMENTS = [
  {
    id: 'apt-101',
    bookingRef: 'PET-2026-8812',
    petId: 'pet-1',
    petName: 'Sheru',
    clinicId: 'clinic-1',
    clinicName: 'Metropolitan Veterinary Hospital & 24/7 Trauma Care',
    veterinarian: 'Dr. Rajesh Sharma',
    service: 'Core Vaccine Booster (DHPPiL & Bordetella)',
    date: '2026-02-18',
    time: '10:30 AM',
    status: 'Confirmed',
    notes: 'Please check mild dry skin patch near right shoulder.',
    createdAt: '2026-01-20'
  },
  {
    id: 'apt-102',
    bookingRef: 'PET-2026-7491',
    petId: 'pet-4',
    petName: 'Rocky',
    clinicId: 'clinic-4',
    clinicName: 'Apex Animal Dental & Orthopedic Surgical Suites',
    veterinarian: 'Dr. Priya Nair',
    service: 'Comprehensive Dental Scale & Polish',
    date: '2026-03-05',
    time: '08:30 AM',
    status: 'Confirmed',
    notes: 'Pre-anesthetic blood panel completed. Fast after midnight before visit.',
    createdAt: '2026-02-01'
  },
  {
    id: 'apt-103',
    bookingRef: 'PET-2025-9923',
    petId: 'pet-2',
    petName: 'Simba',
    clinicId: 'clinic-2',
    clinicName: 'Paws & Whiskers Holistic Pet Clinic',
    veterinarian: 'Dr. Ananya Verma',
    service: 'Annual Physical & Parasite Screen',
    date: '2025-09-10',
    time: '02:00 PM',
    status: 'Completed',
    notes: 'Routine visit completed. All vitals healthy.',
    createdAt: '2025-08-25'
  }
];

export const INITIAL_REMINDERS = [
  {
    id: 'rem-1',
    petId: 'pet-1',
    petName: 'Sheru',
    title: 'DHPPiL & Bordetella Vaccination Due',
    dueDate: '2026-02-18',
    category: 'Vaccination',
    priority: 'High',
    completed: false,
    description: 'Upcoming appointment booked at Metro Hospital.'
  },
  {
    id: 'rem-2',
    petId: 'pet-1',
    petName: 'Sheru',
    title: 'Monthly Heartworm & Tick Chew (Simparica)',
    dueDate: '2026-02-25',
    category: 'Medication',
    priority: 'Medium',
    completed: false,
    description: 'Administer with evening meal.'
  },
  {
    id: 'rem-3',
    petId: 'pet-2',
    petName: 'Simba',
    title: 'Water Fountain Filter Replacement',
    dueDate: '2026-02-22',
    category: 'Hygiene & Water',
    priority: 'Low',
    completed: true,
    description: 'Replace carbon & foam filter to maintain clean running water.'
  },
  {
    id: 'rem-4',
    petId: 'pet-4',
    petName: 'Rocky',
    title: 'Pre-dental Procedure Fasting Notice',
    dueDate: '2026-03-04',
    category: 'Dental Care',
    priority: 'High',
    completed: false,
    description: 'No solid food after 10:00 PM ahead of morning anesthesia.'
  },
  {
    id: 'rem-5',
    petId: 'pet-3',
    petName: 'Mitthu',
    title: 'Avian UVB Lamp Bulb Replacement',
    dueDate: '2026-03-15',
    category: 'Habitat Lighting',
    priority: 'Medium',
    completed: false,
    description: 'UVB wavelength output degrades after 6 months of continuous use.'
  }
];

// AI Mock Behavioral & Pattern Data
export const AI_POPULAR_SERVICES = [
  { name: 'Wellness & Preventive Exams', percentage: 34, count: 1420, trend: '+12% vs last quarter', color: '#10b981' },
  { name: 'Core Vaccines & Anti-Rabies', percentage: 26, count: 1088, trend: '+8% seasonal peak', color: '#3b82f6' },
  { name: 'Dental Scaling & Surgery', percentage: 18, count: 752, trend: '+15% growing awareness', color: '#8b5cf6' },
  { name: 'Tick Fever & Skin Treatment', percentage: 13, count: 544, trend: '+6% monsoon surge', color: '#f59e0b' },
  { name: 'Emergency & Trauma Triage', percentage: 9, count: 376, trend: 'Stable 24/7 demand', color: '#ef4444' }
];

export const AI_PREFERRED_CLINICS = [
  {
    name: 'Metropolitan Veterinary Hospital (Delhi NCR)',
    share: 36,
    avgSatisfaction: '4.9 / 5.0',
    primaryReasons: ['24/7 Availability', 'Immediate Diagnostic Ultrasound', 'Specialist Staff'],
    turnaround: '< 25 mins wait time'
  },
  {
    name: 'Paws & Whiskers Holistic Clinic (Mumbai)',
    share: 25,
    avgSatisfaction: '4.8 / 5.0',
    primaryReasons: ['Fear-Free Certified Cat Rooms', 'Gentle Handling', 'Low Stress'],
    turnaround: '< 15 mins wait time'
  },
  {
    name: 'Apex Animal Dental & Surgical (Jaipur)',
    share: 21,
    avgSatisfaction: '4.75 / 5.0',
    primaryReasons: ['Advanced Dental Radiographs', 'Isoflurane Anesthetic Protocol'],
    turnaround: 'Appointment Only'
  },
  {
    name: 'All-India Avian & Exotic Hospital (Bengaluru)',
    share: 18,
    avgSatisfaction: '4.95 / 5.0',
    primaryReasons: ['Certified Avian Specialist', 'Specialized Microsurgery'],
    turnaround: '< 20 mins wait time'
  }
];

export const AI_APPOINTMENT_PATTERNS = [
  { day: 'Mon', morningBookings: 28, afternoonBookings: 35, peakHours: '10:00 AM & 04:30 PM' },
  { day: 'Tue', morningBookings: 22, afternoonBookings: 30, peakHours: '09:30 AM & 02:00 PM' },
  { day: 'Wed', morningBookings: 25, afternoonBookings: 32, peakHours: '11:00 AM & 05:00 PM' },
  { day: 'Thu', morningBookings: 30, afternoonBookings: 28, peakHours: '10:30 AM & 03:30 PM' },
  { day: 'Fri', morningBookings: 38, afternoonBookings: 42, peakHours: '09:00 AM & 04:00 PM' },
  { day: 'Sat', morningBookings: 45, afternoonBookings: 48, peakHours: '10:00 AM - 02:00 PM' },
  { day: 'Sun', morningBookings: 18, afternoonBookings: 22, peakHours: 'Emergency triage only' }
];

export const AI_ACTIVITY_METRICS = {
  wellnessIndex: 92,
  medicationAdherenceRate: '96%',
  averageWeeklyWalkMiles: 24.8,
  loggedCareTasksThisMonth: 58,
  preventiveBoosterCoverage: '88% of registered cohort'
};
