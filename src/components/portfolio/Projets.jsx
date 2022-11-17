import Image1 from "../../assets/Portfolio.png";
import Image2 from "../../assets/QR-code.png";
import Image3 from "../../assets/Beta-QuizzApp.png";
import ReactIcon from "../../assets/icon/react.png";
import CssIcon from "../../assets/icon/css.png";
import NuxtIcon from "../../assets/icon/nuxt.png";
const Projets = [
  {
    img: Image1,
    title: "Sylvain Rougié | Portfolio",
    link: "#",
    blank: false,
    source: "https://github.com/Sipixer/portfolio",
    techs: [ReactIcon],
  },
  {
    img: Image2,
    title: "Frontend Mentor | QR code component",
    link: "https://sipixer.github.io/QR-CODE-Mentor/",
    blank: true,
    source: "https://github.com/Sipixer/QR-CODE-Mentor",
    techs: [CssIcon],
  },
  {
    img: Image3,
    title: "Beta | QuizzApp",
    link: "https://quizzapp.sylvainrougie.fr",
    blank: true,
    source: "https://github.com/Sipixer/QuizzApp",
    techs: [NuxtIcon, CssIcon],
  },
];

export default Projets;
