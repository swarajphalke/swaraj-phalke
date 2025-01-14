import SectionTitle from "@/components/main/SectionTitle";
import React from "react";
import { ProjectsData } from "../constants";
import ProjectCard from "@/components/main/projectCard";

const page: React.FC = () => {
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="container">
        <div className="space-y-4">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
