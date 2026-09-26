import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { projectList } from "../data/projectsList";
import type { WorkType } from "../data/WorkType";
import type { SectionType } from "../data/SectionType";
import { GradientCircle } from "../components/GradientCircle";

const getFilteredProj = (workType: WorkType, sectionType: SectionType) => {
  return projectList
    .filter(
      (proj) =>
        proj.workType === workType && proj.sectionType?.includes(sectionType),
    )
    .sort((a, b) => {
      const getTime = (date: Date | "Current" | undefined) => {
        if (date === "Current") return Infinity;
        if (!date) return -Infinity;
        return date.getTime();
      };
      return getTime(b.endDate) - getTime(a.endDate);
    });
};

function Works() {
  const type = useParams<{ type: WorkType }>();
  const [section, setSection] = useState<SectionType>("dev");

  const [projList, setProjList] = useState(() => {
    return getFilteredProj(type?.type || "web", section);
  });
  const [project, setProject] = useState(projList[0]);
  const navigate = useNavigate();

  const tabClassName = (sectionType: SectionType) => {
    return `cursor-pointer decoration-white decoration-1.5 underline-offset-8 ${
      section === sectionType
        ? "underline text-white font-medium"
        : "not-underline text-white/50 font-normal"
    }`;
  };

  useEffect(() => {
    const filtered = getFilteredProj(type?.type || "web", section);
    setProjList(filtered);
    setProject(filtered[0]);
  }, [type, section]);

  const handleProjectClick = (proj: typeof project) => {
    const externalLink =
      proj.link.startsWith("http") || proj.link.startsWith("https");
    if (externalLink) {
      window.open(proj.link, "_blank");
      return;
    } else {
      navigate(proj.link);
    }
  };

  return (
    <>
      <div className="px-5 lg:px-10 flex flex-col md:flex-row lg:flex-row md:gap-5 lg:gap-10 item-start h-[calc(100vh-8rem)]">
        <section className="flex flex-col flex-1 min-w-0 ">
          <div className="relative w-full min-h-2/5 md:min-h-7/8 lg:min-h-7/8 aspect-video mt-6">
            <AnimatePresence mode="popLayout">
              <motion.img
                className="absolute inset-0 w-full h-full object-cover bg-no-repeat"
                key={project.coverImg}
                src={project.coverImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
              />
            </AnimatePresence>
          </div>
          <div className="text-white text-body font-semibold mt-5">
            {project.skillsUsed}
          </div>
          <hr className="w-full border-gray-300 mt-2 mb-5" />
        </section>
        <section className="flex-1 min-w-0 h-full flex flex-col">
          <div className="text-white text-heading1 font-bold mt-5">
            Projects
          </div>
          <section className="flex flex-row justify-start items-start w-full text-white text-heading3 font-normal gap-8 mt-[3%] mb-[2%]">
            Filter by:{" "}
            <button
              data-cursor-hover
              className={tabClassName("dev")}
              onClick={() => setSection("dev")}
            >
              Development
            </button>
            <button
              data-cursor-hover
              className={tabClassName("design")}
              onClick={() => setSection("design")}
            >
              Design
            </button>
          </section>
          <ul className="flex flex-col gap-3 mb-10">
            {projList.map((proj) => (
              <>
                <button
                  data-cursor-hover
                  key={proj.name}
                  className="text-left cursor-pointer hover:opacity-80 hover:outline-1 hover:outline-white flex flex-row justify-between items-center p-2 lg:p-4"
                  onMouseEnter={() => setProject(proj)}
                  onClick={() => handleProjectClick(proj)}
                >
                  <h1 className="text-white text-heading2 font-medium">
                    {proj.name}
                  </h1>
                  <div className="text-gray-300 text-body">{proj.type}</div>
                </button>
              </>
            ))}
          </ul>
        </section>
      </div>
      <section className="fixed -z-10  inset-0 -translate-y-50 lg:-translate-x-100 lg:-translate-y-200">
        <GradientCircle />
      </section>
    </>
  );
}

export default Works;
