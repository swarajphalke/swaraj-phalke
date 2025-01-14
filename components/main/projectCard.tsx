import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

interface IProject {
  id: number;
  type: string;
  name: string;
  tech: string[];
  description: string[];
  links: {
    live: string;
    github: string;
  };
  image: string;
}

function ProjectCard({ project }: { project: IProject }) {
  return (
    <div className="flex flex-col md:flex-row bg-gray-500/20 rounded-lg overflow-hidden shadow-lg">
      <div className="md:w-1/3 w-full">
        <img
          className="object-cover w-full h-full"
          src={`/images/projects/${project.image}`}
          alt={project.name}
        />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-black text-white mb-2">{project.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{project.type}</p>
        <p className="text-gray-300 mb-">{project?.description[0]}</p>
        <p className="text-gray-300 mb-4">{project?.description[1]}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="md:w-1/6 p-6 flex flex-row md:flex-col justify-center items-center gap-4">
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors w-full"
        >
          <IconExternalLink className="w-4 h-4 mr-2" />
          Live Demo
        </a>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors w-full"
        >
          <IconBrandGithub className="w-4 h-4 mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
