import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { PetCareProvider, usePetCare } from './context/PetCareContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

// Pages
import { Dashboard } from './pages/Dashboard';
import { VetDirectory } from './pages/VetDirectory';
import { PetProfiles } from './pages/PetProfiles';
import { Appointments } from './pages/Appointments';
import { AIInsights } from './pages/AIInsights';

// Icons
import {
  CalendarCheck2,
  PawPrint,
  FileText,
  CheckCircle,
  Clock,
  Sparkles,
  Heart
} from 'lucide-react';

function AppContent() {
  const { pets, clinics, addPet, addHealthRecord, bookAppointment } = usePetCare();
  const navigate = useNavigate();

  // Modals state
  const [isAddPetOpen, setIsAddPetOpen] = useState(false);
  const [isAddRecordOpen, setIsAddRecordOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccessModal, setBookingSuccessModal] = useState(null);

  // Prefill states
  const [recordTargetPetId, setRecordTargetPetId] = useState(pets[0] ? pets[0].id : '');
  const [bookingClinicPrefill, setBookingClinicPrefill] = useState(null);

  // 1. New Pet Form State (Functional Req 1)
  const [petForm, setPetForm] = useState({
    name: '',
    species: 'Dog',
    breed: '',
    age: '2',
    gender: 'Female',
    weight: '12',
    color: 'Brown',
    avatar: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80',
    microchipId: '',
    allergies: '',
    preferences: '',
    dietRoutine: 'Balanced high-protein kibble twice daily',
    exerciseRoutine: '45 mins walking and play',
    medications: 'Monthly flea & tick preventative chew',
    groomingRoutine: 'Weekly brushing',
    notes: ''
  });

  // 2. Health Record Form State (Functional Req 3)
  const [recordForm, setRecordForm] = useState({
    petId: '',
    date: new Date().toISOString().split('T')[0],
    category: 'Routine Physical Exam',
    clinic: 'Metropolitan Veterinary Hospital',
    veterinarian: 'Dr. Sarah Mitchell',
    weight: '15',
    temperature: '101.5 °F',
    heartRate: '92 bpm',
    respiration: '24 bpm',
    diagnosisNotes: 'Patient appears bright, alert, and responsive. Good muscle tone, clear eyes and ears.',
    prescriptionName: '',
    prescriptionDose: '1 chew daily with food',
    prescriptionDuration: '14 days',
    followUp: 'Annual routine booster or if appetite changes.'
  });

  // 3. Booking Form State (Functional Req 4)
  const [bookingForm, setBookingForm] = useState({
    petId: '',
    clinicId: '',
    veterinarian: '',
    service: 'Core Vaccination & Wellness Check',
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    time: '10:30 AM',
    notes: 'Routine checkup and immunization update.'
  });

  // Handle Create Pet Submit
  const handleCreatePetSubmit = (e) => {
    e.preventDefault();
    if (!petForm.name) return;
    const created = addPet(petForm);
    setIsAddPetOpen(false);
    // Reset form
    setPetForm({
      name: '',
      species: 'Dog',
      breed: '',
      age: '2',
      gender: 'Female',
      weight: '12',
      color: 'Brown',
      avatar: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80',
      microchipId: '',
      allergies: '',
      preferences: '',
      dietRoutine: 'Balanced high-protein kibble twice daily',
      exerciseRoutine: '45 mins walking and play',
      medications: 'Monthly flea & tick preventative chew',
      groomingRoutine: 'Weekly brushing',
      notes: ''
    });
    navigate('/pets');
  };

  // Handle Add Health Record Submit
  const handleAddRecordSubmit = (e) => {
    e.preventDefault();
    const targetPetId = recordForm.petId || (pets[0] ? pets[0].id : '');
    addHealthRecord({
      ...recordForm,
      petId: targetPetId
    });
    setIsAddRecordOpen(false);
    navigate('/pets');
  };

  // Handle Book Appointment Submit
  const handleBookAppointmentSubmit = (e) => {
    e.preventDefault();
    const chosenPetId = bookingForm.petId || (pets[0] ? pets[0].id : '');
    const chosenClinicId = bookingForm.clinicId || (clinics[0] ? clinics[0].id : '');
    const chosenClinic = clinics.find(c => c.id === chosenClinicId) || clinics[0];

    const booked = bookAppointment({
      ...bookingForm,
      petId: chosenPetId,
      clinicId: chosenClinicId,
      clinicName: chosenClinic ? chosenClinic.name : 'Metro Vet Hospital',
      veterinarian: bookingForm.veterinarian || (chosenClinic ? chosenClinic.leadDoctor : 'Dr. Sarah Mitchell')
    });

    setIsBookingOpen(false);
    setBookingSuccessModal(booked);
  };

  // Triggers
  const openBookingWithClinic = (clinicPrefill) => {
    setBookingClinicPrefill(clinicPrefill);
    setBookingForm(prev => ({
      ...prev,
      clinicId: clinicPrefill.clinicId || clinics[0]?.id || '',
      veterinarian: clinicPrefill.veterinarian || '',
      time: clinicPrefill.time || '10:30 AM'
    }));
    setIsBookingOpen(true);
  };

  const openAddRecordForPet = (petId) => {
    const id = petId || (pets[0] ? pets[0].id : '');
    setRecordTargetPetId(id);
    setRecordForm(prev => ({ ...prev, petId: id }));
    setIsAddRecordOpen(true);
  };

  return (
    <div className="app-container">
      <Navbar
        onOpenAddPetModal={() => setIsAddPetOpen(true)}
        onOpenBookingModal={() => {
          setBookingClinicPrefill(null);
          setIsBookingOpen(true);
        }}
      />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                onOpenAddPetModal={() => setIsAddPetOpen(true)}
                onOpenBookingModal={() => setIsBookingOpen(true)}
              />
            }
          />
          <Route
            path="/clinics"
            element={
              <VetDirectory
                onOpenBookingModalWithClinic={openBookingWithClinic}
              />
            }
          />
          <Route
            path="/pets"
            element={
              <PetProfiles
                onOpenAddPetModal={() => setIsAddPetOpen(true)}
                onOpenAddRecordModal={openAddRecordForPet}
              />
            }
          />
          <Route
            path="/appointments"
            element={
              <Appointments
                onOpenBookingModal={() => setIsBookingOpen(true)}
              />
            }
          />
          <Route
            path="/ai-insights"
            element={<AIInsights />}
          />
        </Routes>
      </main>

      <Footer />

      {/* MODAL 1: CREATE PET PROFILE (Functional Req 1) */}
      <Modal
        isOpen={isAddPetOpen}
        onClose={() => setIsAddPetOpen(false)}
        title="Create New Pet Profile"
        maxWidth="680px"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setIsAddPetOpen(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleCreatePetSubmit}>
              <PawPrint size={16} />
              <span>Save Pet Profile</span>
            </button>
          </>
        }
      >
        <form onSubmit={handleCreatePetSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Pet Name *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Copper, Bella, Ziggy"
                value={petForm.name}
                onChange={(e) => setPetForm({ ...petForm, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Species *</label>
              <select
                className="form-select"
                value={petForm.species}
                onChange={(e) => setPetForm({ ...petForm, species: e.target.value })}
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Small Mammal">Small Mammal / Rabbit</option>
                <option value="Reptile">Reptile / Aquatic</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Breed</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Golden Retriever, Siamese"
                value={petForm.breed}
                onChange={(e) => setPetForm({ ...petForm, breed: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Age (Years)</label>
              <input
                type="number"
                step="0.5"
                min="0.1"
                className="form-input"
                value={petForm.age}
                onChange={(e) => setPetForm({ ...petForm, age: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                value={petForm.gender}
                onChange={(e) => setPetForm({ ...petForm, gender: e.target.value })}
              >
                <option value="Female">Female</option>
                <option value="Female (Spayed)">Female (Spayed)</option>
                <option value="Male">Male</option>
                <option value="Male (Neutered)">Male (Neutered)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Weight (kg)</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. 14.5"
                value={petForm.weight}
                onChange={(e) => setPetForm({ ...petForm, weight: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Photo Avatar URL</label>
            <input
              type="url"
              className="form-input"
              value={petForm.avatar}
              onChange={(e) => setPetForm({ ...petForm, avatar: e.target.value })}
            />
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem', fontSize: '0.75rem', color: 'var(--text-light)' }}>
              <span>Quick Presets:</span>
              <button
                type="button"
                style={{ color: 'var(--primary)', textDecoration: 'underline' }}
                onClick={() => setPetForm({ ...petForm, avatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80' })}
              >
                Golden
              </button>
              <button
                type="button"
                style={{ color: 'var(--primary)', textDecoration: 'underline' }}
                onClick={() => setPetForm({ ...petForm, avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80' })}
              >
                Cat
              </button>
              <button
                type="button"
                style={{ color: 'var(--primary)', textDecoration: 'underline' }}
                onClick={() => setPetForm({ ...petForm, avatar: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=400&q=80' })}
              >
                Rabbit
              </button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Known Allergies (comma-separated)</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Chicken, Grass Pollen, Beef"
                value={petForm.allergies}
                onChange={(e) => setPetForm({ ...petForm, allergies: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Preferences / Habits (comma-separated)</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Loves tennis balls, Window hammock"
                value={petForm.preferences}
                onChange={(e) => setPetForm({ ...petForm, preferences: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Care Routine: Diet & Feeding</label>
            <input
              type="text"
              className="form-input"
              value={petForm.dietRoutine}
              onChange={(e) => setPetForm({ ...petForm, dietRoutine: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Care Routine: Exercise & Play</label>
            <input
              type="text"
              className="form-input"
              value={petForm.exerciseRoutine}
              onChange={(e) => setPetForm({ ...petForm, exerciseRoutine: e.target.value })}
            />
          </div>
        </form>
      </Modal>

      {/* MODAL 2: ADD SAMPLE HEALTH RECORD (Functional Req 3) */}
      <Modal
        isOpen={isAddRecordOpen}
        onClose={() => setIsAddRecordOpen(false)}
        title="Log Sample Clinical Health Record"
        maxWidth="680px"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setIsAddRecordOpen(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleAddRecordSubmit}>
              <FileText size={16} />
              <span>Record Health Entry</span>
            </button>
          </>
        }
      >
        <form onSubmit={handleAddRecordSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Companion Patient *</label>
              <select
                className="form-select"
                value={recordForm.petId || recordTargetPetId}
                onChange={(e) => setRecordForm({ ...recordForm, petId: e.target.value })}
              >
                {pets.map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.species} &bull; {p.breed})</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Examination Date</label>
              <input
                type="date"
                className="form-input"
                value={recordForm.date}
                onChange={(e) => setRecordForm({ ...recordForm, date: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Visit Category</label>
              <select
                className="form-select"
                value={recordForm.category}
                onChange={(e) => setRecordForm({ ...recordForm, category: e.target.value })}
              >
                <option value="Routine Physical Exam">Routine Physical Exam</option>
                <option value="Core Vaccine Booster">Core Vaccine Booster</option>
                <option value="Dental Scaling & Polish">Dental Scaling & Polish</option>
                <option value="Dermatology / Skin Check">Dermatology / Skin Check</option>
                <option value="Emergency Stabilization">Emergency Stabilization</option>
                <option value="Urinary Health Screen">Urinary Health Screen</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Attending Facility</label>
              <select
                className="form-select"
                value={recordForm.clinic}
                onChange={(e) => setRecordForm({ ...recordForm, clinic: e.target.value })}
              >
                {clinics.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Vitals row */}
          <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-main)', borderRadius: '12px', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Recorded Vital Signs
            </div>
            <div className="form-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
              <div>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Weight (kg)</label>
                <input
                  type="text"
                  className="form-input"
                  value={recordForm.weight}
                  onChange={(e) => setRecordForm({ ...recordForm, weight: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Body Temp</label>
                <input
                  type="text"
                  className="form-input"
                  value={recordForm.temperature}
                  onChange={(e) => setRecordForm({ ...recordForm, temperature: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Heart Rate</label>
                <input
                  type="text"
                  className="form-input"
                  value={recordForm.heartRate}
                  onChange={(e) => setRecordForm({ ...recordForm, heartRate: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label" style={{ fontSize: '0.75rem' }}>Respiration</label>
                <input
                  type="text"
                  className="form-input"
                  value={recordForm.respiration}
                  onChange={(e) => setRecordForm({ ...recordForm, respiration: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Clinical Examination & Diagnostic Findings *</label>
            <textarea
              className="form-textarea"
              value={recordForm.diagnosisNotes}
              onChange={(e) => setRecordForm({ ...recordForm, diagnosisNotes: e.target.value })}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Prescribed Medicine (Optional)</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Simparica Trio, Amoxicillin drops"
                value={recordForm.prescriptionName}
                onChange={(e) => setRecordForm({ ...recordForm, prescriptionName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Follow-up Recommendation</label>
              <input
                type="text"
                className="form-input"
                value={recordForm.followUp}
                onChange={(e) => setRecordForm({ ...recordForm, followUp: e.target.value })}
              />
            </div>
          </div>
        </form>
      </Modal>

      {/* MODAL 3: BOOK DEMONSTRATION APPOINTMENT (Functional Req 4) */}
      <Modal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Book Demonstration Appointment"
        maxWidth="640px"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setIsBookingOpen(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleBookAppointmentSubmit}>
              <CalendarCheck2 size={16} />
              <span>Confirm Appointment</span>
            </button>
          </>
        }
      >
        <form onSubmit={handleBookAppointmentSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Patient Pet *</label>
              <select
                className="form-select"
                value={bookingForm.petId || (pets[0] ? pets[0].id : '')}
                onChange={(e) => setBookingForm({ ...bookingForm, petId: e.target.value })}
              >
                {pets.map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.species} &bull; {p.breed})</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Veterinary Clinic *</label>
              <select
                className="form-select"
                value={bookingForm.clinicId || (clinics[0] ? clinics[0].id : '')}
                onChange={(e) => {
                  const cl = clinics.find(c => c.id === e.target.value);
                  setBookingForm({
                    ...bookingForm,
                    clinicId: e.target.value,
                    veterinarian: cl ? cl.leadDoctor : ''
                  });
                }}
              >
                {clinics.map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.city})</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Service Type</label>
            <select
              className="form-select"
              value={bookingForm.service}
              onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
            >
              <option value="Core Vaccination & Wellness Check">Core Vaccination & Wellness Check</option>
              <option value="Comprehensive Dental Scale & Polish">Comprehensive Dental Scale & Polish</option>
              <option value="Emergency Stabilization & Triage">Emergency Stabilization & Triage</option>
              <option value="Dermatology / Skin Allergy Consultation">Dermatology / Skin Allergy Consultation</option>
              <option value="Pre-surgical Assessment">Pre-surgical Assessment</option>
              <option value="Therapeutic Grooming & Coat Hygiene">Therapeutic Grooming & Coat Hygiene</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Appointment Date</label>
              <input
                type="date"
                className="form-input"
                value={bookingForm.date}
                onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Available Time Slot</label>
              <select
                className="form-select"
                value={bookingForm.time}
                onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
              >
                <option value="08:30 AM">08:30 AM (Early Bird)</option>
                <option value="09:15 AM">09:15 AM</option>
                <option value="10:30 AM">10:30 AM (Popular Slot)</option>
                <option value="11:45 AM">11:45 AM</option>
                <option value="01:15 PM">01:15 PM</option>
                <option value="02:30 PM">02:30 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:30 PM">05:30 PM</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Visit Notes / Reason</label>
            <textarea
              className="form-textarea"
              placeholder="Describe symptoms, preventative needs, or specific questions for the doctor..."
              value={bookingForm.notes}
              onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
            />
          </div>
        </form>
      </Modal>

      {/* BOOKING CONFIRMATION SUCCESS MODAL */}
      {bookingSuccessModal && (
        <Modal
          isOpen={!!bookingSuccessModal}
          onClose={() => setBookingSuccessModal(null)}
          title="Appointment Confirmed!"
          maxWidth="560px"
          footer={
            <div style={{ display: 'flex', gap: '0.75rem', width: '100%', justifyContent: 'flex-end' }}>
              <button
                className="btn btn-secondary"
                onClick={() => setBookingSuccessModal(null)}
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setBookingSuccessModal(null);
                  navigate('/appointments');
                }}
              >
                View in Appointments
              </button>
            </div>
          }
        >
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#ecfdf5',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}
            >
              <CheckCircle size={36} />
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
              Booking #{bookingSuccessModal.bookingRef}
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Your demonstration veterinary appointment has been saved to your active schedule and synchronized to localStorage.
            </p>

            <div style={{ textAlign: 'left', background: 'var(--bg-main)', padding: '1.25rem', borderRadius: '14px', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div><strong>Companion Patient:</strong> {bookingSuccessModal.petName}</div>
              <div><strong>Facility:</strong> {bookingSuccessModal.clinicName}</div>
              <div><strong>Doctor:</strong> {bookingSuccessModal.veterinarian}</div>
              <div><strong>Service:</strong> {bookingSuccessModal.service}</div>
              <div><strong>Scheduled Date & Time:</strong> {bookingSuccessModal.date} at {bookingSuccessModal.time}</div>
            </div>

            <div style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <Clock size={16} />
              <span>An automated calendar reminder has also been added to your care tracking system.</span>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PetCareProvider>
        <AppContent />
      </PetCareProvider>
    </BrowserRouter>
  );
}
