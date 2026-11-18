import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  PawPrint,
  Heart,
  ShieldCheck,
  Sparkles,
  Building2,
  CalendarCheck2,
  Activity,
  ArrowRight,
  Clock,
  MapPin,
  Star,
  BookOpen,
  Info,
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  Scissors,
  Microscope,
  Ambulance,
  Dog,
  Cat,
  Bird,
  Rabbit,
  Fish
} from 'lucide-react';
import { usePetCare } from '../context/PetCareContext';
import { Modal } from '../components/Modal';

// Species icon resolver
const getSpeciesIcon = (iconName) => {
  switch (iconName) {
    case 'Dog': return Dog;
    case 'Cat': return Cat;
    case 'Bird': return Bird;
    case 'Rabbit': return Rabbit;
    case 'Fish': return Fish;
    default: return PawPrint;
  }
};

// Service icon resolver
const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'Ambulance': return Ambulance;
    case 'ShieldCheck': return ShieldCheck;
    case 'Sparkles': return Sparkles;
    case 'Activity': return Activity;
    case 'Microscope': return Microscope;
    case 'Scissors': return Scissors;
    default: return Stethoscope;
  }
};

export const Dashboard = ({ onOpenAddPetModal, onOpenBookingModal }) => {
  const { pets, clinics, appointments, reminders, speciesCategories, careServices, careResources } = usePetCare();
  const navigate = useNavigate();

  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  const [resourceFilter, setResourceFilter] = useState('All');

  // Next upcoming appointment
  const nextAppointment = appointments.find(a => a.status === 'Confirmed');
  const pendingReminders = reminders.filter(r => !r.completed);

  const filteredResources = resourceFilter === 'All'
    ? careResources
    : careResources.filter(r => r.category === resourceFilter);

  return (
    <div>
      {/* 1. Hero Banner */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="container hero-grid">
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.15)',
                padding: '0.4rem 0.9rem',
                borderRadius: '999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1.25rem',
                backdropFilter: 'blur(8px)',
                color: '#ccfbf1'
              }}
            >
              <Sparkles size={16} color="#5eead4" />
              <span>Smart Pet Care & Veterinary Ecosystem</span>
            </div>

            <h1 className="hero-title">
              Complete Health, Clinic & <span className="highlight">Care Routine</span> Hub
            </h1>

            <p className="hero-subtitle">
              Manage multi-species health records, schedule clinic appointments with accredited veterinarians, and receive intelligent, non-diagnostic AI routine guidance for your beloved companions.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                className="btn btn-lg"
                style={{ background: '#5eead4', color: '#042f2e', fontWeight: 700 }}
                onClick={onOpenBookingModal}
              >
                <CalendarCheck2 size={20} />
                <span>Book Clinic Visit</span>
              </button>

              <button
                className="btn btn-lg"
                style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
                onClick={onOpenAddPetModal}
              >
                <PawPrint size={20} />
                <span>Register Pet Profile</span>
              </button>
            </div>
          </div>

          {/* Quick Active Status Card */}
          <div className="hero-stats-card">
            <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Activity size={20} color="#5eead4" />
              <span>Household Care Summary</span>
            </h3>

            <div className="hero-stats-grid">
              <div className="hero-stat-item">
                <div className="hero-stat-value">{pets.length}</div>
                <div className="hero-stat-label">Registered Pets</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-value">{clinics.length}</div>
                <div className="hero-stat-label">Partner Clinics</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-value" style={{ color: '#fde047' }}>
                  {pendingReminders.length}
                </div>
                <div className="hero-stat-label">Due Reminders</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-value" style={{ color: '#a7f3d0' }}>
                  {appointments.filter(a => a.status === 'Confirmed').length}
                </div>
                <div className="hero-stat-label">Active Bookings</div>
              </div>
            </div>

            {nextAppointment && (
              <div
                style={{
                  marginTop: '1.25rem',
                  padding: '1rem',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  fontSize: '0.85rem'
                }}
              >
                <div style={{ color: '#a7f3d0', fontWeight: 700, marginBottom: '0.25rem' }}>
                  Next Upcoming Appointment:
                </div>
                <div style={{ color: 'white', fontWeight: 600 }}>
                  {nextAppointment.petName} &bull; {nextAppointment.service}
                </div>
                <div style={{ color: '#ccfbf1', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.25rem' }}>
                  <Clock size={14} /> {nextAppointment.date} at {nextAppointment.time} ({nextAppointment.clinicName})
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="container">
        {/* 2. Species Categories Explorer */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="page-header-row" style={{ marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>Species Care Categories</h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Select a companion species to review tailored habitat requirements, lifespans, and daily care routines.
              </p>
            </div>
            <Link to="/pets" className="btn btn-secondary btn-sm">
              <span>View All Pet Profiles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {speciesCategories.map((cat) => {
              const Icon = getSpeciesIcon(cat.icon);
              return (
                <div
                  key={cat.id}
                  className="species-card card-interactive"
                  onClick={() => setSelectedSpecies(cat)}
                >
                  <div className="species-image-wrap">
                    <img src={cat.image} alt={cat.name} />
                    <span className="species-badge-top">{cat.averageLifespan}</span>
                  </div>
                  <div className="species-body">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div
                        style={{
                          background: 'var(--primary-light)',
                          color: 'var(--primary)',
                          padding: '6px',
                          borderRadius: '8px'
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <h3 style={{ fontSize: '1.15rem' }}>{cat.label}</h3>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', flex: 1 }}>
                      {cat.description}
                    </p>
                    <button
                      className="btn btn-outline btn-sm"
                      style={{ width: '100%' }}
                    >
                      <Info size={14} />
                      <span>Explore Care Guide</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Veterinary Service Highlights */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="page-header-row" style={{ marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>Veterinary Service Highlights</h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Comprehensive medical, diagnostic, and wellness care solutions across our clinic network.
              </p>
            </div>
            <Link to="/clinics" className="btn btn-secondary btn-sm">
              <span>Find Local Vet Clinics</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {careServices.map((srv) => {
              const Icon = getServiceIcon(srv.icon);
              return (
                <div key={srv.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div
                      style={{
                        background: srv.bg,
                        color: srv.color,
                        padding: '12px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem' }}>{srv.title}</h4>
                      <span className="badge badge-teal" style={{ fontSize: '0.725rem' }}>
                        {srv.availability}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', flex: 1 }}>
                    {srv.description}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--border-color)',
                      fontSize: '0.85rem'
                    }}
                  >
                    <span style={{ color: 'var(--text-light)', fontWeight: 500 }}>Est. Consultation:</span>
                    <strong style={{ color: 'var(--primary)' }}>{srv.priceEstimate}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Featured Accredited Clinics */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="page-header-row" style={{ marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>Accredited Veterinary Clinics</h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Certified veterinary practices with modern diagnostics, licensed specialists, and verified booking slots.
              </p>
            </div>
            <Link to="/clinics" className="btn btn-primary btn-sm">
              <span>Browse Full Directory ({clinics.length})</span>
            </Link>
          </div>

          <div className="grid-2">
            {clinics.slice(0, 2).map((clinic) => (
              <div key={clinic.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <img
                    src={clinic.image}
                    alt={clinic.name}
                    style={{
                      width: '120px',
                      height: '110px',
                      borderRadius: '14px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span className="badge badge-teal">{clinic.badge}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b' }}>
                        <Star size={14} fill="#f59e0b" />
                        <span>{clinic.rating}</span>
                        <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>({clinic.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.35rem' }}>{clinic.name}</h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <MapPin size={14} color="var(--primary)" />
                      <span>{clinic.address}</span>
                    </div>

                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      Lead: <strong>{clinic.leadDoctor}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {clinic.specialties.map(spec => (
                    <span key={spec} className="badge badge-info">{spec}</span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-color)'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Consultation Fee: </span>
                    <strong style={{ fontSize: '1.1rem', color: 'var(--text-main)' }}>₹{clinic.consultationFee}</strong>
                  </div>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      navigate(`/clinics?clinicId=${clinic.id}`);
                    }}
                  >
                    <CalendarCheck2 size={16} />
                    <span>View Slots & Book</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Care Resources & Articles */}
        <section style={{ marginBottom: '3rem' }}>
          <div className="page-header-row" style={{ marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '0.25rem' }}>Veterinary Care Resources</h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Evidence-based articles on nutrition, emergency response, toxicology, and preventive fitness.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['All', 'Preventive Health', 'Emergency & Safety', 'Dental Care', 'Routine & Fitness'].map((category) => (
                <button
                  key={category}
                  className={`btn btn-sm ${resourceFilter === category ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setResourceFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-2">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="card card-interactive"
                onClick={() => setSelectedResource(res)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="badge badge-teal">{res.category}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{res.readTime}</span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>{res.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {res.summary}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>By {res.author}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)', fontWeight: 600 }}>
                    <BookOpen size={15} />
                    <span>Read Article</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Species Care Guide Modal */}
      {selectedSpecies && (
        <Modal
          isOpen={!!selectedSpecies}
          onClose={() => setSelectedSpecies(null)}
          title={`${selectedSpecies.label} Care & Wellness Guide`}
          maxWidth="700px"
          footer={
            <button className="btn btn-secondary" onClick={() => setSelectedSpecies(null)}>
              Close Guide
            </button>
          }
        >
          <div>
            <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem', alignItems: 'center' }}>
              <img
                src={selectedSpecies.image}
                alt={selectedSpecies.label}
                style={{ width: '120px', height: '120px', borderRadius: '16px', objectFit: 'cover' }}
              />
              <div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>{selectedSpecies.name}</h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  <span className="badge badge-teal">Lifespan: {selectedSpecies.averageLifespan}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {selectedSpecies.description}
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h5 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Key Biological Needs</h5>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.5rem' }}>
                {selectedSpecies.keyNeeds.map((need, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', background: 'var(--bg-main)', padding: '0.5rem 0.75rem', borderRadius: '8px' }}>
                    <CheckCircle2 size={16} color="var(--primary)" />
                    <span>{need}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Recommended Daily Care Routine</h5>
              <ol style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {selectedSpecies.routineChecklist.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </Modal>
      )}

      {/* Resource Full Reader Modal */}
      {selectedResource && (
        <Modal
          isOpen={!!selectedResource}
          onClose={() => setSelectedResource(null)}
          title={selectedResource.title}
          maxWidth="720px"
          footer={
            <button className="btn btn-secondary" onClick={() => setSelectedResource(null)}>
              Done Reading
            </button>
          }
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span className="badge badge-teal">{selectedResource.category}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{selectedResource.readTime}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>Author: <strong>{selectedResource.author}</strong></span>
            </div>

            <div
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-main)',
                background: 'var(--bg-main)',
                padding: '1.25rem',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                borderLeft: '4px solid var(--primary)'
              }}
            >
              {selectedResource.content}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {selectedResource.tags.map(tag => (
                <span key={tag} className="badge badge-info">#{tag}</span>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
