import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center my-12 text-gray-800">
    {title}
  </h2>
);

export default SectionTitle;
