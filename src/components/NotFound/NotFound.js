import React from "react";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="custom-notFound-container d-flex justify-content-center align-items-center">
      <section className="text-center">
        <h2 className="custom-heading">404</h2>
        <p className="fw-bold custom-color">
          Opps, the page you are looking for is not available.
        </p>
      </section>
    </div>
  );
};
