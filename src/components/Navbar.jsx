import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
  const { pets, reminders } = usePetCare();

  const pendingRemindersCount = reminders.filter(r => !r.completed).length;

  const navLinks = [
    { to: '/', label: 'Dashboard', icon: Home, count: null },
    { to: '/clinics', label: 'Vet Clinics', icon: Building2, count: null },
    { to: '/pets', label: 'Pet Profiles', icon: BookHeart, count: pets.length, countType: 'teal' },
    { to: '/appointments', label: 'Appointments', icon: CalendarCheck2, count: pendingRemindersCount > 0 ? pendingRemindersCount : null, countType: 'amber' },
    { to: '/ai-insights', label: 'AI Insights', icon: Sparkles, count: 'AI', countType: 'ai' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container nav-inner">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-icon-box">
            <PawPrint size={22} />
          </div>
          <span className="brand-text">
            PetCare<span className="brand-highlight">360</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <Icon size={17} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                  {item.count !== null && item.count !== undefined && (
                    <span className={`nav-count-badge ${item.countType}`}>
                      {item.count}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button
            className="btn btn-outline btn-sm nav-btn"
            onClick={onOpenAddPetModal}
            title="Register a new pet profile"
          >
            <PlusCircle size={15} />
            <span>Add Pet</span>
          </button>

          <button
            className="btn btn-primary btn-sm nav-btn"
            onClick={onOpenBookingModal}
            title="Book a demonstration vet appointment"
          >
            <Clock size={15} />
            <span>Book Visit</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </div>
                {item.count !== null && item.count !== undefined && (
                  <span className={`nav-count-badge ${item.countType}`}>
                    {item.count}
                  </span>
                )}
              </NavLink>
            );
          })}
          <div className="mobile-drawer-actions">
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
