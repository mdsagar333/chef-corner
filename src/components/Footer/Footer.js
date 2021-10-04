import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
// navbar and social links data
import { navLinks, socialLinks } from "../../data";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footerTop d-flex flex-column align-items-start flex-md-row justify-content-between p-4 mt-5 ">
        <Logo />
        <ul className="footer-linkWrapper nav flex-column">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.href} className="footer-nav-link">
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="socialLinksContainer d-flex my-3">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.href} className="custom-social-link px-1">
                {link.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <small className="text-light text-center p-2 d-block">
          This site developed by Mohammed Sagar &copy; 2021. All Rights Reserved
        </small>
      </div>
    </footer>
  );
};
