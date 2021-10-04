import { React, useContext } from "react";
import { Context } from "../../App";
import { SingleCard } from "../SingleCard/SingleCard";

export const Services = () => {
  const { allClasses, loading } = useContext(Context);
  return (
    <div className="cookingClassesContainer mt-5">
      <h5 className="text-center custom-letter-spacing pb-4 custom-title position-relative">
        Our Best Cooking Classes
      </h5>
      <h1 className="text-center fw-bold mb-5">Choose Your Class</h1>
      <div className="row g-4 container-fluid">
        {allClasses.map((el) => (
          <SingleCard key={el.id} {...el}></SingleCard>
        ))}
      </div>
    </div>
  );
};
