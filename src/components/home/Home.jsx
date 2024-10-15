import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/avatar-1.svg";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Sylvain Rougié</h1>
        <span className="home__education">
          Ingénieur Cloud, Sécurité & Infrastructure <br /> Avec compétences en
          Développement Full Stack
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Me contacter
        </a>
      </div>
    </section>
  );
};

export default Home;
