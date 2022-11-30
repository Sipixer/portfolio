import Image1 from "../../assets/Portfolio.png";
import Image2 from "../../assets/Défi-Quiz.png";
import Image3 from "../../assets/Beta-QuizzApp.png";
import ReactIcon from "../../assets/icon/react.png";
import CssIcon from "../../assets/icon/css.png";
import NuxtIcon from "../../assets/icon/nuxt.png";
import TypeScriptIcon from "../../assets/icon/typescript.png";
const Projets = [
  {
    img: Image1,
    title: "Sylvain Rougié | Portfolio",
    link: "#",
    blank: false,
    source: "https://github.com/Sipixer/portfolio",
    techs: [ReactIcon, CssIcon],
  },
  {
    img: Image2,
    title: "Défi | Quiz | 2h",
    link: "https://sipixer.github.io/Quiz/",
    blank: true,
    source: "https://github.com/Sipixer/Quiz",
    techs: [ReactIcon, TypeScriptIcon, CssIcon],
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
