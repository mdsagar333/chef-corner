import { React, useContext } from "react";
import { Context } from "../../App";
import img from "../../kitchen.jpg";
import { SingleClassSummary } from "../SingleClass/SingleClass";

export const Home = () => {
  const data = useContext(Context);
  // slicing up classes data for showing in home page
  const popularClasses = data.slice(0, 4);

  return (
    <div className="home-content-container">
      <section className="home-top">
        <div className="home-top_img-container">
          <img src={img} alt="kitchen" />
        </div>
        <div className="home-top-co">
          <h1>Cooking Is An Art</h1>
          <h5>Do you love cooking? Or do you want to learn how to cook?</h5>
          <p>Cooking class will help you become a professional!</p>
          <button className="btn"> learn more </button>
        </div>
      </section>

      <section className="popular-cooking-class-container">
        <div className="row px-4">
          {popularClasses.map((popularClass) => (
            <SingleClassSummary key={popularClass.id} {...popularClass} />
          ))}
        </div>
      </section>
    </div>
  );
};
