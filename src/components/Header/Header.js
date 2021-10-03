import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", href: "/home" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export const Header = () => {
  return (
    <header>
      <div className="logoContainer"></div>
      <nav className="navLinkContainer">
        {links.map((link, index) => (
          <NavLink key={index} to={link.href}>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
