import { React, useContext } from "react";
import "./SingleCardDetails.css";
import { useParams, useHistory } from "react-router-dom";
import { Context } from "../../App";

export const SingleCardDetails = () => {
  // destructuring url parameter
  const { id } = useParams();
  const history = useHistory();

  const { allClasses, loading } = useContext(Context);
  const dataObj = allClasses.find((el) => el.id === id);

  const handleClick = () => {
    history.push("/book-class");
  };

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const {
    name,
    price,
    started,
    description,
    image,
    teacher,
    courseDuration,
    classDuration,
  } = dataObj;
  return (
    <div className="singleCardDetails-container container mt-4">
      <section className="img-container mb-4">
        <img src={image} alt={name} className="img-fluid" />
      </section>
      <article className="singleCardDetails-info row mt-5">
        <div className="inf-left col-md-7 col-sm-12">
          <p className="singleCardDetails-description">{description}</p>
        </div>
        <div className="inf-right col-md-4 col-sm-12">
          <h4 className="fw-bold mb-4">Class Details</h4>
          <ul>
            <li className="cardDetails-items d-flex justify-content-between mb-3 fw-bold">
              <span>Teacher:</span>{" "}
              <span className="custom-color">{teacher}</span>
            </li>
            <li className="cardDetails-items d-flex justify-content-between mb-3 fw-bold">
              <span>Price:</span> <span className="custom-color">{price}</span>
            </li>
            <li className="cardDetails-items d-flex justify-content-between mb-3 fw-bold">
              <span>Starting Date:</span>{" "}
              <span className="custom-color">{started}</span>
            </li>
            <li className="cardDetails-items d-flex justify-content-between mb-3 fw-bold">
              <span>Course Duration:</span>{" "}
              <span className="custom-color">{courseDuration} days</span>
            </li>
            <li className="cardDetails-items d-flex justify-content-between mb-3 fw-bold">
              <span>Class Duration:</span>{" "}
              <span className="custom-color">{classDuration} hours</span>
            </li>
          </ul>
        </div>
      </article>
      <button className="btn btn-custom mt-5" onClick={handleClick}>
        Join The Class
      </button>
    </div>
  );
};
