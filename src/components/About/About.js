import React from "react";

export const About = () => {
  return (
    <div className="container">
      {/* about section text info */}
      <section className="about-section-content">
        <p className="fw-bold text-center mt-3">Become a Masterchef</p>
        <h2 className="custom-title position-relative text-center pb-3">
          Welcome to Chef SA
        </h2>
        <h4 className="mb-4">
          Join the largest Culinary School in Canada. Become the next great
          Chef!
        </h4>
        <p>
          <span className="custom-color fw-bold">Chef SA</span> offers a blend
          of theoretical and experiential education, students gain the skills
          and knowledge to achieve a successful career in today’s culinary and
          food industry. Our culinary learning environments and experiential
          training locations are best-in-class. We also offer extensive
          externship and recruitment opportunities and a Dean’s recognition
          program to help our students grow their skills in real world settings.
          Our commitment to being one of Banglades's best culinary schools has
          led to the launch of our four-year Honours Bachelor of Food Studies
          Degree and our four-year Culinary Management Honours Bachelor Degree.
          These programs are the first of their kind in Bangladesh.
        </p>
      </section>
      {/* about section team */}
      <section className="team-wrapper">
        <h2 className="custom-title position-relative">Our Chef's</h2>
        <p>Meet our professional chef's</p>
        <div className="team-container"></div>
      </section>
    </div>
  );
};
