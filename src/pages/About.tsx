import Mask from "../components/Mask";
import Circle from "../assets/circle.png";
import Leaves from "../assets/leaves.jpeg";

function About() {
  return (
    <div className="ml-10 mr-10">
      <div className="flex flex-col lg:flex-row items-start overflow-y-hidden gap-10 ">
        <section className="w-full lg:w-1/2 md:w-1/2">
          <Mask
            className="h-[50vh]"
            maskImage={Circle}
            backgroundImage={Leaves}
          />
        </section>
        <section className="w-full mb-6 text-text-body text-gray-300">
          <h1 className="text-heading1 text-white font-bold mb-6">Hi, I'm San!</h1>
          <p>
            I'm a software engineer based in the Los Angeles Area. I enjoy
            creating things that live on the internet, whether that be websites,
            applications, or anything in between. My goal is to build
            user-friendly and accessible digital experiences.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
