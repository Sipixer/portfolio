import React from "react";
import Card from "./Card";
import "./portfolio.css";
import Projets from "./Projets";

const Portfolio = () => {
  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Projets</h2>

      <div className="work__container grid">
        {Projets.map(({ id, img, title, link }) => {
          return <Card key={id} img={img} title={title} link={link} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
