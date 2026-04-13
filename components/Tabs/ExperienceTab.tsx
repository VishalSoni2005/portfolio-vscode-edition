import React from "react";
import { Seo } from "../SEO/Seo";

export const ExperienceTab: React.FC = () => {
  return (
    <div className="p-8 h-full overflow-y-auto font-sans max-w-4xl">
      <Seo
        title="Experience - Vishal Soni"
        description="Professional experience of Vishal Soni as a Full Stack Developer."
      />

      <h1 className="text-3xl font-bold mb-6 pb-2 border-b border-vscode-activity text-vscode-text">
        experience.ts
      </h1>

      <div className="space-y-8 text-vscode-text">
        {/* Attento Internship */}
        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">
            // Attento Internship
          </h2>

          <div className="bg-vscode-sidebar p-4 rounded-md border border-vscode-activity">
            <div className="font-mono text-sm space-y-2">
              <div>
                <span className="text-vscode-keyword">role</span>:{" "}
                <span className="text-vscode-string">
                  "Full Stack Developer Intern"
                </span>
              </div>

              <div>
                <span className="text-vscode-keyword">company</span>:{" "}
                <span className="text-vscode-string">"Attento"</span>
              </div>

              <div>
                <span className="text-vscode-keyword">duration</span>:{" "}
                <span className="text-vscode-string">
                  "Sept 2025 - Present"
                </span>
              </div>

              <div>
                <span className="text-vscode-keyword">techStack</span>:{" "}
                <span className="text-vscode-string">
                  "[React, Next.js, NestJS, Redux Toolkit, TypeScript, Node.js,
                  Firebase, MongoDB]"
                </span>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm leading-6">
              <p>
                • Designed and developed a full-stack Admin Console using{" "}
                <strong>Next.js and NestJS</strong>, managing complex data flows
                and multi-entity relationships with a scalable architecture.
              </p>

              <p>
                • Implemented automated backend workflows using{" "}
                <strong>Firebase Cloud Scheduler and Cloud Functions</strong>,
                enabling reliable scheduled and event-driven processing.
              </p>

              <p>
                • Built geo-spatial analytics tools (Trip Analyzer & Road
                Feature Analyzer) using <strong>Google Maps APIs</strong>,
                enabling real-time visualization of trip data and improving
                internal analysis efficiency.
              </p>

              <p>
                • Engineered RESTful APIs and optimized data handling across
                services, improving system performance and maintainability.
              </p>

              <p>
                • Collaborated in a production environment, focusing on clean
                architecture, scalability, and developer-friendly code
                practices.
              </p>
            </div>
          </div>
        </section>

        {/* Optional: Add more experiences later */}
      </div>
    </div>
  );
};
