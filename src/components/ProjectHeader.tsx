import Mask from "./Mask";
import rec from "../assets/rec_work.png";
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
    <div>
      <section className="w-full h-full flex items-center">
        <Mask
          className="w-full size-projectImg opacity-100"
          maskImage={rec}
          backgroundImage={coverImg}
        />
      </section>
      <div className="flex flex-col lg:flex-row space-x-10 pl-[15%] pr-[15%] mt-[5%]">
        <div className="flex flex-col space-y-[8%] lg:w-3/5">
          <section>
            <div className="text-white text-heading1 font-bold">
              {projectName}
            </div>
            <div className="flex flex-col">
              {ProjectDescriptionItem("Year", year)}
              {ProjectDescriptionItem("My Role", role)}
              {ProjectDescriptionItem("Technologies Used", technologies)}
            </div>
          </section>
        </div>
        <section>
          <p className="text-white text-body font-bold">Description:</p>
          <p className="text-white text-body">{description}</p>
        </section>
      </div>
    </div>
  );
}

export default ProjectHeader;
