import { useState } from "react";
import ProjectHeader from "../components/ProjectHeader";
import { projectList } from "../data/projectsList";

import BM_eyes from "../assets/BMarionette/BM_eyes.png";
import MFront from "../assets/BMarionette/Marionette_front.png";
import MSide from "../assets/BMarionette/Marionette_side.png";
import BM_sculpt from "../assets/BMarionette/BM_sculpting.png";
import BM_topoFace from "../assets/BMarionette/BM_topologyFace.png";
import BM_topoBody from "../assets/BMarionette/BM_topologyBody.png";
import BM_UVMap from "../assets/BMarionette/BM_UVMap.png";
import musicBox from "../assets/BMarionette/musicBox_UVMap.png";
import MBTex from "../assets/BMarionette/BMTexture.png";
import musicBoxTex from "../assets/BMarionette/musicBoxTexture.png";
import BMLight from "../assets/BMarionette/BMLighting.png";
import BM_Bow from "../assets/BMarionette/BM_bow scene.jpg";
import BM_dance from "../assets/BMarionette/BM_dance_scene.jpg";

function BMarionette() {
  const [proj] = useState(projectList[3]);

  return (
    <div className="w-full mb-[10%]">
      <ProjectHeader
        coverImg={BM_eyes}
        projectName={proj.name}
        year={"September 2025 - December 2025"}
        role="3D Modeler and Animator"
        technologies={proj.skillsUsed}
      />
      <div className="flex flex-col pl-[15%] pr-[15%]">
        <div className="space-y-[8%] mt-[5%]">
          <section className="text-heading2 text-white font-bold">
            Animation
            <iframe
              className="w-full aspect-video mt-2"
              src="https://www.youtube.com/embed/ePNLOM37oxA"
              title="Butterfly Marionette Animation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>

          <section className="text-heading2 text-white font-bold">
            Sketching
            <p className="text-body font-normal">
              For the initial concept, I wanted to convey an etheral sense,
              while also having a hint of a fear factor, hence why the wings
              seem to have eyes. Below I sketched the inital depiction in a
              T-pose for easier modeling.
            </p>
            <img src={MFront} alt="Marionette Front Sketch" className="mt-2" />
            <img src={MSide} alt="Marionette Side Sketch" className="mt-2" />
          </section>

          <section className="text-heading2 text-white font-bold">
            Sculpting & Topology
            <p className="text-body font-normal">
              After sketching, I began modeling the character in a T-poseing
              Maya, and made sure retopologize often. Throughout the process, I
              focused keenly on anatomy, shapes, and proporations.
            </p>
            <div className="flex flex-row mt-2 max-w-1/2">
              {" "}
              <img src={BM_sculpt} alt="Sculpting" className="mt-2" />
              <img src={BM_topoBody} alt="Body Topology" className="mt-2" />
            </div>
            <img src={BM_topoFace} alt="Face Topology" className="mt-2" />
          </section>

          <section className="text-heading2 text-white font-bold">
            UV Mapping
            <p className="text-body font-normal">
              I began by cutting up my model to prepare for the UV unwrapping.
              Inside the UV editor view, I sewed and unfolded to make the UV
              shell flat, for easier texturing in the future. Using the
              checkered feature, I made sure the unwrap could correctly project
              the texture. Lastly, I organize the UV layout by scaling and
              arranging the UV shells. On the left is the UV unwrap of the
              marionette and on the right is the music box.
            </p>
            <div className="flex flex-wrap space-x-2 mt-2 w-full">
              {" "}
              <img src={BM_UVMap} alt="UV Mapping" className="mt-2 max-w-lg" />
              <img
                src={musicBox}
                alt="Music Box UV Mapping"
                className="mt-2 max-w-lg"
              />
            </div>
          </section>

          <section className="text-heading2 text-white font-bold">
            Texturing
            <p className="text-body font-normal">
              For texturing, I used Substance Painter to create the textures for
              the character. I started by baking the mesh maps to get details
              such as ambient occlusion and curvature. Then, I created base
              colors and materials for the character. For the wings, I manually
              went in and painted on the details. Similarly, I painted on the
              details of the eyes. The main texture on the music box was an
              online texture I found online, linked below!
            </p>
            <div className="flex flex-row mt-2 max-w-1/2">
              <img src={musicBoxTex} alt="Music Box Texture" className="mt-2" />
              <img src={MBTex} alt="Marionette Texture" className="mt-2" />
            </div>
            <p>LINK</p>
          </section>

          <section className="text-heading2 text-white font-bold">
            Quick Rig and Posing
            <p className="text-body font-normal">
              Unfortuntly, the quick rig dedected the wings as arms, so I had to
              manually adjust the bones to fit the wings. After adjusting the
              bones, I went into cleaning up the weight painting to ensure
              proper deformation when posing the character.
            </p>
          </section>

          <section className="text-heading2 text-white font-bold">
            Lighting
            <p className="text-body font-normal">
              Lighting was the most difficult for me, as I had to learn
              different lighting techniques that I have not worked with before.
              I played around with the lighting with the goal of having a
              spotlight affect on the marionette, leading to a dramatisized
              3-point lighting. Using ambience occlusion I was able to bring the
              piece to life.
            </p>
            <img src={BMLight} alt="Lighting Setup" className="mt-2" />
          </section>

          <section className="text-heading2 text-white font-bold">
            Animating
            <p className="text-body font-normal">
              For animation I used keyframing in Maya. I started by blocking out
              the main poses, then refining the in-betweens to create a smooth
              motion. I focused on timing and spacing to ensure the animation
              felt natural and expressive.
            </p>
            <img src={BMLight} alt="Lighting Setup" className="mt-2" />
          </section>

          <section className="text-heading2 text-white font-bold">
            Final Rendering
            <img src={BM_Bow} alt="Final Bow Scene" className="mt-2" />
            <img src={BM_dance} alt="Final Dance Scene" className="mt-2" />
          </section>
        </div>
      </div>
    </div>
  );
}
export default BMarionette;
