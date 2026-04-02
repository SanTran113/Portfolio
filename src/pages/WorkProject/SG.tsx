import { useState } from "react";
import { projectList } from "../../data/projectsList";
import ProjectHeader from "../../components/ProjectHeader";

import sgMain1 from "../../assets/spreadgoodness/sgMain1.png";
import sgMain2 from "../../assets/spreadgoodness/sgMain2.png";
import sgMain3 from "../../assets/spreadgoodness/sgMain3.png";
import sgMain4 from "../../assets/spreadgoodness/sgMain4.png";
import sgMain5 from "../../assets/spreadgoodness/sgMain5.png";
import sghome from "../../assets/spreadgoodness/sghome.png";

export default function SG() {
  const [project] = useState(projectList[1]);

  return (
    <div className="w-full mb-[10%]">
      <ProjectHeader
        coverImg={project.coverImg}
        projectName={project.name}
        year={"August 2024 - Current"}
        role={"Web Developer"}
        technologies={project.skillsUsed}
        description="Our low-lift web-app encourages students to do something kind and unexpected for someone, share what they’ve done on our online platform, and nominate others to participate."
      />
      <div className="flex flex-col pl-[15%] pr-[15%]">
        <button
          className="text-body cursor-pointer hover:bg-gray-200 p-2 rounded bg-white text-[#1a1a1a] w-full mt-5 mb-[5%]"
          onClick={() =>
            window.open("https://sgc.spreadgoodness.love/demo", "_blank")
          }
        >
          Test Demo
        </button>

        <div className="space-y-[8%] mt-[5%]">
          <section className="text-heading2 text-white font-bold">
            Main Flow
            <p className="text-body font-normal mt-[1%]">
              The main flow of Spread Goodness is to create a post also called
              "starting a challenge." Through starting a new challenge, the user
              is able to start a chain of kindness by sharing something they did
              to spread kindness. So, here as a user I shared that I gave a
              friend a gift that reminded me of them. After sharing and creating
              a challenge, I can nominate others to participate in the
              challenge, creating a chain of kindness.
            </p>
            <img src={sgMain1} className="w-full mt-[2%] rounded" />
            <img src={sgMain2} className="w-full mt-[2%] rounded" />
            <img src={sgMain3} className="w-full mt-[2%] rounded" />
            <img src={sgMain4} className="w-full mt-[2%] rounded" />
            <img src={sgMain5} className="w-full mt-[2%] rounded" />
            <img src={sghome} className="w-full mt-[2%] rounded" />
          </section>

          <section className="text-heading2 text-white font-bold">
            Ripple Tracker (All Challenges)
          </section>

          <section className="text-heading2 text-white font-bold">
            Teacher Toolbox
          </section>
        </div>
      </div>
    </div>
  );
}
