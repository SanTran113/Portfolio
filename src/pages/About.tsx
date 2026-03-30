import Mask from "../components/Mask";
import Circle from "../assets/circle_arylic.png";
import Profile from "../assets/profile.jpg";
import Resume from "../assets/resume.pdf";
import { GradientCircle } from "../components/GradientCircle";
import Button from "../components/Button";

function About() {
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
            <p className="text-body">
              I'm a software engineer based in the Los Angeles Area. I enjoy
              creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              build user-friendly and accessible digital experiences.
            </p>
            <div>
              <h1 className="text-heading2 text-white font-bold">Skills</h1>
              {/* TODO: Some of the screens only flex typescript and does not evenly split the lis */}
              <ul className="text-body list-disc list-inside space-y-2 pl-5 flex flex-wrap space-x-5 lg:space-x-20">
                <li className="w-30 lg:w-1/4 xm:w-1/3">JavaScript</li>
                <li className="w-30 lg:w-1/4 xm:w-1/3">React</li>
                <li className="w-30 lg:w-1/4 xm:w-1/3">Node.js</li>
                <li className="w-30 lg:w-1/4 xm:w-1/3">CSS</li>
                <li className="w-30 lg:w-1/4 xm:w-1/3">HTML</li>
                <li className="w-30 lg:w-1/4 xm:w-1/3">TypeScript</li>
              </ul>
            </div>
            <button
              className="text-body cursor-pointer p-2 hover:bg-white hover:text-[#2B2C3C] w-full mb-10 outline-white outline-1"
              onClick={() => window.open(Resume, "_blank")}
            >
              See Resume
            </button>
          </section>
        </div>
      </div>
      <section className="fixed -z-10 -translate-y-210 lg:-translate-x-100 lg:-translate-y-250">
        <GradientCircle />
      </section>
    </>
  );
}

export default About;
