import React from "react";
import "./Logo.css";
import { SiCodechef } from "react-icons/si";

export const Logo = () => {
  return (
    <div className="logoContainer">
      <SiCodechef className="logo-icon" />
      <span className="logo-text">Chef SA</span>
    </div>
  );
};
