function ProjectDescriptionItem (subtitle: string, description: string) {
    return (
      <div className="flex flex-row items-baseline">
        <div className="text-heading3 text-white font-bold mb-2">
          {subtitle}:
        </div>
        <div className="text-body text-gray-300 ml-2">{description}</div>
      </div>
    );
  }

export default ProjectDescriptionItem ;