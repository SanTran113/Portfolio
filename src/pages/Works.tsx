import { useState } from "react";
import Mask from "../components/Mask";
import Rectangle from "../assets/Rectangle.svg";
import { projectList } from "../data/projects";

function Works() {

  const [project, setProject] = useState(projectList[0]);

  const handleProjectClick = (proj: typeof project) => {
    window.open(proj.link, "_blank");
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 item-start h-[calc(100vh-8rem)]">
      <section className="w-full h-full flex flex-col items-start">
        <Mask
          maskImage={Rectangle}
          backgroundImage={project.coverImg}
          className="w-full h-full border border-white flex items-center"
        />
        {/* <div className="text-white text-body mt-5 mb-3 tracking-wide">{project.skillsUsed}</div> */}
        {/* <hr className="border-b border-white w-full" /> */}
      </section>
      <section className="w-full flex flex-col ml-10 mr-10">
        <div className="text-white text-heading1 font-bold mb-5">Projects</div>
        <ul className="text-heading2 font-medium flex flex-col ml-5 gap-2 lg:gap-5 md:gap-0">
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
