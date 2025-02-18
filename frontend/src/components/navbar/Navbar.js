import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css';
import navlogo from '../../assets/navlogo.png';
import navIcon from '../../assets/navIcon.svg';
import { Helmet } from 'react-helmet';

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
    <Helmet>
        <title>Excellence Centre Dentaire</title>
        <meta name="description" content="Bienvenue au Centre Dentaire Excellence, offrant des soins dentaires de qualité et une équipe dédiée à votre santé bucco-dentaire." />
        <meta name="keywords" content="dentiste, soins dentaires, clinique dentaire, équipe dentaire, traitements dentaires" />
        <meta name="author" content="Excellence Centre Dentaire" />
      </Helmet>
      <div className="navlogo mx-4">
        <img className="navlogoimg" src={navlogo} alt="Logo" />
        <div className="navlogotext">
          <h1>EXCELLENCE</h1>
          <h3>CENTRE DENTAIRE</h3>
        </div>
        <div className="hidden-text">
        <h1>dentiste setif</h1>
        <h1>dentiste Algerie</h1>
        <h1>dentiste N'gaous</h1>
        <h1>dentiste Ngaous</h1>
        <h1>dentiste Ngaous Batna</h1>
        <h1>dentiste Biskra</h1>
        <h1>dentiste Batna</h1>
        <h1>dentiste Khenchlaa</h1>
        <h1>dentiste Constantine</h1>
        <h1>dentiste Oum El Bouaghi</h1>
        <h1>dentiste ngaous </h1>
        <h1>dentiste Batna</h1>
        <h1>dentiste M'sila</h1>
        <h1>dentiste Msila</h1>
        <h1>dentiste Alger</h1>
        <h1>dentiste Algerie</h1>
        <h1>soins dentaires</h1>
        <h1>orthodontie, implants, esthétique dentaire, chirurgie orale, blanchiment, hygiène dentaire, urgence dentaire, Algérie</h1></div>
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
