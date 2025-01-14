import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="text-4xl font-semibold mt-8 mb-4">{title}</h2>;
};

export default SectionTitle;
