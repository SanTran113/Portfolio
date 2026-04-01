import { GradientCircle } from "../components/GradientCircle";

function HomePage() {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 h-[calc(100vh-6rem)] p-5 lg:p-10">
        <a
          href="/web"
          className="w-3/4 h-3/4 p-5 outline-1 outline-white text-white text-heading1 flex justify-center items-center hover:bg-white hover:text-[#2B2C3C] cursor-pointer"
        >
          Web Development
        </a>
        <a
          href="/game"
          className="w-3/4 h-3/4 p-5 outline-1 outline-white text-white text-heading1 flex justify-center items-center hover:bg-white hover:text-[#2B2C3C] cursor-pointer"
        >
          Game Development
        </a>
      </div>
      <section className="fixed -z-10 inset-0 -translate-y-130">
        <GradientCircle />
      </section>
    </>
  );
}

export default HomePage;
