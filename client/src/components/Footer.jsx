import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">🌱 PlantCare</p>
          <p>Track plants, learn care routines, and manage watering reminders in one place.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/garden">My Garden</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-sdg">
          <div className="sdg-badge">15</div>
          <div>
            <strong>SDG 15</strong>
            <p>Life on Land | Academic project conversion to React + Node.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
