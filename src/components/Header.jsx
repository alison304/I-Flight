import React from 'react';
import { Link } from 'react-router-dom';

function Header({titulo}) {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <div className="logo-iflight" style={{ backgroundColor: `#52a6e2` }}>
          <Link to="/">
          <img
            src="/assets/IFlight Logo/IFlight Logo.png"
            alt="Foto Ali"
            width="230"
            height="200"
          />
          </Link>
          {titulo}
        </div>
      </div>
    </nav>
  );
}

export default Header;