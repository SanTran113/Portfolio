import { useState } from "react";
import { projectList } from "../../data/projectsList";
import ProjectHeader from "../../components/ProjectHeader";

import sgSketch1 from "../../assets/spreadgoodness/sgSketch1.jpg";
import sgSketch2 from "../../assets/spreadgoodness/sgSketch2.jpg";
import rippleTrackerM from "../../assets/spreadgoodness/rippleTrackerM.png";
import rippleTrackerW from "../../assets/spreadgoodness/rippleTrackerW.png";
import sgStep1M from "../../assets/spreadgoodness/sgStep1M.png";
import sgStep2M from "../../assets/spreadgoodness/sgStep2M.png";
import sgStep3M from "../../assets/spreadgoodness/sgStep3M.png";
import sgStep4M from "../../assets/spreadgoodness/sgStep4M.png";
import sgStep1W from "../../assets/spreadgoodness/sgStep1W.png";
import sgStep2W from "../../assets/spreadgoodness/sgStep2W.png";
import sgStep3W from "../../assets/spreadgoodness/sgStep3W.png";
import sgNominateM from "../../assets/spreadgoodness/sgNominateM.png";
import sgNominateW from "../../assets/spreadgoodness/sgNominateW.png";
import sgNominateFinM from "../../assets/spreadgoodness/sgNominateFinM.png";
import sgNominateFinW from "../../assets/spreadgoodness/sgNominateFinW.png";
import sgToolboxM from "../../assets/spreadgoodness/sgToolboxM.png";
import sgToolboxW from "../../assets/spreadgoodness/sgToolboxW.png";
import sgMainM from "../../assets/spreadgoodness/sgMainM.png";
import sgMainW from "../../assets/spreadgoodness/sgMainW.png";

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
      <div className="w-full flex flex-col pl-[20%] pr-[20%]">
        <button
          className="text-body cursor-pointer hover:bg-gray-200 p-2 rounded bg-white text-[#1a1a1a] w-full mt-5 mb-[5%]"
          onClick={() =>
            window.open("https://sgc.spreadgoodness.love/demo", "_blank")
          }
        >
          Test Demo
        </button>

        <div className="w-full space-y-[5%] mt-[3%]">
          <section className="text-heading2 text-white font-bold">
            Main Flow
            <p className="text-body font-normal mt-[1%]">
              The main flow of Spread Goodness is to create a post also called
              "starting a challenge." Through starting a new challenge, the user
              is able to start a chain of kindness by sharing something they did
              to spread kindness.
            </p>
          </section>

          <section className="w-full text-heading2 text-white font-bold">
            Inital Sketches
            <p className="text-body font-normal mt-[1%]">
              The main flow of Spread Goodness is to create a post also called
              "starting a challenge." Through starting a new challenge, the user
              is able to start a chain of kindness by sharing something they did
              to spread kindness. Below are the inital sketchs from the ideation
              phase of the project. These sketches were made before my
              onboarding from the founder of Spread Goodness.
            </p>
            <div className="flex flex-row gap-[2%]">
              <img
                src={sgSketch1}
                className="w-1/2 mt-[2%] rounded aspect-auto"
              />
              <img
                src={sgSketch2}
                className="w-1/2 mt-[2%] rounded aspect-auto"
              />
            </div>
          </section>

          <section className="text-heading2 text-white font-bold">
            Important Decisions
            <div className="text-body font-normal mt-[1%]">
              <h1 className="font-bold text-heading3">Colors</h1>
              <p className="mb-[2%]">
                In the orginal design of Spread Goodness, the system design was
                a bold colored border with a pastal color. With the pastal
                colors, the site felt more calm and muted, which was not the
                atmosphere we wanted to convey. We wanted the site to feel fun
                and exciting for the students, which is why we decided to go
                with a white background and pops of color throughout the site.
                This changed the buttons, icons, and cards into soild bold
                colors of pink, blue, yellow, and green. Although, we did keep
                the bold border and pastal background for selected items.
              </p>
            </div>
          </section>

          <section className="text-heading2 text-white font-bold">
            Final Mobile Screens
            <p className="text-body font-normal mt-[1%]">
              Here as a user I spread goodness by helping my friend with thier
              history homework. After sharing and creating a challenge, I can
              nominate others to participate in the challenge, creating a chain
              of kindness.
            </p>
            <div className="flex flex-wrap -mx-2">
              <img
                src={sgStep1M}
                className="sm:w-full md:w-1/2 lg:w-1/3 mt-[2%] px-2 rounded"
              />
              <img
                src={sgStep2M}
                className="sm:w-full md:w-1/2 lg:w-1/3 mt-[2%] px-2 rounded"
              />
              <img
                src={sgStep3M}
                className="sm:w-full md:w-1/2 lg:w-1/3 mt-[2%] px-2 rounded"
              />
              <img
                src={sgStep4M}
                className="sm:w-full md:w-1/2 lg:w-1/3 mt-[2%] px-2 rounded"
              />
              <img
                src={sgNominateM}
                className="sm:w-full md:w-1/2 lg:w-1/3 mt-[2%] px-2 rounded"
              />
              <img
                src={sgNominateFinM}
                className="sm:w-full md:w-1/2 lg:w-1/3 mt-[2%] px-2 rounded"
              />
            </div>
          </section>

          <section className="text-heading2 text-white font-bold">
            Final Web Screens
            <img src={sgStep1W} className="w-full mt-[2%] rounded" />
            <img src={sgStep2W} className="w-full mt-[2%] rounded" />
            <img src={sgStep3W} className="w-full mt-[2%] rounded" />
            <img src={sgNominateW} className="w-full mt-[2%] rounded" />
            <img src={sgNominateFinW} className="w-full mt-[2%] rounded" />
          </section>

          <section className="text-heading2 text-white font-bold">
            Ripple Tracker (All Challenges)
            <p className="text-body font-normal mt-[1%]">
              The Ripple Tracker is a feature that allows users to see all the
              challenges that they have started or contributed to, creating a
              ripple effect of kindness. As shown below, the challenges that the
              users have started are in pink and the ones that they have
              contributed to are in blue. The user can click on each challenge
              to see the details of the challenge and who else has participated
              in the challenge, allowing the user to see the impact of their
              kindness.
            </p>
            <div className="flex flex-wrap -mx-2">
              <img src={rippleTrackerM} className="w-full md:w-1/5 lg:w-1/5 mt-[2%] px-2 rounded"/>
              <img src={rippleTrackerW} className="w-full md:w-4/5 lg:w-4/5 mt-[2%] rounded" />
              <img src={sgMainM} className="w-full md:w-1/5 lg:w-1/5 mt-[2%] px-2 rounded" />
              <img src={sgMainW} className="w-full md:w-4/5 lg:w-4/5 mt-[2%] rounded" />
            </div>
          </section>

          <section className="text-heading2 text-white font-bold">
            Teacher Toolbox
            <p className="text-body font-normal mt-[1%]">
              The Teacher Toolbox allows teachers find materials and resources
              to use in their classrooms. Some of these features include student
              progress, and profanity settings.
            </p>
            <div className="flex flex-wrap -mx-2">
              <img src={sgToolboxM} className="w-full md:w-1/5 lg:w-1/5 mt-[2%] px-2 rounded" />
              <img src={sgToolboxW} className="w-full md:w-4/5 lg:w-4/5 mt-[2%] rounded" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
