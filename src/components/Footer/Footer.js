import React from "react";
import { NavLink } from "react-router-dom";

import { navLinks, socialLinks } from "../../data";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footerTop">
        <Logo />
        <ul className="footer-linkWrapper">
          {navLinks.map((link, index) => (
            <li key={index}>
              {" "}
              <NavLink to={link.href}>{link.name}</NavLink>{" "}
            </li>
          ))}
        </ul>
        <ul className="socialLinksContainer">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.href}> {link.icon} </NavLink>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          This site developed by Mohammed Sagar &copy; 2021. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
