import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const contact = () => {
  const form = useRef();

  function SendForm(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_krled0c",
        "template_civiz09",
        {
          Sujet: form.current[2].value,
          message: form.current[3].value,
          from_user: form.current[0].value,
          from_mail: form.current[1].value,
        },
        "5V88RMOMZTwuDn_0z"
      )
      .then(
        (result) => {
          alert("mail envoyé: " + result.text);
          window.location.reload();
        },
        (error) => {
          alert(
            "Erreur lors de l'envoie du form... contacté moi directement via votre mail."
          );
          window.location.reload();
        }
      );
  }
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
        <form
          action=""
          ref={form}
          onSubmit={SendForm}
          className="conctact__form"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Prenom - Nom"
                required
              />
            </div>
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="E-mail"
                required
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Sujet"
              required
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="1000"
              rows="10000"
              className="contact__form-input"
              placeholder="Ton message"
              required
            ></textarea>
          </div>
          <button className="btn">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default contact;
