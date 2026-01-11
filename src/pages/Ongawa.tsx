import { useState, useRef } from "react";
import Mask from "../components/Mask";
import rec from "../assets/rec_work.png";
import { projectList } from "../data/projectsList";
import ProjectDescriptionItem from "../components/ProjectDescriptionItem";
import Gameplay from "../assets/ongawa/ongawaGameplay.png";

function Ongawa() {
  const [project] = useState(projectList[0]);
  const prototypeRef = useRef<HTMLDivElement | null>(null);
  const scrollToPrototype = () => {
    if (prototypeRef.current) {
      prototypeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const figmaPrototype = (
    <iframe
      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
      className="aspect-video"
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
          <div className="flex flex-col">
            {ProjectDescriptionItem("Year", "October 2024 - Current")}
            {ProjectDescriptionItem("My Role", "Designer")}
            {ProjectDescriptionItem("Technologies Used", "Figma")}
            <div className="flex flex-col w-full lg:flex-row lg:gap-5">
              <button
                className="text-body cursor-pointer hover:bg-gray-200 p-2 rounded bg-white text-[#1a1a1a] w-full mt-5"
                onClick={scrollToPrototype}
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
            gaming, and technology! Rhythm games are a genre where the primary
            goal is to tap in time with the beat. The goal of Ongawa is to
            provide a platform for new and upcoming musicians to showcase their
            music through rhythm games. By creating beatmaps, levels in rhythm
            games, the player is able to enjoy both gameplay and discover new
            music artists! To assist musicians in creating beatmaps, Ongawa
            features AI tools to help generate fun beatmaps according to the
            song.
          </div>
        </section>
        <section className="text-heading2 text-white font-bold">
          Goals
          <div className="text-body font-normal mt-[1%]">
            This project aims to redesign the official Ongawa website.
            <ul className="list-decimal ml-[4%]">
              <li className="mt-2">
                Integrable website into the game - Design more responsive
                screens(Mobile and Web)
              </li>
              <li className="mt-2">Reduce information overload</li>
              <li className="mt-2">
                Create a color palette to match the storyline of the game
              </li>
              <li className="mt-2">
                Develop a communication system between players, musicians, and
                developers
              </li>
              <li className="mt-2">Bring movement and animation</li>
            </ul>
            <div className="text-heading3 text-white font-bold mt-[2%]">
              Target Audience:
              <p className="text-body font-normal">
                Upcoming musicians, players who enjoy rhythm games/players who
                want to discover new music while playing
              </p>
            </div>
          </div>
        </section>
        <section className="text-heading2 text-white font-bold">
          Aproach
          <p className="text-body font-normal mt-[1%]">
            The team hopes for designs that resemble games such as Muse Dash,
            Cytus II, Deemo II, and VOEZ. Each of these websites has animation
            as an integral part of the design. Taking inspiration, we
            incorporate these animation aspects into the new Ongawa website.
            Some of these aspects are simple, such as navigation animation, from
            homepage navigation to character animation. Many of the layouts of
            pages were based on these game websites, excluding the following:
            <ul className="list-disc ml-[4%] text-body font-normal mt-[1%] mb-[1%]">
              <li className="mt-2">The community page was inspired by Twitter and Reddit</li>
              <li className="mt-2">The gallery page was inspired by Pinterest</li>
              <li className="mt-2">The header of the Song Page was inspired by Spotify</li>
            </ul>
            By analyzing the previous team’s Figma design, we realized that the
            issue mainly stems from cramming a lot of information into one page.
            To fix this, we focused on breathing room and separating each
            section with a clear subheading.
          </p>
          <div className="text-heading3 text-white font-bold mt-[2%]">
            Color Palette:
            <p className="text-body font-normal">
              The new color palette was established by the game design team,
              which came out to be a monochromatic tan tone to match the
              apocalyptic storyline. Below is the game dev Figma and moodboard
              that was used.
            </p>
          </div>
          <div className="text-heading3 text-white font-bold mt-[2%]">
            Responsive Design:
            <p className="text-body font-normal">
              Each page has a corresponding mobile vertical, mobile horizontal,
              and a web counterpart. Each page was designed for the website
              first, then designed to fit the mobile vertical and mobile
              horizontal, respectively.
            </p>
          </div>
          <img src={Gameplay} alt="approachImg" className="w-full mt-[2%]" />
        </section>
        <section className="text-heading2 text-white font-bold">
          Important Decisions
          <div className="text-body font-normal mt-[1%]">
            <h1 className="font-bold text-heading3">
              Reinventing Difficulty:
            </h1>
            <p className="mb-[2%]">
              In OSU, the difficulty is labeled with each beatmap listed under
              each song (see below). As the song becomes more flexible in terms
              of difficulty, the more the difficulties take room, making it
              difficult for the viewer to look at multiple songs at once when
              deciding which song they may want to download and play. To solve
              this, we have come up with a new way by using a color range, where
              each color coordinates to a difficulty (mirroring OSU’s difficulty
              standard). However, now the website utilizes a color range to
              display the difficulties, making each song layout consistent.
            </p>
            <h1 className="font-bold text-heading3">
              Comments in Community Page:
            </h1>
            <p className="mb-[2%]">
              To minimize horizontal scrolling, replies to comments only have
              one indent. For example, at the bottom, even though QuestComposer
              is replying to The Shadow Weaver, who has replied to Techno
              Maestro, both QuestComposer and The Shadow Weaver have one tab to
              differentiate which comment thread they are in (Techno Maestro’s
              comment thread).
            </p>
            <p className="mb-[2%]"></p>
          </div>
        </section>
        <section
          ref={prototypeRef}
          className="text-heading2 text-white font-bold mt-[1%"
        >
          Prototype
          {figmaPrototype}
        </section>
      </div>
    </div>
  );
}

export default Ongawa;
