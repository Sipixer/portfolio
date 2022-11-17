import React from "react";
import "./about.css";
import Avatar from "../../assets/avatar-2.svg";

import { Skills } from "./Skills";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">A propos de moi</h2>

      <div className="about__container grid">
        <img src={Avatar} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Après plusieurs années d'autodidacte dans l'informatique, je suis
              à la recherche d'une entreprise pour une alternance (2 semaines en
              entreprise/1 semaine en cours) débutant le 12 décembre. Pour
              approfondir mes compétences que je développe tous les jours.
            </p>
            <a className="btn" href="/CV_Sylvain_Rougié_FR.pdf" target="_blank">
              Mon CV
            </a>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
