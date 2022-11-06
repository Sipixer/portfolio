import React from "react";

const Card = ({ img, title, link, source, blank }) => {
  return (
    <div className="work__card">
      <div className="work__thumbnail">
        <img src={img} className="work__img" />
        <div className="work__mask"></div>
      </div>
      <h3 className="work__title">{title}</h3>
      <a href={link} target={blank ? "_blank" : ""} className="work__button">
        <i className="icon-link work__button-icon"></i>
      </a>
      {source != undefined && (
        <a href={source} target="_blank" className="projet__button">
          <i className="fa-brands fa-github work__button-icon"></i>
        </a>
      )}
    </div>
  );
};

export default Card;
