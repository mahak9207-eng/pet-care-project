import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Building2,
  Search,
  Filter,
  MapPin,
  Star,
  Clock,
  Phone,
  Mail,
  CalendarCheck2,
  CheckCircle,
  Stethoscope,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { usePetCare } from '../context/PetCareContext';

export const VetDirectory = ({ onOpenBookingModalWithClinic }) => {
  const { clinics } = usePetCare();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [activeSlotClinic, setActiveSlotClinic] = useState(null);

  // Extract all distinct specialties and cities
  const allSpecialties = useMemo(() => {
    const set = new Set();
    clinics.forEach(c => c.specialties.forEach(s => set.add(s)));
    return ['All', ...Array.from(set)];
  }, [clinics]);

  const allCities = useMemo(() => {
    const set = new Set();
    clinics.forEach(c => set.add(c.city));
    return ['All', ...Array.from(set)];
  }, [clinics]);

  // Filter clinics
  const filteredClinics = useMemo(() => {
    return clinics.filter(clinic => {
      const matchesSearch =
        clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.leadDoctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesSpecialty =
        selectedSpecialty === 'All' || clinic.specialties.includes(selectedSpecialty);

      const matchesCity =
        selectedCity === 'All' || clinic.city === selectedCity;

      return matchesSearch && matchesSpecialty && matchesCity;
    });
  }, [clinics, searchTerm, selectedSpecialty, selectedCity]);

  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      {/* Header */}
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              <Building2 size={18} />
              <span>Veterinary Care Directory</span>
            </div>
            <h1 className="page-title">Find & Filter Veterinary Clinics</h1>
            <p className="page-subtitle">
              Browse accredited partner veterinary hospitals, filter by medical specialty and geographic location, and instantly secure open consultation slots.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="filter-bar">
        <div className="search-input-wrap">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by clinic name, doctor, or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div>
            <select
              className="filter-select"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              aria-label="Filter by specialty"
            >
              {allSpecialties.map(spec => (
                <option key={spec} value={spec}>
                  Specialty: {spec}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              className="filter-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              aria-label="Filter by location"
            >
              {allCities.map(city => (
                <option key={city} value={city}>
                  Location: {city}
                </option>
              ))}
            </select>
          </div>

          {(searchTerm || selectedSpecialty !== 'All' || selectedCity !== 'All') && (
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('All');
                setSelectedCity('All');
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Results Count Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.925rem' }}>
        <span>Showing <strong>{filteredClinics.length}</strong> veterinary facilities matching criteria</span>
        <span style={{ fontSize: '0.85rem' }}>All clinics verified with active medical licenses</span>
      </div>

      {/* Clinics Directory Grid */}
      {filteredClinics.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem' }}>
          <Building2 size={48} color="var(--text-light)" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>No Veterinary Clinics Found</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
            No clinics matched your selected specialty and location criteria. Try widening your filters.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setSearchTerm('');
              setSelectedSpecialty('All');
              setSelectedCity('All');
            }}
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredClinics.map((clinic) => (
            <div key={clinic.id} className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem' }}>
                {/* Left Clinic Info */}
                <div>
                  <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <img
                      src={clinic.image}
                      alt={clinic.name}
                      style={{
                        width: '130px',
                        height: '120px',
                        borderRadius: '16px',
                        objectFit: 'cover'
                      }}
                    />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                        <span className="badge badge-teal">{clinic.badge}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#f59e0b', fontWeight: 700, fontSize: '0.9rem' }}>
                          <Star size={15} fill="#f59e0b" />
                          <span>{clinic.rating}</span>
                          <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>({clinic.reviewsCount} reviews)</span>
                        </div>
                      </div>

                      <h2 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{clinic.name}</h2>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <MapPin size={16} color="var(--primary)" />
                        <span>{clinic.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Doctor & Specialties */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', padding: '1rem', background: 'var(--bg-main)', borderRadius: '12px', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700 }}>Lead Clinician</div>
                      <div style={{ fontWeight: 600, color: 'var(--text-main)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Stethoscope size={15} color="var(--primary)" />
                        <span>{clinic.leadDoctor}</span>
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700 }}>Operating Hours</div>
                      <div style={{ fontWeight: 500, color: 'var(--text-main)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Clock size={15} color="var(--primary)" />
                        <span>{clinic.openHours}</span>
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700 }}>Consultation Fee</div>
                      <div style={{ fontWeight: 700, color: 'var(--primary)', marginTop: '2px', fontSize: '1.1rem' }}>
                        ${clinic.consultationFee} <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--text-muted)' }}>/ initial consult</span>
                      </div>
                    </div>
                  </div>

                  {/* Medical Specialties Pills */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>Specialties Covered:</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {clinic.specialties.map(spec => (
                        <span key={spec} className="badge badge-info">{spec}</span>
                      ))}
                    </div>
                  </div>

                  {/* Amenities / Features */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {clinic.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <CheckCircle size={14} color="var(--primary)" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Available Slots Box */}
                <div
                  style={{
                    background: 'var(--primary-light)',
                    border: '1px solid var(--primary-border)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <CalendarCheck2 size={18} color="var(--primary)" />
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-hover)' }}>Available Appointment Slots</h4>
                  </div>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Select an open demonstration slot to prefill your appointment booking.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {clinic.availableSlots.map((slot) => (
                      <button
                        key={slot}
                        className="btn btn-secondary btn-sm"
                        style={{
                          background: 'white',
                          border: '1px solid #99f6e4',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          padding: '0.55rem 0.25rem'
                        }}
                        onClick={() => {
                          onOpenBookingModalWithClinic({
                            clinicId: clinic.id,
                            clinicName: clinic.name,
                            veterinarian: clinic.leadDoctor,
                            time: slot
                          });
                        }}
                      >
                        <Clock size={13} color="var(--primary)" />
                        <span>{slot}</span>
                      </button>
                    ))}
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <button
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                      onClick={() => {
                        onOpenBookingModalWithClinic({
                          clinicId: clinic.id,
                          clinicName: clinic.name,
                          veterinarian: clinic.leadDoctor
                        });
                      }}
                    >
                      <CalendarCheck2 size={16} />
                      <span>Book Consultation</span>
                    </button>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Phone size={12} /> {clinic.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
