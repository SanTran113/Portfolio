import OngawaCover from "../assets/ongawa/ongawaCover.png";
import SGCover from "../assets/covers/sGCover.png";
import RizzletCover from "../assets/covers/rizzlet.jpg";
import BMCover from "../assets/BMarionette/BMCover.png";
import NinjaPenguCover from "../assets/covers/NinjaPenguCover.png";
import grayScaleGameplay from "../assets/grayscale/grayScaleGameplay.png";
import SDCover from "../assets/sorcererDesk/SorcerersDeskCover.jpg";
import type { Project } from "./Project";

const projectList: Project[] = [
  {
    name: "Ongawa",
    coverImg: OngawaCover,
    skillsUsed: "Figma",
    link: "/web/ongawa",
    type: "UI/UX",
    workType: "web",
    sectionType: ["design"],
  },
  {
    name: "SpreadGoodness",
    coverImg: SGCover,
    skillsUsed: "Figma, React, TailwindCSS, TypeScript, Firebase",
    link: "/web/spreadgoodness",
    type: "Frontend",
    workType: "web",
    sectionType: ["dev", "design"],
  },
  {
    name: "Rizzlet",
    coverImg: RizzletCover,
    skillsUsed: "React, TailwindCSS, TypeScript, Azure, MongoDB",
    link: "/web/rizzlet",
    type: "Full Stack",
    workType: "web",
    sectionType: ["dev"],
  },
  {
    name: "Butterfly Marionette",
    coverImg: BMCover,
    skillsUsed: "Maya, Substance 3D Painter, Arnold",
    link: "/game/butterfly-marionette",
    type: "3D Model and Animation",
    workType: "game",
    sectionType: ["design"],
  },
  {
    name: "Sorcerer's Desk",
    coverImg: SDCover,
    skillsUsed: "Maya, Arnold",
    link: "/game/sorcerer-desk",
    type: "3D Model",
    workType: "game",
    sectionType: ["design"],
  },
  {
    name: "GrayScale",
    coverImg: grayScaleGameplay,
    skillsUsed: "Unity, Procreate",
    link: "https://nnguy239.itch.io/grayscale",
    type: "Puzzle",
    workType: "game",
    sectionType: ["dev"],
  },
  {
    name: "Ninja Penguin",
    coverImg: NinjaPenguCover,
    skillsUsed: "Unity, Procreate",
    link: "https://san-which.itch.io/sr-fish-le-penguin",
    type: "Platformer",
    workType: "game",
    sectionType: ["dev"],
  },
  {
    name: "PolyPlanner Pro",
    coverImg: SGCover,
    skillsUsed: "React, TailwindCSS, TypeScript, AWS, Docker, PostgreSQL",
    link: "/web/polyplannerpro",
    type: "Full Stack",
    workType: "web",
    sectionType: ["dev"],
  },
];

export { projectList };
