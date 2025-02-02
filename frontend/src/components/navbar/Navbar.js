import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css';
import navlogo from '../../assets/navlogo.png';
import navIcon from '../../assets/navIcon.svg';

function Navbar() {
  const [menuListOpen, setMenuListOpen] = useState(false);

  const toggleMenu = () => {
    setMenuListOpen(!menuListOpen);
  };

  const closeMenu = () => {
    setMenuListOpen(false);
  };

  return (
    <div id="navbar" className="py-4">
      <div className="navlogo mx-4">
        <img className="navlogoimg" src={navlogo} alt="Logo" />
        <div className="navlogotext">
          <h1>EXCELLENCE</h1>
          <h3>CENTRE DENTAIRE</h3>
        </div>
        <div
          className={`bx bx-menu ${menuListOpen ? 'open' : ''}`}
          id="menu-icon"
          onClick={toggleMenu}
        >
          <img className="navIcon" src={navIcon} alt="Icon" />
        </div>
      </div>
      <nav className={`navlist ${menuListOpen ? 'open' : ''}`}>
        <ul id="menuList">
          <li>
            <NavLink
              exact
              to="/"
              className="font-semibold pb-6"
              activeClassName="active"
              onClick={closeMenu}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clinique"
              className="font-semibold"
              activeClassName="active"
              onClick={closeMenu}
            >
              Clinique
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/equipe"
              className="font-semibold"
              activeClassName="active"
              onClick={closeMenu}
            >
              Équipe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/traitements"
              className="font-semibold"
              activeClassName="active"
              onClick={closeMenu}
            >
              Traitements
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="font-semibold"
              activeClassName="active"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
