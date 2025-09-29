import Mask from "../components/Mask";
import Paint from "../assets/paintStroke.png";
import Leaves from "../assets/leaves.jpeg";

function HomePage() {
  return (
    <div className="pl-10 pr-10 overflow-hidden h-[calc(100vh-6rem)]">
      <h1 className="text-title font-extrabold text-white mb-home">San Tran</h1>
      {/* TODO: Make grid more dynamic */}
      <div className="flex flex-col xm:flex-row lg:flex-row gap-4 h-full">
        <div className="w-full flex flex-col space-y-10">
          <section className="space-y-6">
            <p className= "text-body font-semibold text-gray-300">
              Lorem ipsum dolor sit amet, at elit graece eam, eu recusabo
              deseruisse moderatius vel, cu decore equidem voluptaria eos. No
              fuisset abhorreant nam, ut essent putant usu.
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
          <div className="w-full border border-white h-3/4"></div>
          <Mask
            className="place-self-center size-homeImg inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/5"
            maskImage={Paint}
            backgroundImage={Leaves}
          />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
