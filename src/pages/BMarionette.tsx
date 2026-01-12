import { useState } from "react";
import ProjectHeader from "../components/ProjectHeader";
import BMCover from "../assets/covers/BMCover.png";
import { projectList } from "../data/projectsList";

function BMarionette() {
  const [proj] = useState(projectList[3]);

  return (
    <div>
      <ProjectHeader
        coverImg={BMCover}
        projectName={proj.name}
        year={"September 2025 - December 2025"}
        role="3D Modeler and Animator"
        technologies={proj.skillsUsed}
      />
      <div className="flex flex-col pl-[15%] pr-[15%]">
        <div className="space-y-[8%] mt-[5%]">
          <section className="text-heading2 text-white font-bold">
            Animation
          </section>

          <section className="text-heading2 text-white font-bold">
            Sketching
            <p className="text-body font-normal">
              For the initial concept, I wanted to convey an etheral sense,
              while also having a hint of a fear factor, hence why the wings
              seem to have eyes. Below I sketched the inital depiction in a
              T-pose for easier modeling.
            </p>
          </section>

          <section className="text-heading2 text-white font-bold">
            Topology
            <p className="text-body font-normal">
              After sketching, I began modeling the character in a T-posein
              Maya, and made sure retopologize often. Throughout the process, I
              focused keenly on anatomy, shapes, and proporations.
            </p>
          </section>

          <section className="text-heading2 text-white font-bold">
            UV Mapping
            <p className="text-body font-normal">
              I began by cutting up my model to prepare for the UV unwrapping.
              Inside the UV editor view, I sewed and unfolded to make the UV
              shell flat, for easier texturing in the future. Using the
              checkered feature, I made sure the unwrap could correctly project
              the texture. Lastly, I organize the UV layout by scaling and
              arranging the UV shells.
            </p>
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
            <p>LINK</p>
          </section>

          <section className="text-heading2 text-white font-bold">
            Lighting
            <p className="text-body font-normal">
              Lighting was the most difficult for me, as I had to learn
              different lighting techniques that I have not worked with before.
              I played around with the lighting with the goal of having a
              spotlight affect on the marionette. Using ambience occlusion I was
              able to bring the piece to life.
            </p>
          </section>

          <section className="text-heading2 text-white font-bold">
            Final Rendering
          </section>
        </div>
      </div>
    </div>
  );
}
export default BMarionette;
