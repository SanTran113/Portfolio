function ProjectDescriptionItem (subtitle: string, description: string) {
    return (
      <div className="flex flex-col md:flex-row lg:flex-row items-baseline mb-2">
        <div className="text-heading3 text-white font-bold ">
          {subtitle}:
        </div>
        <div className="text-body text-gray-300 ml-2">{description}</div>
      </div>
    );
  }

export default ProjectDescriptionItem ;