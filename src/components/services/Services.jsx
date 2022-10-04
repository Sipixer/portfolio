import React from "react";
import "./services.css";

const data = [
  {
    id: 1,
    title: "Integration Web",
    description:
      "Integration d'un site web ou d'une application web a partir d'une maquette.",
  },
  {
    id: 2,
    title: "Création d'une Web App",
    description:
      "A partir d'un concept ou d'une idée possibilité de créer une application web en partant du back-end jusqu'a l'ui design.",
  },
  {
    id: 3,
    title: "Back-end",
    description:
      "Mise en place d'un environement de developpement sein pour votre projet avec un CI/CD performant.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Mes Services</h2>
      <div className="services__container grid">
        {data.map(({ id, title, description }) => {
          return (
            <div key={id} className="services__card">
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
