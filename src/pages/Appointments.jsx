import React, { useState } from 'react';
import {
  CalendarCheck2,
  Clock,
  Building2,
  Stethoscope,
  PlusCircle,
  CheckCircle2,
  Circle,
  AlertTriangle,
  Calendar,
  XCircle,
  FileText,
  Pill,
  Sparkles,
  ChevronRight,
  Filter
} from 'lucide-react';
import { usePetCare } from '../context/PetCareContext';
import { Modal } from '../components/Modal';

export const Appointments = ({ onOpenBookingModal }) => {
  const { pets, appointments, reminders, clinics, toggleReminder, addReminder, cancelAppointment } = usePetCare();

  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming', 'reminders', 'diary'
  const [selectedPetFilter, setSelectedPetFilter] = useState('All');
  const [isAddReminderOpen, setIsAddReminderOpen] = useState(false);

  // New Reminder form state
  const [remPetId, setRemPetId] = useState(pets[0] ? pets[0].id : '');
  const [remTitle, setRemTitle] = useState('');
  const [remDueDate, setRemDueDate] = useState(new Date().toISOString().split('T')[0]);
  const [remCategory, setRemCategory] = useState('Medication');
  const [remPriority, setRemPriority] = useState('Medium');
  const [remDescription, setRemDescription] = useState('');

  // Filtering
  const filteredAppointments = appointments.filter(apt => {
    const matchesPet = selectedPetFilter === 'All' || apt.petId === selectedPetFilter;
    if (activeTab === 'upcoming') {
      return matchesPet && apt.status === 'Confirmed';
    } else if (activeTab === 'diary') {
      return matchesPet;
    }
    return matchesPet;
  });

  const filteredReminders = reminders.filter(r => {
    return selectedPetFilter === 'All' || r.petId === selectedPetFilter;
  });

  const handleCreateReminder = (e) => {
    e.preventDefault();
    if (!remTitle) return;
    addReminder({
      petId: remPetId,
      title: remTitle,
      dueDate: remDueDate,
      category: remCategory,
      priority: remPriority,
      description: remDescription
    });
    setIsAddReminderOpen(false);
    setRemTitle('');
    setRemDescription('');
  };

  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      {/* Header */}
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              <CalendarCheck2 size={18} />
              <span>Workflow & Tracking System</span>
            </div>
            <h1 className="page-title">Appointments, Reminders & Care Diary</h1>
            <p className="page-subtitle">
              Schedule demonstration veterinary appointments, manage prioritized routine care reminders, and review simulated historical visit records.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              className="btn btn-secondary"
              onClick={() => setIsAddReminderOpen(true)}
            >
              <PlusCircle size={18} />
              <span>Add Care Reminder</span>
            </button>

            <button
              className="btn btn-primary"
              onClick={onOpenBookingModal}
            >
              <CalendarCheck2 size={18} />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs and Pet Filter Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
        <div className="tabs-nav" style={{ marginBottom: 0 }}>
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <CalendarCheck2 size={18} />
            <span>Upcoming Visits ({appointments.filter(a => a.status === 'Confirmed').length})</span>
          </button>

          <button
            className={`tab-btn ${activeTab === 'reminders' ? 'active' : ''}`}
            onClick={() => setActiveTab('reminders')}
          >
            <Clock size={18} />
            <span>Care Reminders ({reminders.filter(r => !r.completed).length} Due)</span>
          </button>

          <button
            className={`tab-btn ${activeTab === 'diary' ? 'active' : ''}`}
            onClick={() => setActiveTab('diary')}
          >
            <FileText size={18} />
            <span>Pet-Care Diary & History ({appointments.length})</span>
          </button>
        </div>

        <div>
          <select
            className="filter-select"
            value={selectedPetFilter}
            onChange={(e) => setSelectedPetFilter(e.target.value)}
            aria-label="Filter appointments by pet"
          >
            <option value="All">Filter by Pet: All Companions</option>
            {pets.map(p => (
              <option key={p.id} value={p.id}>{p.name} ({p.species})</option>
            ))}
          </select>
        </div>
      </div>

      {/* 1. UPCOMING VISITS VIEW */}
      {activeTab === 'upcoming' && (
        <div>
          {filteredAppointments.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem' }}>
              <CalendarCheck2 size={48} color="var(--text-light)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>No Upcoming Appointments</h3>
              <p style={{ color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto 1.5rem' }}>
                You have no active confirmed visits scheduled for the selected filter. Book a demonstration appointment with any of our accredited veterinary partner clinics.
              </p>
              <button className="btn btn-primary" onClick={onOpenBookingModal}>
                Book a Demonstration Appointment
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {filteredAppointments.map((apt) => (
                <div key={apt.id} className="card" style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                        <span className="badge badge-success">Confirmed Booking</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontFamily: 'monospace' }}>
                          Ref: {apt.bookingRef}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                        {apt.service}
                      </h3>
                      <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                        Patient: {apt.petName}
                      </div>
                    </div>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to cancel the booking for ${apt.petName}?`)) {
                          cancelAppointment(apt.id);
                        }
                      }}
                    >
                      <XCircle size={15} />
                      <span>Cancel Booking</span>
                    </button>
                  </div>

                  {/* Visit Details Box */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', padding: '1rem', background: 'var(--bg-main)', borderRadius: '12px', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700 }}>Date & Time</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, marginTop: '2px' }}>
                        <Calendar size={15} color="var(--primary)" />
                        <span>{apt.date} at {apt.time}</span>
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700 }}>Clinic Facility</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, marginTop: '2px' }}>
                        <Building2 size={15} color="var(--primary)" />
                        <span>{apt.clinicName}</span>
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700 }}>Attending Clinician</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600, marginTop: '2px' }}>
                        <Stethoscope size={15} color="var(--primary)" />
                        <span>{apt.veterinarian}</span>
                      </div>
                    </div>
                  </div>

                  {apt.notes && (
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      <strong>Patient Visit Notes:</strong> {apt.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 2. CARE REMINDERS VIEW */}
      {activeTab === 'reminders' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem' }}>Routine Care & Health Alerts</h3>
            <button className="btn btn-secondary btn-sm" onClick={() => setIsAddReminderOpen(true)}>
              <PlusCircle size={15} />
              <span>New Reminder</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {filteredReminders.map((rem) => {
              const isHigh = rem.priority === 'High';
              return (
                <div
                  key={rem.id}
                  className="card"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    opacity: rem.completed ? 0.6 : 1,
                    background: rem.completed ? '#f8fafc' : 'white',
                    borderLeft: `4px solid ${rem.completed ? '#94a3b8' : isHigh ? 'var(--danger)' : 'var(--primary)'}`
                  }}
                >
                  <button
                    onClick={() => toggleReminder(rem.id)}
                    style={{ color: rem.completed ? 'var(--success)' : 'var(--text-light)', padding: '4px' }}
                    aria-label="Toggle completed status"
                  >
                    {rem.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                  </button>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                      <strong style={{ fontSize: '1.05rem', textDecoration: rem.completed ? 'line-through' : 'none' }}>
                        {rem.title}
                      </strong>
                      <span className={`badge ${rem.completed ? 'badge-success' : isHigh ? 'badge-danger' : 'badge-teal'}`}>
                        {rem.completed ? 'Completed' : `${rem.priority} Priority`}
                      </span>
                      <span className="badge badge-info">{rem.category}</span>
                    </div>

                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Target Pet: <strong>{rem.petName}</strong> &bull; {rem.description}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right', minWidth: '120px' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 600 }}>Due Date</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: rem.completed ? 'var(--text-light)' : 'var(--text-main)' }}>
                      {rem.dueDate}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. PET-CARE DIARY & VISIT LOGS VIEW */}
      {activeTab === 'diary' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.2rem' }}>Comprehensive Pet-Care Diary & Clinical History</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Total Entries: {filteredAppointments.length}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredAppointments.map((apt) => (
              <div key={apt.id} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span className={`badge ${apt.status === 'Confirmed' ? 'badge-teal' : apt.status === 'Completed' ? 'badge-success' : 'badge-danger'}`}>
                      {apt.status}
                    </span>
                    <strong style={{ fontSize: '1.1rem' }}>{apt.service}</strong>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
                    Ref #{apt.bookingRef}
                  </span>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Patient: <strong>{apt.petName}</strong> &bull; Clinic: <strong>{apt.clinicName}</strong> ({apt.veterinarian})
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', background: 'var(--bg-main)', padding: '0.75rem 1rem', borderRadius: '8px' }}>
                  <span>Visit Date: <strong>{apt.date}</strong></span>
                  <span>Time: <strong>{apt.time}</strong></span>
                  <span>Booked On: {apt.createdAt}</span>
                </div>

                {apt.notes && (
                  <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    <strong>Clinical & Care Summary:</strong> {apt.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Custom Reminder Modal */}
      <Modal
        isOpen={isAddReminderOpen}
        onClose={() => setIsAddReminderOpen(false)}
        title="Add Pet Care Reminder"
        maxWidth="540px"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setIsAddReminderOpen(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleCreateReminder}>
              Save Reminder
            </button>
          </>
        }
      >
        <form onSubmit={handleCreateReminder}>
          <div className="form-group">
            <label className="form-label">Companion Pet</label>
            <select
              className="form-select"
              value={remPetId}
              onChange={(e) => setRemPetId(e.target.value)}
            >
              {pets.map(p => (
                <option key={p.id} value={p.id}>{p.name} ({p.species})</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Reminder Title *</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g. Tick & Flea Chews, Water Fountain Filter, Dental Chew"
              value={remTitle}
              onChange={(e) => setRemTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={remCategory}
                onChange={(e) => setRemCategory(e.target.value)}
              >
                <option value="Medication">Medication & Preventative</option>
                <option value="Vaccination">Vaccination Booster</option>
                <option value="Hygiene & Water">Hygiene & Water</option>
                <option value="Dental Care">Dental Care</option>
                <option value="Grooming">Grooming & Coat</option>
                <option value="Wellness">General Wellness</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Priority</label>
              <select
                className="form-select"
                value={remPriority}
                onChange={(e) => setRemPriority(e.target.value)}
              >
                <option value="High">High (Urgent Medical)</option>
                <option value="Medium">Medium (Routine Care)</option>
                <option value="Low">Low (Maintenance)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Due Date</label>
            <input
              type="date"
              className="form-input"
              value={remDueDate}
              onChange={(e) => setRemDueDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Instructions / Description</label>
            <textarea
              className="form-textarea"
              placeholder="Specific dosage, timing, or administration instructions..."
              value={remDescription}
              onChange={(e) => setRemDescription(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};
