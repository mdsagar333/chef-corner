import { React, useContext } from "react";
import { Context } from "../../App";
import "./Home.css";
import img from "../../kitchen.jpg";
import { SingleCardSummary } from "../SingleCard/SingleCard";

export const Home = () => {
  const data = useContext(Context);
  // slicing up classes data for showing in home page
  const popularClasses = data.slice(0, 4);

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
          <button className="btn home-top-btn"> learn more </button>
        </div>
      </section>

      <section className="popular-cooking-class-container">
        <h2 className="text-center fw-bold pb-4 mb-4 text-capitalize custom-title position-relative">
          Our popular classes
        </h2>
        {/* <span className="custom-underline"></span> */}
        <div className="row px-4">
          {popularClasses.map((popularClass) => (
            <SingleCardSummary key={popularClass.id} {...popularClass} />
          ))}
        </div>
      </section>
    </div>
  );
};
