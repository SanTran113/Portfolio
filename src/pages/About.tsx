import { useParams } from "react-router-dom";
import Mask from "../components/Mask";
import Circle from "../assets/circle_arylic.png";
import Profile from "../assets/profile.jpg";
import SERes from "../assets/SE Resume.pdf";
import GameRes from "../assets/Games Resume.pdf";
import { GradientCircle } from "../components/GradientCircle";
import type { WorkType } from "../data/WorkType";

function About() {
  const type = useParams<{ type: WorkType }>();

  function getBio() {
    if (type?.type === "web") {
      return (
        <p className="text-body">
          I'm a software engineer based in the Los Angeles Area. I enjoy
          creating things that live on the internet, whether that be websites,
          applications, or anything in between. My goal is to build
          user-friendly and accessible digital experiences.
        </p>
      );
    } else if (type?.type === "game") {
      return (
        <p className="text-body">
          I'm a game developer based in the Los Angeles Area. I enjoy
          makeing games and interactive experiences that are engaging and fun. 
          My goal is to create games that are not only enjoyable to play, but also visually
          appealing and immersive!
        </p>
      );
    }
  }

  function getSkills() {
    if (type?.type === "web") {
      return (
        <ul className="text-body list-disc list-inside space-y-2 pl-5 flex flex-wrap space-x-5 lg:space-x-20">
          <li className="w-30 lg:w-1/4 xm:w-1/3">JavaScript</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">React</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">Node.js</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">CSS</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">HTML</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">TypeScript</li>
        </ul>
      );
    } else if (type?.type === "game") {
      return (
        <ul className="text-body list-disc list-inside space-y-2 pl-5 flex flex-wrap space-x-5 lg:space-x-20">
          <li className="w-30 lg:w-1/4 xm:w-1/3">C#</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">C++</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">Unity</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">Unreal</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">Blender</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">Maya</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">Substance Painter</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">Adobe Photoshop</li>
          <li className="w-30 lg:w-1/4 xm:w-1/3">Adobe Illustrator</li>
        </ul>
      );
    }
  }

  function getResumeLink() {
    if (type?.type === "web") {
      return SERes;
    } else if (type?.type === "game") {
      return GameRes;
    }
  }

  return (
    <>
      <div className="pl-10 pr-10">
        <div className="flex flex-col lg:flex-row xm:flex-row items-center lg:gap-10 xm:gap-5 w-full lg:h-[calc(100vh-6rem)]">
          <section className="w-full h-full lg:w-2/5 xm:w-2/5 md:w-3/4 flex justify-center items-center">
            <Mask
              className="w-full size-aboutImg"
              maskImage={Circle}
              backgroundImage={Profile}
            />
          </section>
          <section className="w-full lg:w-1/2 xm:w-1/2 md:w-3/4 text-text-body text-gray-300 space-y-5 lg:space-y-8">
            <h1 className="text-heading1 text-white font-bold">Hi, I'm San!</h1>
            {getBio()}
            <div>
              <h1 className="text-heading2 text-white font-bold">Skills</h1>
              {getSkills()}
            </div>
            <button
              className="text-body cursor-pointer p-2 hover:bg-white hover:text-[#2B2C3C] w-full mb-10 outline-white outline-1"
              onClick={() => window.open(getResumeLink(), "_blank")}
            >
              See Resume
            </button>
          </section>
        </div>
      </div>
      <section className="fixed -z-10 inset-0 -translate-y-0 lg:-translate-x-120 lg:-translate-y-70">
        <GradientCircle />
      </section>
    </>
  );
}

export default About;
