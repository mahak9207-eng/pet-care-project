import React, { useState } from 'react';
import {
  PawPrint,
  PlusCircle,
  ShieldCheck,
  Activity,
  Heart,
  Calendar,
  AlertCircle,
  FileText,
  Clock,
  CheckCircle2,
  Syringe,
  Pill,
  Sparkles,
  ChevronRight,
  Filter
} from 'lucide-react';
import { usePetCare } from '../context/PetCareContext';
import { Modal } from '../components/Modal';

export const PetProfiles = ({ onOpenAddPetModal, onOpenAddRecordModal }) => {
  const { pets, healthRecords } = usePetCare();
  const [selectedSpeciesFilter, setSelectedSpeciesFilter] = useState('All');
  const [activePetId, setActivePetId] = useState(pets[0] ? pets[0].id : null);

  // Filtered pet list
  const filteredPets = selectedSpeciesFilter === 'All'
    ? pets
    : pets.filter(p => p.species.toLowerCase() === selectedSpeciesFilter.toLowerCase());

  // Currently active selected pet
  const activePet = pets.find(p => p.id === activePetId) || filteredPets[0] || pets[0];
  const activePetRecords = healthRecords.filter(r => r.petId === (activePet ? activePet.id : null));

  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              <PawPrint size={18} />
              <span>Pet Directory & Health Records</span>
            </div>
            <h1 className="page-title">Pet Profiles, Routines & Vaccinations</h1>
            <p className="page-subtitle">
              Comprehensive medical identity cards, active care routines, official vaccination-history mockups, and logged clinical exam records.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              className="btn btn-secondary"
              onClick={() => onOpenAddRecordModal(activePet ? activePet.id : null)}
            >
              <FileText size={18} />
              <span>Add Health Record</span>
            </button>

            <button
              className="btn btn-primary"
              onClick={onOpenAddPetModal}
            >
              <PlusCircle size={18} />
              <span>Create Pet Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Species Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div className="tabs-nav" style={{ marginBottom: 0, borderBottom: 'none' }}>
          {['All', 'Dog', 'Cat', 'Bird'].map((species) => (
            <button
              key={species}
              className={`tab-btn ${selectedSpeciesFilter === species ? 'active' : ''}`}
              onClick={() => {
                setSelectedSpeciesFilter(species);
                const firstMatching = pets.find(p => species === 'All' || p.species.toLowerCase() === species.toLowerCase());
                if (firstMatching) setActivePetId(firstMatching.id);
              }}
            >
              <span>{species === 'All' ? 'All Pets' : `${species}s`}</span>
            </button>
          ))}
        </div>

        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Showing {filteredPets.length} of {pets.length} companions
        </span>
      </div>

      {/* Main Content Layout: Pet Select Sidebar + Detailed Profile View */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2rem', alignItems: 'start' }}>
        {/* Left: Pet Selection List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filteredPets.map((pet) => {
            const isSelected = activePet && activePet.id === pet.id;
            return (
              <div
                key={pet.id}
                className={`card card-interactive ${isSelected ? 'selected-pet-card' : ''}`}
                style={{
                  padding: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                  borderColor: isSelected ? 'var(--primary)' : 'var(--border-color)',
                  background: isSelected ? 'var(--primary-light)' : 'white',
                  boxShadow: isSelected ? '0 4px 12px rgba(13, 148, 136, 0.15)' : 'var(--shadow-sm)'
                }}
                onClick={() => setActivePetId(pet.id)}
              >
                <img
                  src={pet.avatar}
                  alt={pet.name}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: `2px solid ${isSelected ? 'var(--primary)' : '#e2e8f0'}`
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{pet.name}</h4>
                    <span className="badge badge-teal" style={{ fontSize: '0.7rem' }}>{pet.species}</span>
                  </div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {pet.breed} &bull; {pet.age} yrs
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '2px' }}>
                    Weight: {pet.weight}
                  </div>
                </div>
                <ChevronRight size={18} color={isSelected ? 'var(--primary)' : '#cbd5e1'} />
              </div>
            );
          })}

          <button
            className="btn btn-outline"
            style={{ width: '100%', marginTop: '0.5rem', borderStyle: 'dashed' }}
            onClick={onOpenAddPetModal}
          >
            <PlusCircle size={16} />
            <span>Add Another Pet</span>
          </button>
        </div>

        {/* Right: Selected Pet Detailed Profile */}
        {activePet ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Identity Card */}
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.5rem' }}>
                <img
                  src={activePet.avatar}
                  alt={activePet.name}
                  style={{
                    width: '110px',
                    height: '110px',
                    borderRadius: '24px',
                    objectFit: 'cover',
                    boxShadow: 'var(--shadow-md)'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                    <h2 style={{ fontSize: '1.85rem' }}>{activePet.name}</h2>
                    <span className="badge badge-teal">{activePet.species}</span>
                    <span className="badge badge-info">{activePet.gender}</span>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    <strong>Breed:</strong> {activePet.breed} &bull; <strong>Age:</strong> {activePet.age} Years &bull; <strong>Weight:</strong> {activePet.weight}
                  </p>

                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                    <span>Microchip ID: <strong style={{ color: 'var(--text-main)' }}>{activePet.microchipId}</strong></span>
                    <span>Primary Vet: <strong style={{ color: 'var(--text-main)' }}>{activePet.primaryVet}</strong></span>
                  </div>
                </div>
              </div>

              {/* Badges for Allergies & Preferences */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--danger)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <AlertCircle size={14} />
                    <span>Known Allergies / Sensitivities</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {activePet.allergies.map((all, i) => (
                      <span key={i} className="badge badge-danger">{all}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Heart size={14} />
                    <span>Behavioral Preferences</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {activePet.preferences.map((pref, i) => (
                      <span key={i} className="badge badge-teal">{pref}</span>
                    ))}
                  </div>
                </div>
              </div>

              {activePet.notes && (
                <div style={{ marginTop: '1.25rem', padding: '0.85rem 1rem', background: 'var(--bg-main)', borderRadius: '10px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <strong>Notes:</strong> {activePet.notes}
                </div>
              )}
            </div>

            {/* Care Routines Grid */}
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={20} color="var(--primary)" />
                <span>Active Daily Care Routines</span>
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-main)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Diet & Feeding Schedule
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {activePet.careRoutines.diet}
                  </p>
                </div>

                <div style={{ padding: '1rem', background: 'var(--bg-main)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Physical Exercise & Stimulation
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {activePet.careRoutines.exercise}
                  </p>
                </div>

                <div style={{ padding: '1rem', background: 'var(--bg-main)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Medication & Parasite Control
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {activePet.careRoutines.medications}
                  </p>
                </div>

                <div style={{ padding: '1rem', background: 'var(--bg-main)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-light)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Coat & Hygiene Grooming
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {activePet.careRoutines.grooming}
                  </p>
                </div>
              </div>
            </div>

            {/* Vaccination History Mockups */}
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Syringe size={20} color="var(--primary)" />
                  <span>Vaccination History & Status</span>
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Certified electronic immunization ledger
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {activePet.vaccinations.map((vac) => {
                  const isDue = vac.status === 'Due Soon' || vac.status === 'Overdue';
                  return (
                    <div
                      key={vac.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem 1.25rem',
                        background: 'var(--bg-main)',
                        borderRadius: '12px',
                        flexWrap: 'wrap',
                        gap: '0.75rem'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <strong style={{ fontSize: '0.975rem' }}>{vac.name}</strong>
                          <span className={`badge ${vac.status === 'Up to Date' ? 'badge-success' : 'badge-warning'}`}>
                            {vac.status}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '2px' }}>
                          Batch: {vac.batch}
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
                        <div>
                          <span style={{ color: 'var(--text-light)' }}>Administered: </span>
                          <strong>{vac.dateGiven}</strong>
                        </div>
                        <div>
                          <span style={{ color: 'var(--text-light)' }}>Next Due: </span>
                          <strong style={{ color: isDue ? '#b45309' : 'var(--text-main)' }}>{vac.nextDue}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Health Logs & Clinical Exam Summaries */}
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={20} color="var(--primary)" />
                  <span>Clinical Exam Summaries & Health Records ({activePetRecords.length})</span>
                </h3>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => onOpenAddRecordModal(activePet.id)}
                >
                  <PlusCircle size={15} />
                  <span>Log New Health Record</span>
                </button>
              </div>

              {activePetRecords.length === 0 ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  <p>No medical visit records logged yet for {activePet.name}.</p>
                  <button
                    className="btn btn-outline btn-sm"
                    style={{ marginTop: '0.75rem' }}
                    onClick={() => onOpenAddRecordModal(activePet.id)}
                  >
                    Add Sample Health Record
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {activePetRecords.map((rec) => (
                    <div
                      key={rec.id}
                      style={{
                        padding: '1.25rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        background: '#ffffff'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <div>
                          <span className="badge badge-teal" style={{ marginRight: '0.5rem' }}>{rec.category}</span>
                          <strong style={{ fontSize: '1rem' }}>{rec.clinic}</strong> &bull; <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{rec.veterinarian}</span>
                        </div>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Calendar size={14} /> {rec.date}
                        </span>
                      </div>

                      {/* Vitals */}
                      <div style={{ display: 'flex', gap: '1.25rem', padding: '0.6rem 0.9rem', background: 'var(--bg-main)', borderRadius: '8px', fontSize: '0.825rem', color: 'var(--text-muted)', margin: '0.75rem 0', flexWrap: 'wrap' }}>
                        <span>Weight: <strong>{rec.vitalStats.weight}</strong></span>
                        <span>Temp: <strong>{rec.vitalStats.temperature}</strong></span>
                        <span>Heart Rate: <strong>{rec.vitalStats.heartRate}</strong></span>
                        <span>Respiration: <strong>{rec.vitalStats.respiration}</strong></span>
                      </div>

                      <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                        {rec.diagnosisNotes}
                      </p>

                      {rec.prescriptions && rec.prescriptions.length > 0 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--primary-hover)', background: 'var(--primary-light)', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
                          <Pill size={15} />
                          <span>Prescription: <strong>{rec.prescriptions[0].name}</strong> ({rec.prescriptions[0].dose}, {rec.prescriptions[0].duration})</span>
                        </div>
                      )}

                      {rec.followUp && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: '0.5rem' }}>
                          Follow-up directive: {rec.followUp}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
            <p>No pets found. Create your first pet profile to get started!</p>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={onOpenAddPetModal}>
              Create Pet Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
