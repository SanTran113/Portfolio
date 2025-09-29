import Mask from "../components/Mask";
import Circle from "../assets/circle.png";
import Leaves from "../assets/leaves.jpeg";
import Resume from "../assets/resume.pdf";

function About() {
  return (
    <div className="pl-10 pr-10">
      <div className="flex flex-col lg:flex-row xm:flex-row items-center gap-10 w-full h-[calc(100vh-6rem)]">
        <section className="w-full lg:w-1/2 xm:w-1/2 md:w-3/4">
          <Mask
            className="w-full"
            maskImage={Circle}
            backgroundImage={Leaves}
          />
        </section>
        <section className="w-full lg:w-1/2 xm:w-1/2 md:w-3/4 text-text-body text-gray-300 space-y-5 lg:space-y-8">
          <h1 className="text-heading1 text-white font-bold">Hi, I'm San!</h1>
          <p>
            I'm a software engineer based in the Los Angeles Area. I enjoy
            creating things that live on the internet, whether that be websites,
            applications, or anything in between. My goal is to build
            user-friendly and accessible digital experiences.
          </p>
          <div>
            <h1 className="text-heading2 text-white font-bold">Skills</h1>
            <ul className="list-disc list-inside space-y-2 pl-5 flex flex-wrap space-x-5 lg:space-x-20">
              <li className="w-32">JavaScript</li>
              <li className="w-32">React</li>
              <li className="w-32">Node.js</li>
              <li className="w-32">CSS</li>
              <li className="w-32">HTML</li>
              <li className="w-32">TypeScript</li>
            </ul>
          </div>
          <button
            className="text-contact cursor-pointer hover:text-gray-300 hover:bg-gray-900 p-2 rounded border border-white text-white w-full"
            onClick={() => window.open(Resume, "_blank")}
          >
            See Resume
          </button>
        </section>
      </div>
    </div>
  );
}

export default About;
