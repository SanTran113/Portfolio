import { useState } from "react";
import Mask from "../components/Mask";
import Rectangle from "../assets/Rectangle.svg";
import { projectList } from "../data/projects";

function Works() {

  const [project, setProject] = useState(projectList[0]);

  const handleProjectClick = (proj: typeof project) => {
    window.open(proj.link, "_blank");
  };

  return (
    <div className="ml-5 mr-5 lg:ml-10 lg:mr-10 flex flex-col md:flex-row lg:flex-row gap-10 item-start h-[calc(100vh-8rem)]">
      <section className="w-full h-full flex flex-col items-start">
        <Mask
          maskImage={Rectangle}
          backgroundImage={project.coverImg}
          className="w-full h-full border border-white flex items-center position-absolute"
        />
        {/* <div className="text-white text-body mt-5 mb-3 tracking-wide">{project.skillsUsed}</div> */}
        {/* <hr className="border-b border-white w-full" /> */}
      </section>
      <section className="w-full flex flex-col ">
        <div className="text-white text-heading1 font-bold ">Projects</div>
        <ul className="flex flex-col ml-5">
          {projectList.map((proj) => (
            <button
              key={proj.name}
              className="group text-left cursor-pointer hover:opacity-80 hover:outline-1 hover/see:visible hover:outline-white rounded flex flex-row justify-between items-center p-3 lg:p-5"
              onMouseEnter={() => setProject(proj)}
              onClick={() => handleProjectClick(proj)}
            >
              <h1 className="text-white text-heading2 font-medium">{proj.name}</h1>
              <div className="text-gray-300">{proj.type}</div>
            </button>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Works;