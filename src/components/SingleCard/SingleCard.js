import React from "react";
import "./SingleCard.css";

export const SingleCardSummary = (props) => {
  const { name, price, started, description, image } = props;
  return (
    <div className="col-md-3">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top img-custom"
          alt={name}
          style={{ maxHeight: 200, objectFit: "cover" }}
        />
        <p className="text-custom d-flex justify-content-between p-2 bg-dark text-light">
          <small className="text-light">Started: {started}</small>
          <span>
            Price: <span className="custom-color fw-bold">{price}</span>
          </span>
        </p>
        <div className="card-body">
          <h5 className="card-title mb-3">{name}</h5>
          <p className="card-text text-justify">{`${description.substr(
            0,
            150
          )}`}</p>
          <button className="btn mx-auto d-block btn-custom">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export const SingleCardDetails = (props) => {
  const {
    name,
    price,
    started,
    description,
    image,
    teacher,
    courseDuration,
    classDuration,
  } = props;
};
