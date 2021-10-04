import React from "react";

export const SingleClassSummary = (props) => {
  const { name, price, started, description, image } = props;
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          src={image}
          className="card-img-top img-custom"
          alt={name}
          style={{ maxHeight: 200, objectFit: "cover" }}
        />
        <p className="text-custom">
          <small className="text-muted">{started}</small>
          <span>From {price}</span>
        </p>
        <div className="card-body">
          <h5 className="card-title mb-3">{name}</h5>
          <p className="card-text text-justify">{`${description.substr(
            0,
            150
          )}`}</p>
        </div>
      </div>
    </div>
  );
};

export const SingleClassDetails = (props) => {
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
