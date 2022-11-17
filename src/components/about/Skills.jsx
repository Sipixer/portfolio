import "./skills.css";
import { Badge } from "../utils/Badge";

import TypescriptIcon from "../../assets/icon/typescript.png";
import CssIcon from "../../assets/icon/css.png";
import NodeIcon from "../../assets/icon/nodejs.png";
import GithubIcon from "../../assets/icon/github.png";
import ReactIcon from "../../assets/icon/react.png";
import SvelteIcon from "../../assets/icon/svelte.png";
import NuxtIcon from "../../assets/icon/nuxt.png";
import ExpressIcon from "../../assets/icon/express.png";
export const Skills = () => {
  const Skills = [
    {
      icon: TypescriptIcon,
      name: "Typescript",
    },
    {
      icon: CssIcon,
      name: "CSS",
    },
    {
      icon: NodeIcon,
      name: "NodeJs",
    },
    {
      icon: GithubIcon,
      name: "Github",
    },
    {
      icon: ReactIcon,
      name: "React",
    },

    {
      icon: SvelteIcon,
      name: "Svelte",
    },
    {
      icon: NuxtIcon,
      name: "Nuxt",
    },

    {
      icon: ExpressIcon,
      name: "Express",
    },
  ];
  return (
    <div className="skills">
      <h3 className="skillstitle">Skills</h3>
      <div className="skill__liste">
        {Skills.map((skills) => (
          <Badge key={skills.name} icon={skills.icon}>
            {skills.name}
          </Badge>
        ))}
      </div>
    </div>
  );
};
