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
              Je suis Sylvain Rougié, un développeur Full Stack junior. J'ai un
              peu d'expérience avec mes projets personnels sur dans la
              construction d'une application web de A à Z.
            </p>
            <a className="btn" href="/CV_Sylvain_Rougié.pdf" target="_blank">
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
