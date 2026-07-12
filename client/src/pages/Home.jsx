import { Link } from 'react-router-dom';
import Plant1 from '../assets/plant1.svg';
import Plant2 from '../assets/plant2.svg';
import Plant3 from '../assets/plant3.svg';

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 className="hero-title">Keep your plants healthy with smart reminders.</h1>
            <p className="hero-subtitle">
              PlantCare helps you track watering schedules, explore care guides, and manage your indoor garden from one clean React app.
            </p>
            <div className="hero-buttons">
              <Link to="/garden" className="btn btn-primary">
                Get Started 🌿
              </Link>
              <Link to="/garden" className="btn btn-secondary">
                Manage Garden 🔍
              </Link>
            </div>
          </div>

          <div className="hero-artboard glass-card">
            <div className="artboard-pulse">
              <img src={Plant1} alt="Plant illustration" className="hero-art" />
            </div>
            <img src={Plant2} alt="Plant background" className="hero-art secondary-art" />
            <img src={Plant3} alt="Plant decorative" className="hero-art tertiary-art" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Smart Gardening Features</h2>
            <p className="section-subtitle">
              Manage your plant care routines, search the gallery, and keep your garden thriving without any distractions.
            </p>
          </div>
          <div className="feature-grid">
            <div className="glass-card feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Garden Tracker</h3>
              <p>Save plant entries with watering intervals, last watered date, and favorite status.</p>
            </div>
            <div className="glass-card feature-card">
              <div className="feature-icon">⏰</div>
              <h3>Watering Reminders</h3>
              <p>See which plants need attention today, tomorrow, or later this week.</p>
            </div>
            <div className="glass-card feature-card">
              <div className="feature-icon">📚</div>
              <h3>Care Guides</h3>
              <p>Browse curated plant advice for light, soil, and troubleshooting symptoms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, #1b4332 0%, #081c15 100%)', color: 'white' }}>
        <div className="container glass-card">
          <h2 className="section-title" style={{ color: 'white' }}>Supporting SDG 15: Life on Land</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.82)' }}>
            This React conversion keeps the original project theme while making plant care easier to manage with a modern app architecture.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
