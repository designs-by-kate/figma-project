import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import "./style.css";
import closeIcon from "../../assets/closeIconBlue.png";
import menuIcon from "../../assets/menuIconMulti.png";
import logo from "../../assets/logo.jpg";
import homeSticker from '../../assets/homeSticker.png';
import dietSticker from '../../assets/dietSticker.png';
import playSticker from '../../assets/playSticker.png';
import bathSticker from '../../assets/bathSticker.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div>
        <img className="logo"
          src={logo}
          alt="Logo"
        />
        <a className="title" href="/Bunnies-World/">
          Bunnies World
        </a>
      </div>
      <div className="menu">
        <img
          className="menuBtn"
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${"menuItems"} ${menuOpen && "menuOpen"}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className="nav-item">
            <NavLink
              to="/home"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <img
                src={homeSticker}
                alt="Home"
                className="nav-icon"
              />
              <span className="nav-text">Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/diet"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <img
                src={dietSticker}
                alt="Diet"
                className="nav-icon"
              />
              <span className="nav-text">Diet</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/play"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <img
                src={playSticker}
                alt="Play"
                className="nav-icon"
              />
              <span className="nav-text">Play</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/bath"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <img
                src={bathSticker}
                alt="Bath"
                className="nav-icon"
              />
              <span className="nav-text">Bath</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;