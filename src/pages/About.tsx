import Mask from "../components/Mask";
import Circle from "../assets/circle.png";
import Leaves from "../assets/leaves.jpeg";
import Resume from "../assets/resume.pdf";

function About() {
  return (
    <div className="pl-10 pr-10">
      <div className="flex flex-col lg:flex-row items-center overflow-y-hidden gap-10 w-full h-[calc(100vh-6rem)]">
        <section className="w-full lg:w-1/2 md:w-1/2">
          <Mask
            className="w-full"
            maskImage={Circle}
            backgroundImage={Leaves}
          />
        </section>
        <section className="w-full lg:w-1/2 md:w-1/2 text-text-body text-gray-300 space-y-10">
          <h1 className="text-heading1 text-white font-bold">
            Hi, I'm San!
          </h1>
          <p>
            I'm a software engineer based in the Los Angeles Area. I enjoy
            creating things that live on the internet, whether that be websites,
            applications, or anything in between. My goal is to build
            user-friendly and accessible digital experiences.
          </p>
          <button
            className="text-contact cursor-pointer hover:text-gray-300 hover:bg-gray-900 p-2 rounded border border-white text-white w-max"
            onClick={() =>
              window.open(Resume, "_blank")
            }
          >
            See Resume
          </button>
        </section>
      </div>
    </div>
  );
}

export default About;
