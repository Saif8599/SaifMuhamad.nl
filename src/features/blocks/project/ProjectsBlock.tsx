import React, { useState } from "react";
import RichText from "../../ui/typography/rich-text/RichText";
import useBreakpoints from "../../media-query/useBreakpoints";

export interface ProjectsBlock {
  id: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  image?: string;
}

export interface ProjectsBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  projects: ProjectsBlock[];
}

const ProjectsBlock = (props: ProjectsBlockProps) => {
  const { projects, className = "", ...restProps } = props;
  const { isSm } = useBreakpoints();

  const [selectedProject, setSelectedProject] = useState<ProjectsBlock | null>(
    projects[0]
  );
  const [isImageModalOpen, setImageModalOpen] = useState(false); // State to control modal visibility

  const handleProjectSelection = (project: ProjectsBlock) => {
    setSelectedProject(project);
    if (!isSm) {
      const element = document.getElementById(project.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };
  return (
    <div className={className} {...restProps}>
      <div className="h-full">
        <section className="px-4 md:p-12 ml-0 md:ml-10 pb-10" id="projects">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 md:items-center">
            <div className="w-full md:w-1/2 flex flex-wrap">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`mb-4 w-full md:w-1/2 max-w-xs rounded-lg shadow-md p-4 cursor-pointer ${
                    selectedProject && selectedProject.id === project.id
                      ? "text-red-700 shadow-red-600"
                      : ""
                  }`}
                  onClick={() => handleProjectSelection(project)}
                >
                  <div className="mb-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 object-cover rounded"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                </div>
              ))}
            </div>
            <div
              className="w-full md:w-1/2 max-w-sm h-full"
              style={{ height: "500px" }}
            >
              {selectedProject && (
                <div
                  id={selectedProject.id}
                  className="rounded-lg shadow-md p-4 shadow-red-600"
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full mb-4 h-40 object-cover rounded cursor-pointer"
                    onClick={openImageModal}
                  />
                  <h2 className="text-xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <RichText
                    className="text-sm mt-4"
                    html={selectedProject.description}
                  />
                  {selectedProject.linkText && (
                    <a
                      href={selectedProject.link}
                      className="mt-10 flex justify-center shadow-red-600 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                      {selectedProject.linkText}
                    </a>
                  )}
                </div>
              )}
              {isImageModalOpen && selectedProject && (
                <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
                  <div className="max-w-4xl p-6 bg-black rounded-lg">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full object-contain rounded"
                    />
                    <button
                      onClick={closeImageModal}
                      className="mt-4 block text-center text-white bg-red-600 rounded-lg py-2 px-4 hover:bg-red-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsBlock;
