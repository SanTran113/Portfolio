import { useState } from "react";
import Mask from "../components/Mask";
import rec from "../assets/rec_work.png";
import { projectList } from "../data/projects";
import ProjectDescriptionItem from "../components/ProjectDescriptionItem";

function Ongawa() {
  const [project] = useState(projectList[0]);
  const figmaPrototype = (
    <iframe
      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
      width="100%"
      height="500"
      src="https://embed.figma.com/proto/nJMpfKz3RcBumpbSz82F0A/New-Ongawa-Website--Copy-?node-id=2115-4449&p=f&scaling=contain&content-scaling=fixed&page-id=2115%3A4221&starting-point-node-id=2115%3A4449&show-proto-sidebar=1&embed-host=share"
      {...{ allowfullscreen: "" }}
    ></iframe>
  );

  return (
    <div className="w-full mb-[10%]">
      <section className="w-full h-full flex items-center">
        <Mask
          className="w-full size-projectImg opacity-100"
          maskImage={rec}
          backgroundImage={project.coverImg}
        />
      </section>
      <div className="flex flex-col pl-[15%] pr-[15%] space-y-[8%] mt-[5%]">
        <section>
          <div className="text-white text-heading1 font-bold">
            {project.name}
          </div>
          <div className="flex flex-row ">
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
          </div>
        </section>
        <section className="text-heading2 text-white font-bold">
          Preface
          <div className="text-body font-normal mt-[1%]">
            Ongawa is a cutting-edge mobile rhythm game that combines music,
            gaming, and technology! The goal of Ongawa is to provide a platform
            for new and upcoming musicians to showcase their work through
            gaming. By creating beatmaps, the player is able to enjoy both
            gameplay and discover new artists!
          </div>
        </section>
        <section className="text-heading2 text-white font-bold">
          Goals
          <div className="text-body font-normal mt-[1%]">
            This project aims to redesign the offcial Ongawa website.
            <ul className="list-decimal ml-[4%]">
              <li className="mt-2">
                Integrable website into the game - Design more responsive
                screens(Mobile and Web)
              </li>
              <li className="mt-2">Reduce information overload</li>
              <li className="mt-2">
                Regenerate a color palette to match the storyline of the game
              </li>
              <li className="mt-2">
                Create communication between players, musicians, and developers
              </li>
              <li className="mt-2">Bring movement and animation</li>
            </ul>
          </div>
        </section>
        <section className="text-heading2 text-white font-bold">
          Background
          <div className="text-body font-normal mt-[1%]">
            The original Ongawa design was part of a Senior project, having a
            limited time frame constraint. They display only a mobile horizontal
            screen and a purple color palette.
          </div>
        </section>
        <section className="text-heading2 text-white font-bold">
          Aproach
          <div className="text-body font-normal mt-[1%]">
            The client hopes for designs that resemble games such as Muse Dash,
            Cytus II, Deemo II, and VOEZ, while also adhering to
            industry-standard labels. For example, the difficulties of the songs
            would mirror those of OSU, the top competitor in rhythm games. For
            the color palette, we chose a more monochromatic tan tone to match
            the apocalyptic storyline. This also allows the colors of future
            musicians and artists’ beatmaps to shine.
          </div>
        </section>
        <section className="text-heading2 text-white font-bold">
          Final Screens
          <div className="text-body font-normal mt-[1%]"></div>
        </section>
        <section className="text-heading2 text-white font-bold">
          Prototype
          {figmaPrototype}
        </section>
      </div>
    </div>
  );
}

export default Ongawa;
