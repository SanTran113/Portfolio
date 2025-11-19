import { useState } from "react";
import Mask from "../components/Mask";
import rec from "../assets/rec_work.png";
import { projectList } from "../data/projects";
import ProjectDescriptionItem from "../components/ProjectDescriptionItem";

function Ongawa() {
  const [project] = useState(projectList[0]);

  return (
    <div className="flex flex-col w-full gap-10">
      <section className="w-full h-full flex items-center">
        <Mask
          className="w-full size-projectImg opacity-100"
          maskImage={rec}
          backgroundImage={project.coverImg}
        />
      </section>
      <div className="pl-[15%] pr-[15%] gap-10">
        <div className="text-white text-heading1 font-bold mb-5">
          {project.name}
        </div>
        <section className="flex flex-row ">
          <div className="flex flex-col">
            {ProjectDescriptionItem("Year", "October 2024 - November 2025")}
            {ProjectDescriptionItem("My Role", "Designer")}
            {ProjectDescriptionItem("Technologies Used", "Figma")}
            <button
              className="text-body cursor-pointer hover:bg-gray-200 p-2 rounded bg-white text-[#1a1a1a] w-full mt-5"
              onClick={() => ""}
            >
              Test Prototype
            </button>
          </div>
          <div className="flex flex-col"></div>
        </section>
        <section className="text-heading2 text-white font-bold mb-5">
          Preface
        </section>
      </div>
    </div>
  );
}

export default Ongawa;
