import React from "react";
import { Seo } from "../SEO/Seo";

export const ContactTab: React.FC = () => {
  return (
    <div className="p-4 h-full overflow-y-auto font-mono text-sm leading-6">
      <Seo
        title="Contact Me - Vishal Soni"
        description="Get in touch with Vishal Soni, Full Stack Developer."
        keywords={["Contact", "Vishal Soni", "Email", "LinkedIn"]}
      />

      <div className="text-vscode-comment mb-4">
        /* Open to internship opportunities & collaborations */
      </div>

      <div className="hover:bg-vscode-lineHighlight p-1 rounded">
        <span className="text-vscode-keyword">.contact</span>{" "}
        <span className="text-vscode-text">{`{`}</span>
        <div className="pl-4">
          <div className="flex items-center group">
            <span className="text-vscode-variable">email</span>:{" "}
            <span className="text-vscode-string">"vsoni0882@gmail.com"</span>;
            <span className="ml-4 opacity-0 group-hover:opacity-50 text-xs text-gray-500 cursor-pointer">
              Send Email
            </span>
          </div>

          <div className="flex items-center group">
            <span className="text-vscode-variable">linkedin</span>:{" "}
            <a
              href="https://www.linkedin.com/in/vishal-soni-07-/"
              target="_blank"
              rel="noreferrer"
              className="text-vscode-accent hover:underline"
            >
              url("linkedin.com/in/vishal-soni-07-/")
            </a>
            ;
          </div>
        </div>
        <span className="text-vscode-text">{`}`}</span>
      </div>

      <div className="hover:bg-vscode-lineHighlight p-1 rounded mt-4">
        <span className="text-vscode-keyword">#location</span>{" "}
        <span className="text-vscode-text">{`{`}</span>
        <div className="pl-4">
          <div>
            <span className="text-vscode-variable">city</span>:{" "}
            <span className="text-vscode-string">"Pune"</span>;
          </div>

          <div>
            <span className="text-vscode-variable">status</span>:{" "}
            <span className="text-vscode-string">
              "Available for Internships"
            </span>
            ;
          </div>
        </div>
        <span className="text-vscode-text">{`}`}</span>
      </div>

      <div className="mt-8">
        <a
          href="mailto:vsoni0882@gmail.com"
          className="bg-vscode-button text-vscode-buttonFg px-4 py-2 hover:bg-opacity-90 transition-colors font-sans rounded-sm text-xs inline-block"
        >
          Let's Connect
        </a>
      </div>
    </div>
  );
};
