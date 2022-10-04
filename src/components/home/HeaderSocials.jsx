import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="mailto:sylvainrougie@orange.fr"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>
      <a
        href="https://github.com/Sipixer/"
        className="home__social-link"
        target="_blank"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
