import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectList } from "../data/projectsList";
import type { WorkType } from "../data/WorkType";
import type { SectionType } from "../data/SectionType";

function Works() {
  const type = useParams<{ type: WorkType }>();
  const [section, setSection] = useState<SectionType>("dev");
  const [project, setProject] = useState(projectList[0]);
  const navigate = useNavigate();

  const tabClassName = (sectionType: SectionType) => {
    return `w-1/2 cursor-pointer decoration-white decoration-2 underline-offset-6 ${
      section === sectionType ? "underline" : "not-underline"
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
      <section className="flex flex-col w-full ">
        <img
          className="pt-6 w-full min-h-2/5 lg:min-h-7/8 object-cover bg-no-repeat"
          src={project.coverImg}
        />
        <div className="text-white text-body font-semibold mt-5">
          {project.skillsUsed}
        </div>
        <hr className="w-full border-gray-300 mt-2 mb-5" />
      </section>
      <section className="w-full h-full flex flex-col lg:overflow-y-auto">
        <div className="text-white text-heading1 font-bold mt-5">Projects</div>
        <div className="w-full text-white text-heading2 font-normal mt-[3%] mb-[3%] flex flex-row ">
          <button
            className={tabClassName("dev")}
            onClick={() => setSection("dev")}
          >
            Development
          </button>
          <button
            className={tabClassName("design")}
            onClick={() => setSection("design")}
          >
            Design
          </button>
        </div>
        <ul className="flex flex-col ml-5">
          {projectList
            .filter(
              (proj) =>
                proj.workType === (type?.type || "web") &&
                proj.sectionType?.includes(section),
            )
            .map((proj) => (
              <button
                key={proj.name}
                className="group text-left cursor-pointer hover:opacity-80 hover:outline-1 hover/see:visible hover:outline-white flex flex-row justify-between items-center p-3 lg:p-4 space-y-1"
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
