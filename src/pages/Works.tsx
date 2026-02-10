import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mask from "../components/Mask";
import Rectangle from "../assets/rec_wetAcylic2_lg.png";
import { projectList } from "../data/projectsList";
import type { WorkType } from "../data/WorkType";

function Works() {
  const [work, setWork] = useState<WorkType>("web");
  const [project, setProject] = useState(projectList[0]);
  const navigate = useNavigate();

  const tabClassName = (type: WorkType) => {
    return `w-1/2 cursor-pointer decoration-white decoration-2 underline-offset-6 ${
      work === type ? "underline" : "not-underline"
    }`;
  };

  const handleProjectClick = (proj: typeof project) => {
    const externalLink =
      proj.link.startsWith("http") || proj.link.startsWith("https");
    if (externalLink) {
      window.open(proj.link, "_blank");
      return;
    } else {
      navigate(proj.link);
    }
  };

  return (
    <div className="ml-5 mr-5 lg:ml-10 lg:mr-10 flex flex-col md:flex-row lg:flex-row gap-10 item-start h-[calc(100vh-8rem)]">
      <section className="w-full h-full flex flex-col justify-start items-start overflow-hidden">
        <Mask
          className="w-full size-workImg opacity-100"
          maskImage={Rectangle}
          backgroundImage={project.coverImg}
        />
        <div className="text-white text-body font-semibold mt-5">{project.skillsUsed}</div>
        <hr className="w-full border-gray-300 mt-2 mb-5" />
      </section>
      <section className="w-full flex flex-col overflow-y-auto">
        <div className="text-white text-heading1 font-bold ">Projects</div>
        <div className="w-full text-white text-heading2 font-normal mt-[3%] mb-[3%] flex flex-row ">
          <button
            className={tabClassName("web")}
            onClick={() => setWork("web")}
          >
            Web Dev & Design
          </button>
          <button
            className={tabClassName("game")}
            onClick={() => setWork("game")}
          >
            Game Dev & Design
          </button>
        </div>
        <ul className="flex flex-col ml-5">
          {projectList
            .filter((proj) => proj.workType === work)
            .map((proj) => (
              <button
                key={proj.name}
                className="group text-left cursor-pointer hover:opacity-80 hover:outline-1 hover/see:visible hover:outline-white rounded flex flex-row justify-between items-center p-3 lg:p-4 space-y-1"
                onMouseEnter={() => setProject(proj)}
                onClick={() => handleProjectClick(proj)}
              >
                <h1 className="text-white text-heading2 font-medium">
                  {proj.name}
                </h1>
                <div className="text-gray-300 text-body">{proj.type}</div>
              </button>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default Works;
