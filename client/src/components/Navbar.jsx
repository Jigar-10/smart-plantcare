import { NavLink } from 'react-router-dom';

function Navbar({ currentTheme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="nav-inner container">
        <NavLink to="/" className="brand">
          <span>🌱</span>
          PlantCare
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/garden">My Garden</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <button className="theme-button" onClick={onToggleTheme} aria-label="Toggle theme">
          {currentTheme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
