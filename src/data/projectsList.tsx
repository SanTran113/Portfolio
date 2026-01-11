import OngawaCover from "../assets/ongawa/ongawaCover.png";
import SGCover from "../assets/sGCover.png";
import RizzletCover from "../assets/rizzlet.jpg";
import type { Project } from "./Project";

const projectList: Project[] = [
  {
    name: "Ongawa",
    coverImg: OngawaCover,
    skillsUsed: "Figma",
    link: "/ongawa",
    type: "UI/UX",
    workType: "web",
  },
  {
    name: "SpreadGoodness",
    coverImg: SGCover,
    skillsUsed: "Figma, React, TailwindCSS, TypeScript, Firebase",
    link: "https://www.figma.com/proto/KaozpSMjEoZwmjtndTjaNp/SpreadGoodness-New-Mockups--Copy-?node-id=1203-752&p=f&t=GdXHLvtAqOd3EKSS-1&scaling=min-zoom&content-scaling=fixed&page-id=95%3A218&starting-point-node-id=1203%3A752&show-proto-sidebar=1",
    type: "Frontend",
    workType: "web",
  },
  {
    name: "Rizzlet",
    coverImg: RizzletCover,
    skillsUsed: "React, TailwindCSS, TypeScript, AWS, MongoDB",
    link: "https://github.com/Rizzlet/rizzlet",
    type: "Full Stack",
    workType: "web",
  },
  {
    name: "Butterfly Marionette",
    coverImg: RizzletCover,
    skillsUsed: "React, TailwindCSS, TypeScript, AWS, MongoDB",
    link: "https://github.com/Rizzlet/rizzlet",
    type: "Full Stack",
    workType: "game",
  },
];

export { projectList };
