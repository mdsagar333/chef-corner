import React from "react";
import { Link } from "react-router-dom";

import "./SingleCard.css";

export const SingleCard = (props) => {
  const { name, price, started, description, image, column, id } = props;
  return (
    <div className={`col-md-${column !== undefined ? column : "4"}`}>
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top img-custom"
          alt={name}
          style={{ height: 250, objectFit: "cover" }}
        />
        <p className="text-custom d-flex justify-content-between p-2 bg-dark text-light">
          <small className="text-light">Started: {started}</small>
          <span>
            Price: <span className="custom-color fw-bold">{price}</span>
          </span>
        </p>
        <div className="card-body">
          <h5 className="card-title mb-3 fw-bold">{name}</h5>
          <p className="card-text text-justify mb-4 custom-single-card-para">
            {`${description.substr(0, 150)}`}...
          </p>
          <Link
            className="btn mx-auto d-block btn-custom"
            to={`/services/${id}`}
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};
