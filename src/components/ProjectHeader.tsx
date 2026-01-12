import Mask from "./Mask";
import rec from "../assets/rec_work.png";
import ProjectDescriptionItem from "./ProjectDescriptionItem";

function ProjectHeader({
  coverImg,
  projectName,
  year,
  role,
  technologies,
}: {
  coverImg: string;
  projectName: string;
  year: string;
  role: string;
  technologies: string;
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
      <div className="flex flex-col pl-[15%] pr-[15%] space-y-[8%] mt-[5%]">
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
    </div>
  );
}

export default ProjectHeader;
