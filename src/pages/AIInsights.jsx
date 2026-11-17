import React, { useState } from 'react';
import {
  Sparkles,
  BarChart3,
  TrendingUp,
  Clock,
  Building2,
  CalendarCheck2,
  Activity,
  ShieldAlert,
  ShieldCheck,
  Heart,
  Droplets,
  Scale,
  AlertTriangle,
  Award,
  Zap,
  Info
} from 'lucide-react';
import { usePetCare } from '../context/PetCareContext';

export const AIInsights = () => {
  const { pets, aiData, reminders, generateAiCarePlan } = usePetCare();
  const [selectedPetId, setSelectedPetId] = useState(pets[0] ? pets[0].id : null);

  const carePlan = generateAiCarePlan(selectedPetId);

  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      {/* Header */}
      <div className="page-header">
        <div className="page-header-row">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              <Sparkles size={18} />
              <span>AI Behavioral Analytics & Routine Optimizer</span>
            </div>
            <h1 className="page-title">AI Pet Care Insights & Trends</h1>
            <p className="page-subtitle">
              Intelligent multi-pet care routine synthesis, veterinary demand analytics, appointment scheduling patterns, and predictive preventive reminders.
            </p>
          </div>

          {/* Pet Selector for AI Care Plan */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>Analyze Pet:</span>
            <select
              className="filter-select"
              value={selectedPetId || ''}
              onChange={(e) => setSelectedPetId(e.target.value)}
              style={{ fontWeight: 700, borderColor: 'var(--primary)' }}
            >
              {pets.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.species} &bull; {p.age} yrs)
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Non-Diagnostic Disclaimer Banner */}
      <div className="disclaimer-banner" style={{ background: '#ecfdf5', borderColor: '#a7f3d0', color: '#065f46', marginBottom: '2.5rem' }}>
        <ShieldCheck size={20} style={{ flexShrink: 0 }} />
        <div>
          <strong>Non-Diagnostic Care Notice:</strong> AI insights are generated from mock age profiles, species biology benchmarks, and logged care history. These suggestions are intended to help organize wellness routines and are not a substitute for formal veterinary diagnosis or prescription therapies.
        </div>
      </div>

      {/* SECTION A: INDIVIDUAL PET AI CARE-ROUTINE SYNTHESIS */}
      {carePlan && (
        <section style={{ marginBottom: '3.5rem' }}>
          <div className="card" style={{ padding: '2rem', border: '1.5px solid var(--primary-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={carePlan.pet.avatar}
                  alt={carePlan.pet.name}
                  style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h2 style={{ fontSize: '1.5rem' }}>AI Wellness Routine for {carePlan.pet.name}</h2>
                    <span className="badge badge-teal">Life Stage: {carePlan.lifeStage}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    Species: {carePlan.pet.species} &bull; Breed: {carePlan.pet.breed} &bull; Weight: {carePlan.pet.weight}
                  </p>
                </div>
              </div>

              {/* Pet Wellness Index Gauge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-main)', padding: '0.75rem 1.25rem', borderRadius: '16px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 700 }}>Wellness Score</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)' }}>
                    {carePlan.wellnessScore} <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>/ 100</span>
                  </div>
                </div>
                <Award size={32} color="var(--primary)" />
              </div>
            </div>

            {/* Smart Non-diagnostic Suggestions */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Zap size={18} color="var(--accent)" />
                <span>AI Algorithmic Recommendations</span>
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                {carePlan.recommendations.map((rec, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '1.25rem',
                      background: 'var(--bg-main)',
                      borderRadius: '12px',
                      borderLeft: `4px solid ${rec.priority === 'High' ? 'var(--danger)' : 'var(--primary)'}`
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span className="badge badge-teal" style={{ fontSize: '0.725rem' }}>{rec.badge}</span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: rec.priority === 'High' ? 'var(--danger)' : 'var(--text-muted)' }}>
                        {rec.priority} Priority
                      </span>
                    </div>
                    <strong style={{ display: 'block', fontSize: '0.975rem', color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                      {rec.title}
                    </strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {rec.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Structured Suggested Daily Schedule */}
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={18} color="var(--primary)" />
                <span>Optimal Daily Care Schedule</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {carePlan.suggestedDailyRoutine.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.75rem 1rem',
                      background: '#ffffff',
                      border: '1px solid var(--border-color)',
                      borderRadius: '10px'
                    }}
                  >
                    <span style={{ fontWeight: 700, color: 'var(--primary)', minWidth: '85px', fontSize: '0.9rem' }}>
                      {item.time}
                    </span>
                    <strong style={{ minWidth: '220px', fontSize: '0.9rem' }}>
                      {item.activity}
                    </strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', flex: 1 }}>
                      {item.tip}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION B: 5 CORE DATA DISPLAYS (From Requirements) */}
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BarChart3 size={24} color="var(--primary)" />
        <span>Veterinary & Care Behavioral Analytics</span>
      </h2>

      {/* Display 5: Pet Care Activity Summaries */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>5. Pet Care Activity Summaries</h3>
        <div className="grid-4">
          <div className="stat-box">
            <div className="stat-icon" style={{ background: '#ecfdf5', color: '#10b981' }}>
              <Award size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{aiData.activityMetrics.wellnessIndex}%</div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Household Wellness Index</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon" style={{ background: '#eff6ff', color: '#3b82f6' }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{aiData.activityMetrics.medicationAdherenceRate}</div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Medication Adherence</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon" style={{ background: '#fffbeb', color: '#f59e0b' }}>
              <TrendingUp size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{aiData.activityMetrics.averageWeeklyWalkMiles} mi</div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Avg. Weekly Canine Activity</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon" style={{ background: '#fdf2f8', color: '#ec4899' }}>
              <Activity size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>{aiData.activityMetrics.loggedCareTasksThisMonth}</div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Tasks Logged This Month</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
        {/* Display 1: Popular Veterinary Services */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>1. Popular Veterinary Services</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Based on 4,180 aggregated clinical consultations</p>
            </div>
            <span className="badge badge-teal">Top Demand</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {aiData.popularServices.map((service, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  <strong>{service.name}</strong>
                  <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>
                    {service.percentage}% <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 400 }}>({service.count} visits)</span>
                  </span>
                </div>

                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${service.percentage}%`, background: service.color }}
                  ></div>
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>
                  Trend: {service.trend}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display 2: Preferred Clinics */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>2. Preferred Partner Clinics</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Owner satisfaction and facility loyalty ranking</p>
            </div>
            <span className="badge badge-success">High Satisfaction</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {aiData.preferredClinics.map((clinic, i) => (
              <div
                key={i}
                style={{
                  padding: '1rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  background: 'var(--bg-main)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <strong style={{ fontSize: '0.975rem' }}>{clinic.name}</strong>
                  <span className="badge badge-teal">{clinic.share}% Market Share</span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  <span>Satisfaction: <strong style={{ color: '#b45309' }}>{clinic.avgSatisfaction}</strong></span>
                  <span>Turnaround: <strong>{clinic.turnaround}</strong></span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {clinic.primaryReasons.map((reason, rIdx) => (
                    <span key={rIdx} className="badge badge-info" style={{ fontSize: '0.7rem' }}>
                      {reason}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-2">
        {/* Display 3: Appointment Patterns */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>3. Weekly Appointment Patterns</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Morning vs afternoon booking volume distribution</p>
            </div>
            <span className="badge badge-info">Peak: Friday & Saturday</span>
          </div>

          {/* Simple Visual Bar Chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '170px', padding: '1rem 0.5rem', background: 'var(--bg-main)', borderRadius: '12px', marginBottom: '1rem' }}>
            {aiData.appointmentPatterns.map((pat) => {
              const total = pat.morningBookings + pat.afternoonBookings;
              const heightPercent = Math.min(100, Math.round((total / 95) * 100));
              return (
                <div key={pat.day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', flex: 1 }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)' }}>{total}</span>
                  <div
                    style={{
                      width: '26px',
                      height: `${heightPercent}%`,
                      background: 'linear-gradient(to top, #0d9488, #14b8a6)',
                      borderRadius: '6px 6px 0 0',
                      transition: 'height 0.4s ease'
                    }}
                    title={`${pat.day}: ${pat.morningBookings} AM / ${pat.afternoonBookings} PM`}
                  ></div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>{pat.day}</span>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            <span>&bull; AM Bookings: <strong>8:00 AM - 12:00 PM</strong></span>
            <span>&bull; PM Bookings: <strong>1:00 PM - 6:00 PM</strong></span>
            <span>&bull; Weekends: <strong>Urgent Triage & Saturday Clinics</strong></span>
          </div>
        </div>

        {/* Display 4: Upcoming Routine Care Reminders */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>4. Upcoming Routine Care Reminders</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Prioritized algorithmic timeline for proactive health</p>
            </div>
            <span className="badge badge-warning">Action Required</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {reminders.slice(0, 4).map((rem) => {
              const isHigh = rem.priority === 'High';
              return (
                <div
                  key={rem.id}
                  style={{
                    padding: '0.9rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: rem.completed ? '#f8fafc' : '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <strong style={{ fontSize: '0.925rem' }}>{rem.title}</strong>
                      <span className={`badge ${rem.completed ? 'badge-success' : isHigh ? 'badge-danger' : 'badge-teal'}`} style={{ fontSize: '0.7rem' }}>
                        {rem.completed ? 'Done' : `${rem.priority}`}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Pet: <strong>{rem.petName}</strong> &bull; {rem.category}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: isHigh ? 'var(--danger)' : 'var(--text-main)' }}>
                      {rem.dueDate}
                    </div>
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-light)' }}>Scheduled Due</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
