import { useState } from "react";
import { projectList } from "../../data/projectsList";
import ProjectHeader from "../../components/ProjectHeader";

import game from "../../assets/rizzlet/interactiveGame.png";
import leaderboard from "../../assets/rizzlet/leaderboard.png";
import questionOverview from "../../assets/rizzlet/questionsOverview.png";
import submitQuestion from "../../assets/rizzlet/submitAQuestion.png";

function Rizzlet() {
  const [project] = useState(projectList[2]);

  return (
    <div className="w-full mb-[10%]">
      <ProjectHeader
        coverImg={project.coverImg}
        projectName={project.name}
        year={"January 2024 – June 2024"}
        role={"Software Engineer"}
        technologies={project.skillsUsed}
        description={
          "Rizzlet is a website that gamifies studying and promotes friendly competition." +
          " It aims to help address the procrastination and lack of focus many students face when studying or doing homework by promoting studying in intervals."
        }
      />
      <div className="flex flex-col pl-[15%] pr-[15%]">
        <button
          className="text-body cursor-pointer hover:bg-gray-200 p-2 rounded bg-white text-[#1a1a1a] w-full mt-5 mb-[5%]"
          onClick={() => window.open("https://github.com/Rizzlet/rizzlet")}
        >
          See Github
        </button>
        <div className="space-y-[8%] mt-[5%]">
          <section className="text-heading2 text-white font-bold">
            Personal Main Features Created
            <ul className="list-decimal ml-[4%] text-body font-normal ">
              <li className="mt-2">Form to submit questions</li>
              <li className="mt-2">Question overview based on class</li>
              <li className="mt-2">Leaderboard</li>
              <li className="mt-2">Profile Page</li>
              <li className="mt-2">Character animation on game screen</li>
              <li className="mt-2">Enemy section</li>
              <li className="mt-2">Gaining gold</li>
              <li className="mt-2">Update Player score</li>
            </ul>
          </section>

          <section className="text-heading2 text-white font-bold">
            Question Overview
            <img className="w-full aspect-video mt-2" src={questionOverview} alt="Question Overview" />
          </section>
          <section className="text-heading2 text-white font-bold">
          Submit a Question
          <img className="w-full aspect-video mt-2" src={submitQuestion} alt="Submit Question" />
          </section>
          <section className="text-heading2 text-white font-bold">
            Leaderboard
            <img className="w-full aspect-video mt-2" src={leaderboard} alt="Leaderboard" />
          </section>
          <section className="text-heading2 text-white font-bold">
            Interactive Game
            <img className="w-full aspect-video mt-2" src={game} alt="Interactive Game" />
          </section>


          <section className="text-heading2 text-white font-bold">
            Demo
            <iframe
              className="w-full aspect-video mt-2"
              src="https://drive.google.com/file/d/1PPCdVg5DfeQHbQO9kOBEqcEdnsuLZcRY/preview"
              allowFullScreen
            ></iframe>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Rizzlet;
