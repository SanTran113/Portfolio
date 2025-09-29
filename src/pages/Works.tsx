import { useState } from "react";
import Mask from "../components/Mask";
import Rectangle from "../assets/Rectangle.svg";
import OngawaCover from "../assets/ongawaCover.png";
import SGCover from "../assets/SGCover.png";

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
      link: "",
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
        <div className="text-white text-body mt-5">{project.skillsUsed}</div>
        <hr className="border-b border-white w-full" />
      </section>
      <section className="w-full flex flex-col">
        <div className="text-white text-heading1 font-bold mb-5">Projects</div>
        <ul className="text-heading2 space-y-5 font-medium flex flex-col">
          {projectList.map((proj) => (
            <button
              key={proj.name}
              className="group text-white text-left cursor-pointer hover:text-gray-300 hover:bg-gray-900 hover/see:visible p-5 rounded flex flex-row justify-between items-center"
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
