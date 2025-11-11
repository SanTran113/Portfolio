import { useState } from "react";
import Mask from "../components/Mask";
import Rectangle from "../assets/Rectangle.svg";
import OngawaCover from "../assets/ongawaCover.png";
import SGCover from "../assets/sGCover.png";
import RizzletCover from "../assets/rizzlet.jpg";

function Works() {
  const projectList = [
    {
      name: "Ongawa",
      coverImg: OngawaCover,
      skillsUsed: "Figma",
      link: "https://www.figma.com/proto/OYdtCI9cxpPROI90AUTu2y/New-Ongawa-Website--Copy-?node-id=1729-4523&t=F3UCrZvYIFBYrIPN-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=116%3A2505&show-proto-sidebar=1",
    },
    {
      name: "SpreadGoodness",
      coverImg: SGCover,
      skillsUsed: "Figma, React, TailwindCSS, TypeScript, Firebase",
      link: "https://www.figma.com/proto/KaozpSMjEoZwmjtndTjaNp/SpreadGoodness-New-Mockups--Copy-?node-id=1203-752&p=f&t=GdXHLvtAqOd3EKSS-1&scaling=min-zoom&content-scaling=fixed&page-id=95%3A218&starting-point-node-id=1203%3A752&show-proto-sidebar=1",
    },
    {
      name: "Rizzlet",
      coverImg: RizzletCover,
      skillsUsed: "React, TailwindCSS, TypeScript, AWS, MongoDB",
      link: "https://github.com/Rizzlet/rizzlet",
    },

  ];

  const [project, setProject] = useState(projectList[0]);

  const handleProjectClick = (proj: typeof project) => {
    window.open(proj.link, "_blank");
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 ml-10 mr-10 item-start mt-10 h-[calc(100vh-8rem)]">
      <section className="w-full flex flex-col items-start lg:h-3/4 md:h-1/2">
        <Mask
          maskImage={Rectangle}
          backgroundImage={project.coverImg}
          className="w-full border border-white size-image"
        />
        <div className="text-white text-body mt-5 mb-3 tracking-wide">{project.skillsUsed}</div>
        <hr className="border-b border-white w-full" />
      </section>
      <section className="w-full flex flex-col">
        <div className="text-white text-heading1 font-bold mb-5">Projects</div>
        <ul className="text-heading2 font-medium flex flex-col ml-5 gap-2 lg:gap-5 md:gap-3">
          {projectList.map((proj) => (
            <button
              key={proj.name}
              className="group text-white text-left cursor-pointer hover:text-gray-300 hover:outline-3 hover/see:visible rounded flex flex-row justify-between items-center p-3 lg:p-5"
              onMouseEnter={() => setProject(proj)}
              onClick={() => handleProjectClick(proj)}
            >
              {proj.name}
              <div className="invisible group-hover:visible text-sm text-gray-400 text-body">
                See Project &gt;
              </div>
            </button>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Works;
