import React from "react";
import { Seo } from "../SEO/Seo";

export const AboutTab: React.FC = () => {
  return (
    <div className="p-8 h-full overflow-y-auto font-sans max-w-4xl">
      <Seo
        title="About Me - Vishal Soni"
        description="Learn more about Vishal Soni, a software engineer and educator based in India."
      />
      <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-vscode-activity text-vscode-text">
        README.md
      </h1>

      <div className="space-y-6 text-vscode-text">
        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">
            ## About Me
          </h2>
          <p className="leading-7">
            Hi, I'm Vishal Soni, a B.Tech student and Full Stack Developer from
            India. I specialize in building scalable web applications using
            modern technologies like React, Next.js, Node.js, and TypeScript.
            <br />
            <br />I enjoy solving real-world problems through code and have
            built projects like ERP systems, AI-powered interview platforms, and
            SaaS applications. I’m also deeply interested in financial markets
            and aim to work on high-performance systems in fintech and trading
            domains.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">
            ## What I Do
          </h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li> Build full-stack applications using MERN & Next.js</li>
            <li> Develop real-world products like ERP & SaaS platforms</li>
            <li> Explore AI integrations (voice AI, ML-based apps)</li>
            <li> Learn and apply concepts from financial markets</li>
            <li> Practice DSA & system design for engineering roles</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">
            ## Tech Stack
          </h2>
          <div className="font-mono text-sm bg-vscode-sidebar p-4 rounded-md border border-vscode-activity">
            <div>
              <span className="text-vscode-keyword">Frontend</span>: [React,
              Next.js 15, TypeScript, Tailwind, Zustand]
            </div>
            <div>
              <span className="text-vscode-keyword">Backend</span>: [Node.js,
              Express, NestJS, MongoDB, MySQL]
            </div>
            <div>
              <span className="text-vscode-keyword">Tools</span>: [Git, Docker
              (learning), Linux, Cloudinary]
            </div>
            <div>
              <span className="text-vscode-keyword">Exploring</span>: [Machine
              Learning, Rust for HFT]
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">
            ## Contact & Opportunities
          </h2>
          I'm currently looking for internship opportunities as a Full Stack
          Developer.
          <br />
          If you'd like to collaborate or discuss opportunities, feel free to
          reach out:
          <br />
          <a
            href="mailto:vsoni0882@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-vscode-accent font-bold hover:underline"
          >
            vsoni0882@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
};
