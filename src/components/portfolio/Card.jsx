import React from "react";

const Card = ({ img, title, link }) => {
  return (
    <div className="work__card">
      <div className="work__thumbnail">
        <img src={img} className="work__img" />
        <div className="work__mask"></div>
      </div>
      <h3 className="work__title">{title}</h3>
      <a href={link} className="work__button">
        <i className="icon-link work__button-icon"></i>
      </a>
    </div>
  );
};

export default Card;
