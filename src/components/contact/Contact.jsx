import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Me contacter</h2>

      <div className="contact__container grid">
        <div className="contact_info">
          <h3 className="contact__title">N'hésité pas a venir me parler.</h3>
          <p className="contact__details">
            Tu peux aussi me contacter directement par{" "}
            <a href="mailto:sylvainrougie@orange.fr">email</a>.
          </p>
        </div>
        <form action="" className="conctact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Prenom - Nom"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Sujet"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="1000"
              rows="10000"
              className="contact__form-input"
              placeholder="Écrit moi ton message"
            ></textarea>
          </div>
          <button className="btn">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default contact;
