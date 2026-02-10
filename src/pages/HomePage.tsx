import Mask from "../components/Mask";
import Paint from "../assets/circle_arylic.png";
import Clouds from "../assets/pinkClouds.jpeg";

function HomePage() {
  return (
    <div className="pl-10 pr-10 overflow-hidden h-[calc(100vh-6rem)]">
      <h1 className="text-title font-extrabold text-white mb-home">San Tran</h1>
      <div className="flex flex-col xm:flex-row lg:flex-row gap-4 h-full">
        <div className="w-full flex flex-col space-y-10">
          <section className="space-y-6">
            <p className="text-body lg:font-semibold text-gray-300">
              Hellow! I'm a developer and designer with a passion for capturing
              life through my projects, whether that be through web or games!
            </p>
            <section className="text-heading1 font-bold text-white">
              <nav className="flex flex-col justify-between ">
                <ul className="">
                  <li>
                    <a href="/works" className="text-white hover:text-gray-300">
                      Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="/aboutme"
                      className="text-white hover:text-gray-300"
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-white hover:text-gray-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
          </section>
        </div>
        <section className="w-full relative h-1/2">
          <Mask
            className="place-self-center size-homeImg inline-block absolute lg:-translate-y-2/5 lg:left-1/12"
            maskImage={Paint}
            backgroundImage={Clouds}
          />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
