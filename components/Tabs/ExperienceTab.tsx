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
                <span className="text-vscode-string">"2025 - Present"</span>
              </div>

              <div>
                <span className="text-vscode-keyword">techStack</span>:{" "}
                <span className="text-vscode-string">
                  "[React, Next.js, TypeScript, Node.js, MongoDB]"
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm leading-6">
              <p>
                • Built and optimized scalable full-stack features using modern
                technologies like Next.js and TypeScript.
              </p>

              <p>
                • Worked on real-world production-level applications focusing on
                performance and clean architecture.
              </p>

              <p>
                • Designed and integrated REST APIs, improving data flow between
                frontend and backend systems.
              </p>

              <p>• Collaborated on improving UI/UX and system reliability.</p>

              <p>
                • Gained hands-on experience in writing maintainable and
                scalable code in a team environment.
              </p>
            </div>
          </div>
        </section>

        {/* Optional: Add more experiences later */}
      </div>
    </div>
  );
};
