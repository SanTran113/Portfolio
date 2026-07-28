import type { Project } from "../data/Project";
import { GradientCircle } from "./GradientCircle";
import ProjectDescriptionItem from "./ProjectDescriptionItem";

function ProjectHeader({
  project,
  year,
  role,
  description,
}: {
  project: Project;
  coverImg: string;
  projectName: string;
  year: string;
  role: string;
  technologies: string;
  description?: string;
}) {
  return (
    <>
      <section className="w-full flex items-center">
        <img
          src={project.coverImg}
          className="h-[30vh] w-full object-cover bg-no-repeat"
        />
      </section>
      <div className="w-full flex flex-col space-x-10 px-[5%] md:px-[10%] lg:px-[20%] mt-[5%]">
        <div className="text-white text-heading1 font-bold">{project.name}</div>
        <div className="w-full flex flex-col md:flex-row lg:flex-row space-x-10">
          <div className="flex flex-col space-y-[8%] md:w-3/5 lg:w-3/5">
            <section className="flex flex-col">
                {ProjectDescriptionItem("Year", year)}
                {ProjectDescriptionItem("My Role", role)}
                {ProjectDescriptionItem("Technologies Used", project.skillsUsed)}
            </section>
          </div>
          <section className="md:w-3/5 lg:w-2/5">
            <p className="text-white text-body font-bold">Description:</p>
            <p className="text-gray-300 text-body font-normal">{description}</p>
          </section>
        </div>
      </div>
      <section className="fixed -z-10 inset-0 -translate-y-50 md:-translate-y-150 lg:-translate-y-300">
        <GradientCircle />
      </section>
    </>
  );
}

export default ProjectHeader;
