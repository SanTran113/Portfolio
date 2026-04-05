import { GradientCircle } from "./GradientCircle";
import ProjectDescriptionItem from "./ProjectDescriptionItem";

function ProjectHeader({
  coverImg,
  projectName,
  year,
  role,
  technologies,
  description,
}: {
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
          src={coverImg}
          className="h-[30vh] w-full object-cover bg-no-repeat"
        />
      </section>
      <div className="flex flex-col space-x-10 pl-[20%] pr-[20%] mt-[5%]">
        <div className="text-white text-heading1 font-bold">{projectName}</div>
        <div className="flex flex-col lg:flex-row space-x-10">
          <div className="flex flex-col space-y-[8%] lg:w-3/5">
            <section className="flex flex-col">
                {ProjectDescriptionItem("Year", year)}
                {ProjectDescriptionItem("My Role", role)}
                {ProjectDescriptionItem("Technologies Used", technologies)}
            </section>
          </div>
          <section className="lg:w-2/5">
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
