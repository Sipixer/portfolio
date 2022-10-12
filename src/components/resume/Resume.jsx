import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experiences</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map(({ icon, year, title, description }, id) => {
            return (
              <Card
                key={id}
                title={title}
                icon={icon}
                year={year}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Resume;
