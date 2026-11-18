import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_PETS,
  INITIAL_VET_CLINICS,
  INITIAL_APPOINTMENTS,
  INITIAL_REMINDERS,
  INITIAL_HEALTH_RECORDS,
  INITIAL_SPECIES_CATEGORIES,
  INITIAL_SERVICES,
  INITIAL_CARE_RESOURCES,
  AI_POPULAR_SERVICES,
  AI_PREFERRED_CLINICS,
  AI_APPOINTMENT_PATTERNS,
  AI_ACTIVITY_METRICS
} from '../data/mockData';

const PetCareContext = createContext();

const LOCAL_STORAGE_KEYS = {
  PETS: 'petcare_pets_v2',
  APPOINTMENTS: 'petcare_appointments_v2',
  REMINDERS: 'petcare_reminders_v2',
  HEALTH_RECORDS: 'petcare_health_records_v2'
};

export const PetCareProvider = ({ children }) => {
  // Initialize state with localStorage or defaults
  const [pets, setPets] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.PETS);
      return saved ? JSON.parse(saved) : INITIAL_PETS;
    } catch {
      return INITIAL_PETS;
    }
  });

  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.APPOINTMENTS);
      return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
    } catch {
      return INITIAL_APPOINTMENTS;
    }
  });

  const [reminders, setReminders] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.REMINDERS);
      return saved ? JSON.parse(saved) : INITIAL_REMINDERS;
    } catch {
      return INITIAL_REMINDERS;
    }
  });

  const [healthRecords, setHealthRecords] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEYS.HEALTH_RECORDS);
      return saved ? JSON.parse(saved) : INITIAL_HEALTH_RECORDS;
    } catch {
      return INITIAL_HEALTH_RECORDS;
    }
  });

  const [clinics] = useState(INITIAL_VET_CLINICS);
  const [speciesCategories] = useState(INITIAL_SPECIES_CATEGORIES);
  const [careServices] = useState(INITIAL_SERVICES);
  const [careResources] = useState(INITIAL_CARE_RESOURCES);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.PETS, JSON.stringify(pets));
  }, [pets]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.REMINDERS, JSON.stringify(reminders));
  }, [reminders]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.HEALTH_RECORDS, JSON.stringify(healthRecords));
  }, [healthRecords]);

  // Action: Create Pet Profile (Functional Req 1)
  const addPet = (newPetData) => {
    const petId = `pet-${Date.now()}`;
    const newPet = {
      id: petId,
      name: newPetData.name || 'Unnamed Pet',
      species: newPetData.species || 'Dog',
      breed: newPetData.breed || 'Mixed Breed',
      age: parseFloat(newPetData.age) || 1,
      gender: newPetData.gender || 'Unknown',
      weight: newPetData.weight ? `${newPetData.weight} kg` : 'N/A',
      color: newPetData.color || 'Standard',
      avatar: newPetData.avatar || 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80',
      microchipId: newPetData.microchipId || `985-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
      primaryVet: newPetData.primaryVet || 'Metropolitan Veterinary Hospital (Delhi NCR)',
      allergies: newPetData.allergies ? newPetData.allergies.split(',').map(s => s.trim()) : ['None recorded'],
      preferences: newPetData.preferences ? newPetData.preferences.split(',').map(s => s.trim()) : ['Friendly, gentle temperament'],
      careRoutines: {
        diet: newPetData.dietRoutine || 'High-quality balanced formula tailored to species',
        exercise: newPetData.exerciseRoutine || 'Regular daily activity and playtime',
        medications: newPetData.medications || 'Standard monthly parasite preventative',
        grooming: newPetData.groomingRoutine || 'Regular coat brushing & hygiene checks'
      },
      vaccinations: [
        {
          id: `v-${Date.now()}-1`,
          name: newPetData.species === 'Cat' ? 'FVRCP Initial' : 'Core Rabies & DHPP',
          dateGiven: new Date().toISOString().split('T')[0],
          nextDue: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          batch: `BATCH-${Math.floor(10000 + Math.random() * 90000)}`,
          status: 'Up to Date'
        }
      ],
      notes: newPetData.notes || 'Newly registered pet profile.'
    };

    setPets(prev => [newPet, ...prev]);

    // Automatically generate a welcome reminder
    const welcomeReminder = {
      id: `rem-${Date.now()}`,
      petId: petId,
      petName: newPet.name,
      title: `Initial Wellness & Baseline Checkup for ${newPet.name}`,
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      category: 'Wellness',
      priority: 'Medium',
      completed: false,
      description: 'Schedule a meet-and-greet consultation with your chosen veterinary clinic.'
    };
    setReminders(prev => [welcomeReminder, ...prev]);

    return newPet;
  };

  // Action: Add Sample Health Record (Functional Req 3)
  const addHealthRecord = (recordData) => {
    const pet = pets.find(p => p.id === recordData.petId);
    const newRecord = {
      id: `rec-${Date.now()}`,
      petId: recordData.petId,
      petName: pet ? pet.name : recordData.petName || 'Pet',
      date: recordData.date || new Date().toISOString().split('T')[0],
      category: recordData.category || 'General Health Check',
      clinic: recordData.clinic || 'Metropolitan Veterinary Hospital & 24/7 Trauma Care',
      veterinarian: recordData.veterinarian || 'Dr. Rajesh Sharma, MVSc',
      vitalStats: {
        weight: recordData.weight ? `${recordData.weight} kg` : (pet ? pet.weight : 'Normal'),
        temperature: recordData.temperature || '101.5 °F',
        heartRate: recordData.heartRate || '90 bpm',
        respiration: recordData.respiration || '24 bpm'
      },
      diagnosisNotes: recordData.diagnosisNotes || 'Patient is active, alert, and responsive. Mucous membranes pink and moist.',
      prescriptions: recordData.prescriptionName ? [
        {
          name: recordData.prescriptionName,
          dose: recordData.prescriptionDose || '1 dose daily',
          duration: recordData.prescriptionDuration || '14 days'
        }
      ] : [],
      followUp: recordData.followUp || 'Routine follow-up in 6 months or if symptoms change.'
    };

    setHealthRecords(prev => [newRecord, ...prev]);

    // Also update pet's weight if provided
    if (recordData.weight && pet) {
      setPets(prev => prev.map(p => p.id === pet.id ? { ...p, weight: `${recordData.weight} kg` } : p));
    }

    return newRecord;
  };

  // Action: Book Demonstration Appointment (Functional Req 4)
  const bookAppointment = (bookingData) => {
    const pet = pets.find(p => p.id === bookingData.petId);
    const clinic = clinics.find(c => c.id === bookingData.clinicId);
    const bookingRef = `PET-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newAppointment = {
      id: `apt-${Date.now()}`,
      bookingRef: bookingRef,
      petId: bookingData.petId,
      petName: pet ? pet.name : 'Pet',
      clinicId: bookingData.clinicId,
      clinicName: clinic ? clinic.name : (bookingData.clinicName || 'Metro Vet Hospital'),
      veterinarian: bookingData.veterinarian || (clinic ? clinic.leadDoctor : 'Veterinary Specialist'),
      service: bookingData.service || 'Routine Consultation & Physical',
      date: bookingData.date || new Date().toISOString().split('T')[0],
      time: bookingData.time || '10:00 AM',
      status: 'Confirmed',
      notes: bookingData.notes || 'Standard booking confirmed.',
      createdAt: new Date().toISOString().split('T')[0]
    };

    setAppointments(prev => [newAppointment, ...prev]);

    // Also automatically create an associated calendar reminder
    const autoReminder = {
      id: `rem-apt-${Date.now()}`,
      petId: bookingData.petId,
      petName: pet ? pet.name : 'Pet',
      title: `Vet Appointment: ${newAppointment.service}`,
      dueDate: newAppointment.date,
      category: 'Appointment',
      priority: 'High',
      completed: false,
      description: `Visit ${newAppointment.clinicName} at ${newAppointment.time} with ${newAppointment.veterinarian}.`
    };
    setReminders(prev => [autoReminder, ...prev]);

    return newAppointment;
  };

  // Toggle Reminder completion
  const toggleReminder = (reminderId) => {
    setReminders(prev => prev.map(r => r.id === reminderId ? { ...r, completed: !r.completed } : r));
  };

  // Add Custom Reminder
  const addReminder = (remData) => {
    const pet = pets.find(p => p.id === remData.petId);
    const newRem = {
      id: `rem-${Date.now()}`,
      petId: remData.petId || (pets[0] ? pets[0].id : 'pet-1'),
      petName: pet ? pet.name : (pets[0] ? pets[0].name : 'Pet'),
      title: remData.title,
      dueDate: remData.dueDate || new Date().toISOString().split('T')[0],
      category: remData.category || 'Routine Care',
      priority: remData.priority || 'Medium',
      completed: false,
      description: remData.description || ''
    };
    setReminders(prev => [newRem, ...prev]);
  };

  // Cancel Appointment
  const cancelAppointment = (appointmentId) => {
    setAppointments(prev => prev.map(apt => apt.id === appointmentId ? { ...apt, status: 'Cancelled' } : apt));
  };

  // Reset to initial mock data
  const resetToSampleData = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.PETS);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.APPOINTMENTS);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.REMINDERS);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.HEALTH_RECORDS);
    setPets(INITIAL_PETS);
    setAppointments(INITIAL_APPOINTMENTS);
    setReminders(INITIAL_REMINDERS);
    setHealthRecords(INITIAL_HEALTH_RECORDS);
  };

  // AI Rule-Based Care Routine Engine (Task 5: Non-diagnostic suggestions)
  const generateAiCarePlan = (petId) => {
    const pet = pets.find(p => p.id === petId) || pets[0];
    if (!pet) return null;

    const petRecords = healthRecords.filter(r => r.petId === pet.id);
    const petReminders = reminders.filter(r => r.petId === pet.id);
    const petAge = pet.age || 2;
    const species = (pet.species || 'Dog').toLowerCase();

    // Determine life stage
    let lifeStage = 'Adult';
    if (species === 'dog') {
      if (petAge < 1) lifeStage = 'Puppy';
      else if (petAge >= 7) lifeStage = 'Senior';
    } else if (species === 'cat') {
      if (petAge < 1) lifeStage = 'Kitten';
      else if (petAge >= 9) lifeStage = 'Senior';
    } else if (species === 'bird') {
      if (petAge < 1) lifeStage = 'Juvenile';
      else if (petAge >= 10) lifeStage = 'Mature';
    }

    // Dynamic rule-based non-diagnostic recommendations
    const recommendations = [];

    if (lifeStage === 'Senior') {
      recommendations.push({
        type: 'Mobility & Joints',
        priority: 'High',
        icon: 'Activity',
        badge: 'Age-Tailored',
        title: 'Joint Support & Low-Impact Exercise Routine',
        detail: `As a ${lifeStage} ${pet.species}, adding glucosamine/chondroitin supplementation and replacing strenuous jumping with steady-pace sniff walks reduces osteoarthritis strain.`
      });
      recommendations.push({
        type: 'Diagnostics',
        priority: 'Medium',
        icon: 'Microscope',
        badge: 'Preventive Care',
        title: 'Bi-Annual Senior Blood Chemistry & Renal Panel',
        detail: `Senior pets benefit from screening kidney (BUN/Creatinine) and liver values every 6 months to detect subclinical metabolic shifts early.`
      });
    } else if (lifeStage === 'Puppy' || lifeStage === 'Kitten' || lifeStage === 'Juvenile') {
      recommendations.push({
        type: 'Immunity Pacing',
        priority: 'High',
        icon: 'ShieldCheck',
        badge: 'Developmental',
        title: 'Core Boosters & Socialization Windows',
        detail: `Ensure core series intervals (3 to 4 weeks apart) are strictly met before exposure to public dog parks or high-traffic animal areas.`
      });
      recommendations.push({
        type: 'Nutrition',
        priority: 'High',
        icon: 'Sparkles',
        badge: 'Growth Stage',
        title: 'Controlled Caloric Intake for Skeletal Growth',
        detail: `Ensure DHA omega fatty acids for cognitive development and strictly avoid excessive calcium excess in large-breed pups.`
      });
    } else {
      recommendations.push({
        type: 'Dental Maintenance',
        priority: 'Medium',
        icon: 'Sparkles',
        badge: 'Routine Wellness',
        title: 'Plaque Disruption & Enzymatic Chews',
        detail: `Over 80% of ${pet.species}s show gingivitis by age 3. Implementing 3x weekly enzymatic teeth cleaning or VOHC-approved chews significantly delays invasive extractions.`
      });
      recommendations.push({
        type: 'Weight & Metabolic Balance',
        priority: 'Medium',
        icon: 'Scale',
        badge: 'Metabolic',
        title: `Weight Management for Current Weight (${pet.weight})`,
        detail: `Regular 20-30 minute active play keeps cardiovascular metrics high. Periodic body condition scoring (feeling ribs without pressing hard) maintains optimal body condition.`
      });
    }

    // Check allergy-based suggestions
    if (pet.allergies && pet.allergies.length > 0 && pet.allergies[0] !== 'None recorded') {
      recommendations.push({
        type: 'Dermatology & Allergies',
        priority: 'High',
        icon: 'AlertCircle',
        badge: 'Allergy Safeguard',
        title: `Ingredient Safeguard: ${pet.allergies.join(', ')}`,
        detail: `AI Flag: Current profile lists sensitivity to ${pet.allergies.join(', ')}. Audit all training treats, chew bones, and groomer shampoos for cross-contaminants.`
      });
    }

    // Hydration rule for cats
    if (species === 'cat') {
      recommendations.push({
        type: 'Hydration & Renal Care',
        priority: 'Medium',
        icon: 'Droplets',
        badge: 'Feline Specific',
        title: 'Moisture Intake & Stainless Fountain Utilization',
        detail: 'Cats possess a low biological thirst drive. Increasing wet-food portion to 60%+ of daily calories promotes healthy urinary tract diluteness.'
      });
    }

    return {
      pet,
      lifeStage,
      loggedRecordsCount: petRecords.length,
      pendingRemindersCount: petReminders.filter(r => !r.completed).length,
      wellnessScore: lifeStage === 'Senior' ? 88 : 94,
      recommendations,
      suggestedDailyRoutine: [
        { time: '07:30 AM', activity: 'Nutritional Feeding & Fresh Hydration', tip: pet.careRoutines.diet },
        { time: '08:30 AM', activity: 'Dedicated Activity & Cognitive Stimulation', tip: pet.careRoutines.exercise },
        { time: '01:00 PM', activity: 'Rest & Safe Quiet Enrichment', tip: 'Provide safe chew puzzle or bird window perch.' },
        { time: '06:30 PM', activity: 'Evening Meal & Preventative Checks', tip: pet.careRoutines.medications },
        { time: '08:30 PM', activity: 'Grooming & Coat / Skin Inspection', tip: pet.careRoutines.grooming }
      ]
    };
  };

  return (
    <PetCareContext.Provider
      value={{
        pets,
        clinics,
        appointments,
        reminders,
        healthRecords,
        speciesCategories,
        careServices,
        careResources,
        aiData: {
          popularServices: AI_POPULAR_SERVICES,
          preferredClinics: AI_PREFERRED_CLINICS,
          appointmentPatterns: AI_APPOINTMENT_PATTERNS,
          activityMetrics: AI_ACTIVITY_METRICS
        },
        addPet,
        addHealthRecord,
        bookAppointment,
        toggleReminder,
        addReminder,
        cancelAppointment,
        resetToSampleData,
        generateAiCarePlan
      }}
    >
      {children}
    </PetCareContext.Provider>
  );
};

export const usePetCare = () => {
  const context = useContext(PetCareContext);
  if (!context) {
    throw new Error('usePetCare must be used within a PetCareProvider');
  }
  return context;
};
