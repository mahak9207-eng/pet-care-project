import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, PhoneCall, ShieldAlert, Heart, RefreshCw } from 'lucide-react';
import { usePetCare } from '../context/PetCareContext';

export const Footer = () => {
  const { resetToSampleData } = usePetCare();

  const handleReset = () => {
    if (window.confirm('Reset all pet profiles, records, and appointments back to original demonstration sample data?')) {
      resetToSampleData();
      alert('Application data reset to initial sample state.');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Emergency Triage Banner */}
        <div className="disclaimer-banner">
          <ShieldAlert size={20} style={{ flexShrink: 0 }} />
          <div>
            <strong>Veterinary Notice:</strong> PetCare360 provides proactive routine care organization, calendar reminders, and non-diagnostic AI wellness suggestions. In severe trauma, sudden respiratory distress, or toxic ingestion emergencies, immediately transport your pet to your nearest 24/7 veterinary hospital.
          </div>
        </div>

        <div className="footer-top">
          {/* Brand Col */}
          <div>
            <div className="footer-brand">
              <div className="brand-icon-box" style={{ width: '2rem', height: '2rem' }}>
                <PawPrint size={18} />
              </div>
              <span>PetCare360</span>
            </div>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              A modern pet-care management platform connecting pet owners with comprehensive care routines, veterinary clinic directories, proactive reminders, and intelligent behavioral insights.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#5eead4', fontSize: '0.875rem' }}>
              <PhoneCall size={16} />
              <span>24/7 Pet Emergency Hotline: 1-800-PET-EMERG</span>
            </div>
          </div>

          {/* Col 1 */}
          <div className="footer-col">
            <h4>Main Portals</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home & Care Discovery</Link></li>
              <li><Link to="/clinics" className="footer-link">Vet Clinic Directory</Link></li>
              <li><Link to="/pets" className="footer-link">Pet Profiles & Records</Link></li>
              <li><Link to="/appointments" className="footer-link">Appointments & Reminders</Link></li>
              <li><Link to="/ai-insights" className="footer-link">AI Pet Care Insights</Link></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="footer-col">
            <h4>Species Care Guides</h4>
            <ul className="footer-links">
              <li><Link to="/?category=dogs" className="footer-link">Canine Wellness Guides</Link></li>
              <li><Link to="/?category=cats" className="footer-link">Feline Hydration & Health</Link></li>
              <li><Link to="/?category=birds" className="footer-link">Avian Environmental Safety</Link></li>
              <li><Link to="/?category=small-mammals" className="footer-link">Small Mammal Diet Essentials</Link></li>
              <li><Link to="/?category=reptiles-aquatics" className="footer-link">Reptile & Aquatic Habitat</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-col">
            <h4>Demo Controls</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
              All profiles, vaccination logs, and appointments run fully in-browser with localStorage persistence.
            </p>
            <button
              onClick={handleReset}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <RefreshCw size={14} />
              <span>Reset Sample Data</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} PetCare360 Platform. Designed with <Heart size={14} style={{ display: 'inline', color: '#ef4444', verticalAlign: 'middle' }} /> for animal companions worldwide.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#64748b' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Veterinary Ethics</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
