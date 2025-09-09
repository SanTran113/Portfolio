import { useState } from "react";

function Works() {

  const projectList = [
    {
      name: "Ongawa",
      coverImg: "",
      skillsUsed: "Figma",
    },
    {
      name: "SpreadGoodness",
      coverImg: "",
      skillsUsed: "Figma, React, TailwindCSS, TypeScript, Firebase",
    }
  ];

  const [project, setProject] = useState(projectList[0]);

  return (
    <div className="flex flex-row gap-19">
      <section className="w-1/2 h-3/4 flex flex-col">
        <div className="border border-white h-96">{project.coverImg}</div>
        <div className="text-white text-body">{project.skillsUsed}</div>
      </section>
      <section className="w-1/2 h-3/4 flex flex-col">
        <div className="text-white text-heading1 font-bold mb-5">Projects</div>
        <ul className="text-heading2">
          {projectList.map((proj) => (
            <li
              key={proj.name}
              className="text-white cursor-pointer"
              onMouseEnter={() => setProject(proj)}
            >
              {proj.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Works;
