import { useState } from "react";
import ProjectHeader from "../../components/ProjectHeader";
import { projectList } from "../../data/projectsList";

import SDLowPoly from "../../assets/SorcererDesk/SorcererDeskLowPoly.png";
import SDTopo_Top from "../../assets/SorcererDesk/SorcererDeskTopo_top.png";
import SDTopo_Side from "../../assets/SorcererDesk/SorcererDeskTopo_side.png";
import SDTex_side from "../../assets/SorcererDesk/SorcererDeskTex_side.png";
import SDTex_top from "../../assets/SorcererDesk/SorcererDeskTex_top.png";
import SDFinal from "../../assets/SorcererDesk/SorcerersDeskCover.jpg";

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
      <div className="flex flex-col pl-[15%] pr-[15%]">
        <div className="space-y-[8%] mt-[5%]">

          <section className="text-heading2 text-white font-bold">
            Sculpting
            <img src={SDLowPoly} alt="Sorcerer Desk Low Poly" className="mt-2" />
          </section>

          <section className="text-heading2 text-white font-bold">
            Topology
            <img src={SDTopo_Side} alt="Sorcerer Desk Topology" className="mt-2" />
            <img src={SDTopo_Top} alt="Sorcerer Desk Topology" className="mt-2" />
          </section>

          <section className="text-heading2 text-white font-bold">
            Texture
            <img src={SDTex_side} alt="Sorcerer Desk Texture" className="mt-2" />
            <img src={SDTex_top} alt="Sorcerer Desk Texture" className="mt-2" />
          </section>

          <section className="text-heading2 text-white font-bold">
            Final Render
            <img src={SDFinal} alt="Sorcerer Desk Final Render" className="mt-2" />
          </section>

        </div>
      </div>
    </div>
  );
}

export default SorcererDesk;
