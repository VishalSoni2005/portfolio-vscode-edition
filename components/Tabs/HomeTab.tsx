import React from "react";
import { Seo } from "../SEO/Seo";
import { useEditor } from "../../context/EditorContext";

export const HomeTab: React.FC = () => {
  const { openFile } = useEditor();

  return (
    <div className="p-8 h-full overflow-y-auto bg-vscode-bg text-vscode-text font-sans selection:bg-vscode-selection">
      <Seo
        title="Home - Vishal Soni"
        description="Vishal Soni - Full Stack Developer building scalable apps with a focus on AI and Financial Tech."
        keywords={[
          "Vishal Soni",
          "Full Stack Developer",
          "Next.js Developer",
          "MERN Stack",
          "Fintech Developer",
        ]}
      />

      <div className="max-w-3xl mx-auto mt-10">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-vscode-text tracking-tight">
              Hi, I'm <span className="text-vscode-accent">Vishal Soni</span>
            </h1>
          </div>
        </div>

        {/* Code Identity Block */}
        {/* Code Identity Block */}
        <div className="font-mono text-sm mb-8 bg-vscode-sidebar p-4 border border-vscode-activity rounded-md inline-block">
          <span className="text-vscode-keyword">const</span>{" "}
          <span className="text-vscode-function">developer</span> = {`{`}
          <div className="pl-4">
            name: <span className="text-vscode-string">'Vishal Soni'</span>,
            <br />
            role:{" "}
            <span className="text-vscode-string">'Full Stack Engineer'</span>,
            <br />
            location: <span className="text-vscode-string">'India'</span>,<br />
            specialization:{" "}
            <span className="text-vscode-string">
              'Scalable backend systems, AI-driven applications'
            </span>
            ,<br />
            techStack:{" "}
            <span className="text-vscode-string">
              'Next.js, React, Node.js, NestJS, TypeScript'
            </span>
            ,<br />
            currentFocus:{" "}
            <span className="text-vscode-string">
              'Building production-grade systems with clean architecture &
              performance in mind'
            </span>
          </div>
          {`};`}
        </div>

        {/* Short Intro */}
        <p className="text-lg leading-relaxed mb-6">
          I’m a B.Tech student and Full Stack Engineer focused on building{" "}
          <strong className="text-vscode-text font-bold">
            scalable, production-ready web applications
          </strong>{" "}
          using modern technologies like React, Next.js, Node.js, NestJS, and
          TypeScript.
          <br />
          <br />
          I’ve developed systems including{" "}
          <strong>
            AI-powered interview platforms, admin dashboards, secure chat
            applications, and backend automation tools
          </strong>{" "}
          — with strong emphasis on performance, security, and maintainable
          architecture.
        </p>

        {/* Add this NEW section (very important for Tech Leads) */}
        <p className="text-lg leading-relaxed mb-8">
          I actively focus on{" "}
          <strong>
            system design fundamentals, data structures, and low-level
            understanding of how software works
          </strong>
          — aiming to grow into an engineer capable of building and optimizing
          systems at scale.
        </p>

        {/* Strong Direction Signal */}
        <p className="text-lg leading-relaxed mb-8">
          I’m particularly interested in{" "}
          <strong className="text-vscode-accent">
            financial markets, backend systems, and high-performance engineering
          </strong>
          , and aim to work on impactful projects that solve real problems.
        </p>

        <div className="mt-16 pt-8 border-t border-vscode-activity">
          <h3 className="text-sm uppercase tracking-wider text-vscode-text opacity-70 mb-4">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono text-vscode-keyword cursor-pointer">
            <span onClick={() => openFile("about")} className="hover:underline">
              About.md
            </span>
            <span
              onClick={() => openFile("projects")}
              className="hover:underline"
            >
              Projects.json
            </span>
            <span
              onClick={() => openFile("experience")}
              className="hover:underline"
            >
              Experience.tsx
            </span>
            <span
              onClick={() => openFile("contact")}
              className="hover:underline"
            >
              Contact.css
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
