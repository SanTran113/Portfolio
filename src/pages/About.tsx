import { useState } from "react";

function About() {
  return (
    <div className="text-red-500">
      <div
        className="size-120 
                  mask-[url(./assets/paintStroke.png)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] 
                  bg-[url(./assets/leaves.jpeg)] bg-cover bg-center bg-no-repeat"
      ></div>
    </div>
  );
}

export default About;
