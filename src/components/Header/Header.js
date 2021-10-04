import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

// nav menu data
import { navLinks } from "../../data";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <header className="px-4">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <NavLink className="nav-link link-custom" to={link.href}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
