import { useState } from "react";

function HomePage() {
  return (
    <div className="h-screen grid grid-cols-3 grid-rows-4 gap-4">
      <div className="col-span-3 grid grid-rows-3 text-red-500">
        <div className="bg-gray-800 col-span-3 row-start-2">nav</div>
      </div>
      <div className="col-span-2 row-span-2">
        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold text-white">San Tran</h1>
          <p className="text-lg font-bold text-gray-300">Lorem ipsum dolor sit amet, at elit graece eam, eu recusabo deseruisse moderatius vel, cu decore equidem voluptaria eos. No fuisset abhorreant nam, ut essent putant usu. </p>
          <h2 className="text-3xl font-bold text-white">Work</h2>
          <h2 className="text-3xl font-bold text-white">About Me</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
