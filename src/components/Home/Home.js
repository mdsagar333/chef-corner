import { React, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../App";
import "./Home.css";
import img from "../../kitchen.jpg";
import { SingleCard } from "../SingleCard/SingleCard";

export const Home = () => {
  const { allClasses, loading } = useContext(Context);
  // slicing up classes data for showing in home page
  const popularClasses = allClasses.slice(0, 4);

  return (
    <div className="home-content-container mt-4 container-fluid">
      <section className="home-top d-flex mb-5">
        <div className="home-top_img-container col-md-6">
          <img src={img} alt="kitchen" className="img-fluid" />
        </div>
        <div className="home-top-content col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-white p-2">
          <h1 className="fw-bold">Cooking Is An Art</h1>
          <h5>Do you love cooking? Or do you want to learn how to cook?</h5>
          <p className="custom-letter-spacing">
            Cooking class will help you become a professional!
          </p>
          <Link to="/services">
            <button className="btn home-top-btn"> learn more </button>
          </Link>
        </div>
      </section>

      <section className="popular-cooking-class-container">
        <h2 className="text-center fw-bold pb-4 mb-4 text-capitalize custom-title position-relative">
          Our popular classes
        </h2>
        {/* <span className="custom-underline"></span> */}
        <div className="row container-fulid g-4">
          {popularClasses.map((popularClass) => (
            <SingleCard key={popularClass.id} {...popularClass} column={3} />
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Link to="/services">
            <button className="btn custom-all-classes-btn text-center">
              See All Classes
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
