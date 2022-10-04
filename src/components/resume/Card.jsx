import React from "react";

const Card = ({ icon, year, title, description }) => {
  return (
    <div className="timeline__item">
      <i className={"timeline__icon " + icon}></i>
      <span className="timeline__date">{year}</span>
      <h3 className="timeline__title">{title}</h3>
      <p className="timeline__text">{description}</p>
    </div>
  );
};
export default Card;
