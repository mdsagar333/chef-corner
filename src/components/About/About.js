import React from "react";
import { Link } from "react-router-dom";
import { teamLinks, socialLinks } from "../../data";

const style = {
  width: 200,
  height: 200,
  objectFit: "cover",
};

// single team member card component
const TeamCard = (props) => {
  const { name, img, arr, title } = props;
  return (
    <div className="col-md-4">
      <div className="card text-center">
        <img
          src={img}
          className="card-img-top rounded-circle mx-auto mt-3"
          alt={name}
          style={style}
        />
        <div className="card-body">
          <h4 className="title">{name}</h4>
          <p className="card-text">{title}</p>
          <p className="card-text">
            {arr.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="custom-social-link p-2 bg-dark"
              >
                {link.icon}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

// about page component
export const About = () => {
  return (
    <div className="container">
      <section className="about-section-content">
        <h2 className="custom-title position-relative text-center pb-3 fw-bold">
          Welcome to Chef SA
        </h2>
        <h5 className="text-center mb-4 custom-letter-spacing">
          Become a Masterchef
        </h5>
        <h4 className="mb-4">
          Join the largest Culinary School in Canada. Become the next great
          Chef!
        </h4>
        <p className="mb-5">
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
        <h2 className="custom-title position-relative text-center pb-3 mt-4 fw-bold">
          Our Chef's
        </h2>
        <h5 className="text-center custom-letter-spacing mb-4">
          Meet our professional chef's
        </h5>
        <div className="team-container row">
          {teamLinks.map((team, index) => (
            <TeamCard key={index} {...team} arr={socialLinks}></TeamCard>
          ))}
        </div>
      </section>
    </div>
  );
};
