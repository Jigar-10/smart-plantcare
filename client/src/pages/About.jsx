import { Link } from 'react-router-dom';

function About() {
  return (
    <main>
      <section className="section about-hero">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">About PlantCare</h2>
            <p className="section-subtitle">
              PlantCare is a minimal React + Node app for tracking plants, remembering watering schedules, and keeping plant care simple.
            </p>
          </div>

          <div className="card-grid">
            <div className="glass-card feature-card about-highlight">
              <h3>Simple garden management</h3>
              <p>
                Add plants, mark favorites, water on schedule, and keep an overview of your indoor garden in one place.
              </p>
            </div>
            <div className="glass-card feature-card">
              <h3>React front end</h3>
              <p>
                This app uses React Router, Vite, and a component-based structure so the UI stays fast and easy to update.
              </p>
            </div>
            <div className="glass-card feature-card">
              <h3>Node backend</h3>
              <p>
                A lightweight Express server provides the garden API. It stores plant entries on the server without MongoDB or user authentication.
              </p>
            </div>
          </div>

          <div className="glass-card" style={{ marginTop: 32 }}>
            <h3>Why this project exists</h3>
            <p>
              The goal is to transform an existing plant care website into a clean React application while keeping the experience simple and minimal.
              The project focuses on a modern UI, reusable components, and a small Node-powered API.
            </p>
            <p>
              Use the navigation above to manage your garden, learn about the app, or get in touch via the contact page.
            </p>
            <Link to="/garden" className="btn btn-primary" style={{ marginTop: 18 }}>
              Open Garden
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
