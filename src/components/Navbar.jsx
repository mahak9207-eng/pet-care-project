import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  PawPrint,
  Home,
  Building2,
  BookHeart,
  CalendarCheck2,
  Sparkles,
  Menu,
  X,
  PlusCircle,
  Clock
} from 'lucide-react';
import { usePetCare } from '../context/PetCareContext';

export const Navbar = ({ onOpenAddPetModal, onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pets, appointments, reminders } = usePetCare();
  const navigate = useNavigate();

  const pendingRemindersCount = reminders.filter(r => !r.completed).length;

  const navLinks = [
    { to: '/', label: 'Dashboard', icon: Home, badge: null },
    { to: '/clinics', label: 'Vet Clinics', icon: Building2, badge: null },
    { to: '/pets', label: 'Pet Profiles', icon: BookHeart, badge: `${pets.length} Pets` },
    { to: '/appointments', label: 'Appointments & Reminders', icon: CalendarCheck2, badge: pendingRemindersCount > 0 ? `${pendingRemindersCount} Due` : null },
    { to: '/ai-insights', label: 'AI Pet Insights', icon: Sparkles, badge: 'AI Powered', badgeTeal: true }
  ];

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {/* Brand */}
        <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-icon-box">
            <PawPrint size={24} />
          </div>
          <div>
            PetCare<span>360</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`badge ${item.badgeTeal ? 'badge-teal' : 'badge-warning'}`} style={{ padding: '2px 6px', fontSize: '0.7rem' }}>
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button
            className="btn btn-outline btn-sm"
            onClick={onOpenAddPetModal}
            title="Register a new pet profile"
          >
            <PlusCircle size={16} />
            <span>Add Pet</span>
          </button>

          <button
            className="btn btn-primary btn-sm"
            onClick={onOpenBookingModal}
            title="Book a demonstration vet appointment"
          >
            <Clock size={16} />
            <span>Book Visit</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'white',
            borderBottom: '1px solid var(--border-color)',
            padding: '1rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ justifyContent: 'space-between' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`badge ${item.badgeTeal ? 'badge-teal' : 'badge-warning'}`}>
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
            <button
              className="btn btn-outline btn-sm"
              style={{ flex: 1 }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAddPetModal();
              }}
            >
              <PlusCircle size={16} />
              <span>Add Pet</span>
            </button>
            <button
              className="btn btn-primary btn-sm"
              style={{ flex: 1 }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
            >
              <Clock size={16} />
              <span>Book Visit</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
