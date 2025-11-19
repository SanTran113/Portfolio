import { useState } from "react";
import Mask from "../components/Mask";
import rec from "../assets/work_rec.png";
import { projectList } from "../data/projects";

function Ongawa() {
  const [project] = useState(projectList[0]);

  return (
    <>
      <div className="flex flex-col justify-start items-center">
        <section className="w-full h-auto overflow-hidden">
          <Mask maskImage={rec} backgroundImage={project.coverImg} />
        </section>
      </div>
      <section className="pl-10 pr-10"></section>
    </>
  );
}

export default Ongawa;
