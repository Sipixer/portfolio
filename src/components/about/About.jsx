import React from "react";
import "./about.css";
import Avatar from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">A propos de moi</h2>

      <div className="about__container grid">
        <img src={Avatar} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Je suis Sylvain Rougié, un developpeur Full Stack junior. J'ai un
              peu d'experience avec mes projets personnels sur dans la
              construction d'une application web de A à Z.
            </p>
            <a className="btn" href="/CV_Sylvain_Rougié.pdf" target="_blank">
              Mon CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills_percentage js"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML / CSS</h3>
                <span className="skills__number">75%</span>
              </div>
              <div className="skills__bar">
                <span className="skills_percentage html__css"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__number">40%</span>
              </div>
              <div className="skills__bar">
                <span className="skills_percentage ui__design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
