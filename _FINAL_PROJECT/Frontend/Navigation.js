import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Namai</Link>
        </li>
        <li>
          <Link to="/shopping-cart">Krepšelis</Link>
        </li>
        <li>
          <Link to="/user-account">Vartotojo Paskyra</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
