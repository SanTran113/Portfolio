import { useState } from "react";
import ProjectHeader from "../components/ProjectHeader";
import { projectList } from "../data/projectsList";

function SorcererDesk() {
  const [project] = useState(projectList[4]);

  return (
    <div className="w-full mb-[10%]">
      <ProjectHeader
        coverImg={project.coverImg}
        projectName={project.name}
        year={"September 2025 - October 2025"}
        role={"3D Enviroment Modeler"}
        technologies={project.skillsUsed}
      />
    </div>
  );
}

export default SorcererDesk;
