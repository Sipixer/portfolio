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
              Après plusieurs années d'apprentissage autodidacte dans
              l'informatique, je suis actuellement en alternance chez Syloe
              Group tout en poursuivant un mastère en Cloud, Sécurité &
              Infrastructure à Ynov. Ce qui me permet d'approfondir et de
              développer mes compétences chaque jour.
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
