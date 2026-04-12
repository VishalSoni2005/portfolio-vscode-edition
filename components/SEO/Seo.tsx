import React from "react";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
  keywords?: string[];
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  type = "website",
  name = "Vishal Soni",
  keywords = [],
}) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
    </Helmet>
  );
};
