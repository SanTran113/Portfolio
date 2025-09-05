import { useState } from "react";

function HomePage() {
  return (
    <div className="ml-10 mr-10">
      <h1 className="text-7xl font-extrabold text-white mb-10">San Tran</h1>
      <div className="h-[calc(100vh-16rem)] grid grid-cols-2 grid-rows-3 gap-4">
        <div className="row-span-3 flex flex-col space-y-10">
          <section className="space-y-6">
            <p className=" text-lg font-semibold text-gray-300">
              Lorem ipsum dolor sit amet, at elit graece eam, eu recusabo
              deseruisse moderatius vel, cu decore equidem voluptaria eos. No
              fuisset abhorreant nam, ut essent putant usu.
            </p>
            <section className="text-5xl font-bold text-white space-y-5 ">
              <h2 className="">Work</h2>
              <h3 className="">About Me</h3>
              <h4 className="">Contact</h4>
            </section>
          </section>
        </div>
        <div className="col-start-2 row-start-1 row-span-2 border border-white h-3/4"></div>
        <div
          className="col-start-2 row-start-1 place-self-center size-150
                  mask-[url(./assets/paintStroke.png)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] 
                  bg-[url(./assets/leaves.jpeg)] bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
    </div>
  );
}

export default HomePage;
