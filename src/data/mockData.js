export const INITIAL_SPECIES_CATEGORIES = [
  {
    id: 'dogs',
    name: 'Canine Care',
    label: 'Dogs',
    icon: 'Dog',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    description: 'Comprehensive guidelines for canines covering vaccination schedules, active exercise, nutrition & dental health.',
    commonBreeds: ['Golden Retriever', 'French Bulldog', 'German Shepherd', 'Poodle', 'Labrador'],
    averageLifespan: '10 - 15 Years',
    keyNeeds: ['Daily exercise (45-90 mins)', 'Bi-annual dental scaling', 'Heartworm & flea prevention', 'High-protein balanced diet'],
    routineChecklist: [
      'Morning walk and brisk exercise',
      'Measured meal portion with fresh water',
      'Teeth brushing or dental chew',
      'Evening coat brushing and tick inspection'
    ]
  },
  {
    id: 'cats',
    name: 'Feline Care',
    label: 'Cats',
    icon: 'Cat',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    description: 'Specialized feline wellness focusing on urinary health, stress-free environments, scratching outlets & vaccination.',
    commonBreeds: ['British Shorthair', 'Maine Coon', 'Persian', 'Siamese', 'Ragdoll'],
    averageLifespan: '12 - 18 Years',
    keyNeeds: ['Hydration management (water fountains)', 'Litter box hygiene (daily scooped)', 'Vertical climbing spaces', 'Core FVRCP vaccines'],
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
    label: 'Birds',
    icon: 'Bird',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=600&q=80',
    description: 'Avian habitat balance, draft prevention, balanced pellet nutrition, and cognitive enrichment strategies.',
    commonBreeds: ['Cockatiel', 'Budgerigar', 'Parrotlet', 'African Grey', 'Canary'],
    averageLifespan: '8 - 25+ Years',
    keyNeeds: ['Non-toxic cookware home environment', 'UVB light exposure', 'Daily foraging toys', 'Pellet-based diet over pure seed'],
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
    label: 'Rabbits & Small Pets',
    icon: 'Rabbit',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600&q=80',
    description: 'Herbivore digestive wellness, continuous timothy hay access, teeth wear maintenance, and gentle social handling.',
    commonBreeds: ['Holland Lop Rabbit', 'Guinea Pig', 'Syrian Hamster', 'Chinchilla'],
    averageLifespan: '5 - 12 Years',
    keyNeeds: ['80% Timothy Hay intake', 'Avoid sudden temperature changes', 'Chew blocks for non-stop teeth growth', 'Spacious play pen'],
    routineChecklist: [
      'Unlimited fresh timothy hay refill',
      'Fresh dark leafy greens serving',
      'Water sipper bottle check and refill',
      'Habitat bedding spot-cleaning'
    ]
  },
  {
    id: 'reptiles-aquatics',
    name: 'Reptiles & Aquatics',
    label: 'Reptiles & Fish',
    icon: 'Fish',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80',
    description: 'Precision temperature gradient control, humidity cycles, UVB bulbs, and water parameter monitoring.',
    commonBreeds: ['Bearded Dragon', 'Ball Python', 'Leopard Gecko', 'Betta Fish', 'Neon Tetra'],
    averageLifespan: '5 - 20 Years',
    keyNeeds: ['Basking spot thermometer audits', 'UVB replacement every 6 months', 'Calcium powder supplementation', 'Water pH & nitrate testing'],
    routineChecklist: [
      'Inspect temperature & hygrometer sensors',
      'Scheduled feeding according to species cycle',
      'Spot clean enclosure substrate',
      'Inspect filter water flow and aeration'
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
    description: 'Round-the-clock intensive care unit with trauma stabilization, oxygen therapy, and emergency surgery capability.',
    availability: '24 Hours / 7 Days',
    priceEstimate: '$120 - $350 (Evaluation)'
  },
  {
    id: 'routine',
    title: 'General Wellness & Vaccines',
    icon: 'ShieldCheck',
    color: '#10b981',
    bg: '#ecfdf5',
    description: 'Complete nose-to-tail physical examinations, core vaccinations, microchipping, and developmental assessments.',
    availability: 'Mon - Sat, 8:00 AM - 6:00 PM',
    priceEstimate: '$55 - $95'
  },
  {
    id: 'dental',
    title: 'Advanced Dental Suite',
    icon: 'Sparkles',
    color: '#3b82f6',
    bg: '#eff6ff',
    description: 'Ultrasonic scaling, subgingival polishing, digital dental radiographs, and tooth extractions to prevent systemic diseases.',
    availability: 'Mon - Fri, 9:00 AM - 5:00 PM',
    priceEstimate: '$180 - $450'
  },
  {
    id: 'surgery',
    title: 'Soft Tissue & Orthopedic Surgery',
    icon: 'Activity',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    description: 'State-of-the-art sterile surgical suites with continuous multi-parameter vital monitoring and tailored multimodal pain relief.',
    availability: 'Scheduled & Emergency',
    priceEstimate: '$300 - $1,200'
  },
  {
    id: 'diagnostics',
    title: 'In-House Laboratory & Ultrasound',
    icon: 'Microscope',
    color: '#f59e0b',
    bg: '#fffbeb',
    description: 'Rapid 15-minute blood chemistry panels, digital x-ray imaging, cytology, and non-invasive abdominal ultrasonography.',
    availability: 'Daily Walk-in & Scheduled',
    priceEstimate: '$75 - $260'
  },
  {
    id: 'grooming',
    title: 'Therapeutic Grooming & Spa',
    icon: 'Scissors',
    color: '#ec4899',
    bg: '#fdf2f8',
    description: 'Medicated dermatological baths, coat de-shedding, sanitary trimming, ear cleaning, and gentle nail dremeling.',
    availability: 'Tue - Sat, 9:00 AM - 4:00 PM',
    priceEstimate: '$45 - $110'
  }
];

export const INITIAL_CARE_RESOURCES = [
  {
    id: 'res-1',
    title: 'Essential Puppy & Kitten Vaccination Timelines',
    category: 'Preventive Health',
    author: 'Dr. Sarah Mitchell, DVM',
    readTime: '4 min read',
    summary: 'A complete week-by-week guide to maternal antibody fading and essential core vs lifestyle vaccines.',
    content: 'Between weeks 6 to 16, young companion animals experience a gradual decline in maternal antibodies. Core vaccines such as DHPP for dogs and FVRCP for cats should be initiated around 8 weeks of age and repeated every 3 to 4 weeks until at least 16 weeks old. Rabies is administered at 12 to 16 weeks based on regional legal mandates.',
    tags: ['Vaccines', 'Puppies', 'Kittens', 'Immunity']
  },
  {
    id: 'res-2',
    title: 'Toxic Household Foods: What Pets Must Never Ingest',
    category: 'Emergency & Safety',
    author: 'Dr. Marcus Vance, Board Certified Toxicologist',
    readTime: '6 min read',
    summary: 'Detailed toxicological review of xylitol (birch sugar), onions, garlic, grapes, raisins, and dark chocolate.',
    content: 'Xylitol (often labeled as birch sugar in sugar-free gum, peanut butter, and baked goods) causes severe, rapid hypoglycemic shock and acute liver necrosis in canines. Grapes and raisins can trigger unpredictable acute renal failure even at minimal doses. Keep emergency activated charcoal and animal poison control numbers handy.',
    tags: ['Toxicology', 'Emergency', 'Food Safety']
  },
  {
    id: 'res-3',
    title: 'Recognizing Early Signs of Dental Disease in Aging Pets',
    category: 'Dental Care',
    author: 'Dr. Emily Chen, Veterinary Dental Specialist',
    readTime: '5 min read',
    summary: 'Over 80% of dogs and cats over age 3 show signs of periodontal disease. Learn to spot the subtle clues.',
    content: 'Halitosis (persistent bad breath) is never normal; it indicates active bacterial colonies breaking down soft gum tissue. Watch for dropping kibble, chewing on one side, reduced grooming in cats, and red inflamed gingival margins. Early stage gingivitis is reversible with professional dental cleaning.',
    tags: ['Dental', 'Senior Pets', 'Gingivitis']
  },
  {
    id: 'res-4',
    title: 'Optimal Exercise Regimens for Different Breed Groups',
    category: 'Routine & Fitness',
    author: 'Coach Liam Roberts, Canine Biomechanics',
    readTime: '5 min read',
    summary: 'How to structure high-drive working dogs versus brachycephalic (flat-faced) breeds without causing heat exhaustion.',
    content: 'Herding and sporting breeds (Border Collies, Belgian Malinois, Retrievers) thrive on mental stimulation alongside physical bursts like flyball, nosework, and agility. Conversely, brachycephalic breeds (Pugs, French Bulldogs) should never exercise in high heat or humidity, prioritizing early morning walks in cooling harnesses.',
    tags: ['Fitness', 'Breeds', 'Thermal Safety']
  }
];

export const INITIAL_VET_CLINICS = [
  {
    id: 'clinic-1',
    name: 'Metropolitan Veterinary Hospital & 24/7 ER',
    specialties: ['Emergency', 'Surgery', 'General Practice', 'Cardiology'],
    rating: 4.9,
    reviewsCount: 342,
    city: 'Downtown Metro',
    address: '452 Grand Boulevard, Suite 100, Downtown',
    phone: '(555) 234-8900',
    email: 'help@metrovethospital.org',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=700&q=80',
    leadDoctor: 'Dr. Sarah Mitchell, DVM, DACVECC',
    consultationFee: 75,
    openHours: '24 Hours / 7 Days Open',
    badge: 'Premier Emergency Center',
    availableSlots: ['09:00 AM', '10:30 AM', '01:15 PM', '03:45 PM', '05:00 PM', '07:30 PM'],
    features: ['24/7 ICU & Oxygen', 'CT & Ultrasound', 'In-House Laboratory', 'Isolation Ward']
  },
  {
    id: 'clinic-2',
    name: 'Paws & Whiskers Holistic Wellness Center',
    specialties: ['General Practice', 'Dermatology', 'Dentistry', 'Acupuncture'],
    rating: 4.8,
    reviewsCount: 219,
    city: 'Westside Heights',
    address: '882 Evergreen Terrace, Westside Heights',
    phone: '(555) 891-3421',
    email: 'care@pawswhiskersholistic.com',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80',
    leadDoctor: 'Dr. Julian Ross, DVM, CVA',
    consultationFee: 65,
    openHours: 'Mon - Sat: 8:00 AM - 6:30 PM',
    badge: 'Fear-Free Certified',
    availableSlots: ['09:30 AM', '11:00 AM', '02:00 PM', '04:15 PM'],
    features: ['Low-Stress Feline Rooms', 'Laser Therapy', 'Herbal & Dietary Counseling', 'Digital Radiography']
  },
  {
    id: 'clinic-3',
    name: 'Advanced Avian & Exotic Animal Clinic',
    specialties: ['Exotic Pets', 'Surgery', 'General Practice'],
    rating: 4.95,
    reviewsCount: 184,
    city: 'North Suburbs',
    address: '312 Falcon Ridge Road, North Valley',
    phone: '(555) 672-9988',
    email: 'appointments@avianexoticsvet.net',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=700&q=80',
    leadDoctor: 'Dr. Kimberly Vance, MS, DVM (Avian & Exotic)',
    consultationFee: 85,
    openHours: 'Mon - Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 1:00 PM',
    badge: 'Specialist Facility',
    availableSlots: ['10:00 AM', '11:30 AM', '01:30 PM', '03:00 PM'],
    features: ['Micro-surgical Instruments', 'Avian Incubators', 'Specific Enclosure Habitation', 'Exotic Nutritionist']
  },
  {
    id: 'clinic-4',
    name: 'Oakwood Animal Dental & Surgical Suites',
    specialties: ['Dentistry', 'Surgery', 'Dermatology'],
    rating: 4.75,
    reviewsCount: 156,
    city: 'Oakwood Park',
    address: '1410 Silver Oak Lane, Oakwood',
    phone: '(555) 438-1120',
    email: 'contact@oakwoodvetdental.com',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=700&q=80',
    leadDoctor: 'Dr. Emily Chen, DVM, DAVDC',
    consultationFee: 70,
    openHours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    badge: 'Dental Specialty Lead',
    availableSlots: ['08:30 AM', '10:15 AM', '01:00 PM', '02:45 PM', '04:30 PM'],
    features: ['Ultrasonic Scaling', 'Sub-gingival Digital Sensors', 'Endodontics', 'Safe Inhalation Isoflurane']
  },
  {
    id: 'clinic-5',
    name: 'Central Pet Care & Preventative Clinic',
    specialties: ['General Practice', 'Vaccines', 'Microchipping', 'Dermatology'],
    rating: 4.7,
    reviewsCount: 290,
    city: 'Downtown Metro',
    address: '710 Central Avenue, Suite 3B, Downtown',
    phone: '(555) 789-6543',
    email: 'reception@centralpetcare.com',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80',
    leadDoctor: 'Dr. Marcus Sterling, DVM',
    consultationFee: 50,
    openHours: 'Mon - Sat: 8:00 AM - 7:00 PM, Sun: 10:00 AM - 4:00 PM',
    badge: 'Community Affordable Care',
    availableSlots: ['09:15 AM', '11:45 AM', '02:30 PM', '03:45 PM', '05:30 PM'],
    features: ['Walk-in Vaccine Clinics', 'Drive-thru Pharmacy', 'Senior Pet Mobility Checks', 'Microchip Registry']
  }
];

export const INITIAL_PETS = [
  {
    id: 'pet-1',
    name: 'Luna',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 3.5,
    gender: 'Female',
    weight: '29.5 kg',
    color: 'Honey Cream',
    avatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80',
    microchipId: '985-1410-0928-112',
    primaryVet: 'Dr. Sarah Mitchell (Metro Vet Hospital)',
    allergies: ['Chicken Protein', 'Certain Grass Pollens'],
    preferences: ['Loves fetch with tennis balls', 'Enjoys lake swimming', 'Prefers salmon kibble'],
    careRoutines: {
      diet: '2.5 cups Grain-Free Salmon & Sweet Potato formula (split 8am & 6pm)',
      exercise: '60 minutes active jogging and ball retrieval daily',
      medications: 'Omega-3 Fish Oil capsule daily; Monthly Simparica Trio',
      grooming: 'Weekly undercoat raking; monthly professional bath & ear cleaning'
    },
    vaccinations: [
      { id: 'v1', name: 'Rabies (3-Year)', dateGiven: '2024-04-10', nextDue: '2027-04-10', batch: 'RB-99824X', status: 'Up to Date' },
      { id: 'v2', name: 'DHPP (Distemper, Parvo)', dateGiven: '2025-02-15', nextDue: '2026-02-15', batch: 'DH-44109M', status: 'Due Soon' },
      { id: 'v3', name: 'Bordetella (Kennel Cough)', dateGiven: '2025-08-20', nextDue: '2026-02-20', batch: 'BD-77182K', status: 'Due Soon' },
      { id: 'v4', name: 'Leptospirosis 4-Way', dateGiven: '2025-05-12', nextDue: '2026-05-12', batch: 'LP-33901B', status: 'Up to Date' }
    ],
    notes: 'Mild seasonal itchiness in late spring. Responsive to Apoquel if prescribed.'
  },
  {
    id: 'pet-2',
    name: 'Milo',
    species: 'Cat',
    breed: 'British Shorthair',
    age: 2.0,
    gender: 'Male (Neutered)',
    weight: '5.2 kg',
    color: 'Classic Blue-Grey',
    avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80',
    microchipId: '985-2309-8812-440',
    primaryVet: 'Dr. Julian Ross (Paws & Whiskers)',
    allergies: ['No known drug or food allergies'],
    preferences: ['Catnip mouse toy lover', 'Loves sunbathing on living room window hammock', 'Filtered running water only'],
    careRoutines: {
      diet: '1 can Royal Canin Hairball Wet (morning) + 40g dental dry kibble (night)',
      exercise: '20 minutes indoor feather chasing and puzzle maze hunting',
      medications: 'Monthly Revolution Plus topical flea/tick/ear mite preventative',
      grooming: 'Bi-weekly silicone bristle de-shedding'
    },
    vaccinations: [
      { id: 'v5', name: 'FVRCP (Feline Viral Rhinotracheitis)', dateGiven: '2024-09-18', nextDue: '2027-09-18', batch: 'FV-88219L', status: 'Up to Date' },
      { id: 'v6', name: 'Feline Leukemia (FeLV)', dateGiven: '2024-09-18', nextDue: '2026-09-18', batch: 'FL-22019A', status: 'Up to Date' },
      { id: 'v7', name: 'Rabies Purevax (1-Year)', dateGiven: '2024-11-05', nextDue: '2025-11-05', batch: 'RP-09182C', status: 'Up to Date' }
    ],
    notes: 'Hydration needs close monitoring. Drinks predominantly from stainless steel fountain.'
  },
  {
    id: 'pet-3',
    name: 'Kiwi',
    species: 'Bird',
    breed: 'Lutino Cockatiel',
    age: 1.5,
    gender: 'Male',
    weight: '92 grams',
    color: 'Yellow with Orange Cheek Patches',
    avatar: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=400&q=80',
    microchipId: 'Leg Band #AV-4912',
    primaryVet: 'Dr. Kimberly Vance (Advanced Avian)',
    allergies: ['Teflon fumes / Nonstick PTFE toxic sensitivity (Strict Home Policy)'],
    preferences: ['Whistles melodic tunes', 'Loves millet spray as training reward', 'Enjoys warm mist bathing'],
    careRoutines: {
      diet: '70% Harrison’s Adult Lifetime Fine Organic Pellets + 30% fresh broccoli & bell pepper',
      exercise: 'Daily 45 minutes supervised flight in bird-safe enclosed room',
      medications: 'Avian multivitamin drops once weekly in fresh water',
      grooming: 'Warm water mist bottle spray 3x weekly; perch conditioning'
    },
    vaccinations: [
      { id: 'v8', name: 'Polyomavirus Avian Vaccine', dateGiven: '2024-06-14', nextDue: '2025-06-14', batch: 'PY-11029Z', status: 'Up to Date' }
    ],
    notes: 'Very vocal in morning. Beak and nail length currently within healthy limits.'
  },
  {
    id: 'pet-4',
    name: 'Bella',
    species: 'Dog',
    breed: 'French Bulldog',
    age: 5.0,
    gender: 'Female',
    weight: '11.8 kg',
    color: 'Fawn with Black Mask',
    avatar: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80',
    microchipId: '985-7721-0091-382',
    primaryVet: 'Dr. Emily Chen (Oakwood Dental & Surgical)',
    allergies: ['Dust mites', 'Beef byproduct treats'],
    preferences: ['Short gentle strolls', 'Orthopedic memory foam bed', 'Chew toys with soft rubber'],
    careRoutines: {
      diet: 'Hydrolyzed protein digestive sensitivity kibble (1.2 cups split 2 meals)',
      exercise: 'Two 15-minute gentle flat walks during cooler times of day',
      medications: 'Daily facial fold chlorhexidine wipes; joint glucosamine chew',
      grooming: 'Daily nose butter balm and facial fold drying'
    },
    vaccinations: [
      { id: 'v9', name: 'Rabies (3-Year)', dateGiven: '2024-01-20', nextDue: '2027-01-20', batch: 'RB-11442V', status: 'Up to Date' },
      { id: 'v10', name: 'DHPP Booster', dateGiven: '2025-01-18', nextDue: '2026-01-18', batch: 'DH-90184P', status: 'Due Soon' },
      { id: 'v11', name: 'Bordetella Oral', dateGiven: '2024-10-10', nextDue: '2025-10-10', batch: 'BO-22910M', status: 'Up to Date' }
    ],
    notes: 'Brachycephalic respiratory management. Keep in air-conditioned room if ambient temperature exceeds 75°F.'
  }
];

export const INITIAL_HEALTH_RECORDS = [
  {
    id: 'rec-1',
    petId: 'pet-1',
    petName: 'Luna',
    date: '2025-10-15',
    category: 'Bi-annual Routine Exam',
    clinic: 'Metropolitan Veterinary Hospital',
    veterinarian: 'Dr. Sarah Mitchell',
    vitalStats: { weight: '29.5 kg', temperature: '101.4 °F', heartRate: '88 bpm', respiration: '22 bpm' },
    diagnosisNotes: 'Heart & lungs clear on auscultation. Coat is dense and shiny. Mild tartar on upper right premolars; schedule dental scaling within 6 months.',
    prescriptions: [
      { name: 'Simparica Trio (Flea/Tick/Heartworm)', dose: '1 chew monthly', duration: '6 months refill' }
    ],
    followUp: 'Return in February for DHPP & Bordetella boosters.'
  },
  {
    id: 'rec-2',
    petId: 'pet-2',
    petName: 'Milo',
    date: '2025-09-10',
    category: 'Urinary Health & Weight Check',
    clinic: 'Paws & Whiskers Holistic Wellness',
    veterinarian: 'Dr. Julian Ross',
    vitalStats: { weight: '5.2 kg', temperature: '100.8 °F', heartRate: '150 bpm', respiration: '28 bpm' },
    diagnosisNotes: 'Abdomen soft and non-painful. Bladder palpation normal. Urine specific gravity within optimal range. Weight is stable.',
    prescriptions: [
      { name: 'Cosequin Feline Joint & Bladder chew', dose: '1 capsule sprinkled on wet food', duration: 'Ongoing' }
    ],
    followUp: 'Annual wellness check in September 2026.'
  },
  {
    id: 'rec-3',
    petId: 'pet-4',
    petName: 'Bella',
    date: '2025-11-02',
    category: 'Skin Fold & Allergy Follow-up',
    clinic: 'Oakwood Animal Dental & Surgical',
    veterinarian: 'Dr. Emily Chen',
    vitalStats: { weight: '11.8 kg', temperature: '101.9 °F', heartRate: '96 bpm', respiration: '30 bpm' },
    diagnosisNotes: 'Facial folds show minimal erythema. Skin barrier improving with twice-weekly medicated wipes. Ear canals clear with no yeast detected.',
    prescriptions: [
      { name: 'Douxo S3 PYO Wipes', dose: 'Wipe facial fold gently once daily', duration: '30 pads' }
    ],
    followUp: 'Check-in if facial rubbing or redness recurs.'
  }
];

export const INITIAL_APPOINTMENTS = [
  {
    id: 'apt-101',
    bookingRef: 'PET-2026-8812',
    petId: 'pet-1',
    petName: 'Luna',
    clinicId: 'clinic-1',
    clinicName: 'Metropolitan Veterinary Hospital & 24/7 ER',
    veterinarian: 'Dr. Sarah Mitchell',
    service: 'Core Vaccine Booster (DHPP & Bordetella)',
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
    petName: 'Bella',
    clinicId: 'clinic-4',
    clinicName: 'Oakwood Animal Dental & Surgical Suites',
    veterinarian: 'Dr. Emily Chen',
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
    petName: 'Milo',
    clinicId: 'clinic-2',
    clinicName: 'Paws & Whiskers Holistic Wellness Center',
    veterinarian: 'Dr. Julian Ross',
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
    petName: 'Luna',
    title: 'DHPP & Bordetella Vaccination Due',
    dueDate: '2026-02-18',
    category: 'Vaccination',
    priority: 'High',
    completed: false,
    description: 'Upcoming appointment booked at Metro Vet Hospital.'
  },
  {
    id: 'rem-2',
    petId: 'pet-1',
    petName: 'Luna',
    title: 'Monthly Heartworm Chew (Simparica Trio)',
    dueDate: '2026-02-25',
    category: 'Medication',
    priority: 'Medium',
    completed: false,
    description: 'Administer with evening meal.'
  },
  {
    id: 'rem-3',
    petId: 'pet-2',
    petName: 'Milo',
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
    petName: 'Bella',
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
    petName: 'Kiwi',
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
  { name: 'Core Vaccines & Boosters', percentage: 26, count: 1088, trend: '+8% seasonal peak', color: '#3b82f6' },
  { name: 'Dental Scaling & Surgery', percentage: 18, count: 752, trend: '+15% growing awareness', color: '#8b5cf6' },
  { name: 'Dermatology & Allergy Relief', percentage: 13, count: 544, trend: '+6% spring surge', color: '#f59e0b' },
  { name: 'Emergency & Urgent Triage', percentage: 9, count: 376, trend: 'Stable 24/7 demand', color: '#ef4444' }
];

export const AI_PREFERRED_CLINICS = [
  {
    name: 'Metropolitan Veterinary Hospital',
    share: 36,
    avgSatisfaction: '4.9 / 5.0',
    primaryReasons: ['24/7 Availability', 'Immediate Diagnostic Ultrasound', 'Specialist Staff'],
    turnaround: '< 25 mins wait time'
  },
  {
    name: 'Paws & Whiskers Holistic Center',
    share: 25,
    avgSatisfaction: '4.8 / 5.0',
    primaryReasons: ['Fear-Free Certified Cat Rooms', 'Gentle Handling', 'Low Stress'],
    turnaround: '< 15 mins wait time'
  },
  {
    name: 'Oakwood Animal Dental & Surgical',
    share: 21,
    avgSatisfaction: '4.75 / 5.0',
    primaryReasons: ['Advanced Dental Radiographs', 'Isoflurane Anesthetic Protocol'],
    turnaround: 'Appointment Only'
  },
  {
    name: 'Advanced Avian & Exotic Clinic',
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
