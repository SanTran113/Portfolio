import Mask from "../components/Mask";
import Paint from "../assets/paintStroke.png";
import Leaves from "../assets/leaves.jpeg";

function HomePage() {
  return (
    <div className="ml-10 mr-10 overflow-hidden">
      <h1 className="text-title font-extrabold text-white mb-home">San Tran</h1>
      {/* TODO: Make grid more dynamic */}
      <div className="h-[calc(100vh-25rem)] grid grid-cols-2 grid-rows-3 gap-4">
        <div className="row-span-3 flex flex-col space-y-10">
          <section className="space-y-6">
            <p className=" text-body font-semibold text-gray-300">
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
                <div></div>
              </nav>
            </section>
          </section>
        </div>
        <div className="col-start-2 row-start-1 row-span-2 border border-white h-3/4"></div>
        <Mask
          className="col-start-2 row-start-1 place-self-center size-image"
          maskImage={Paint}
          backgroundImage={Leaves}
        />
      </div>
    </div>
  );
}

export default HomePage;
