"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "NirveonX Platform",
    description:
      "A comprehensive healthcare platform with AI-powered chatbots for medical assistance, ambulance booking, and real-time tracking.",
    techStack: ["React Native", "TypeScript", "Node.js", "MCP Server"],
    githubUrl: "https://github.com/rithwikbejadi",
  },
  {
    title: "CGPA Analyzer",
    description:
      "Full-stack web application for analyzing and tracking academic performance with Google OAuth integration and interactive dashboards.",
    techStack: ["React", "Node.js", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/rithwikbejadi",
    liveUrl: "https://cgpa-analyzer.vercel.app",
  },
  {
    title: "Event-Driven Lead Scoring",
    description:
      "Scalable lead scoring platform with real-time event tracking, analytics dashboard, and microservices architecture.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/rithwikbejadi",
    liveUrl: "https://lead-scoring.demo",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Background Beams - Fixed */}
      <div className="fixed inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Content - Relative to float above background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-20 pt-20 mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-6 tracking-tight"
            >
              My Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
            >
              Hover over the cards to see the magic ✨
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-6 md:px-12 lg:px-20 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <PinContainer
                  title={project.title}
                  href={project.liveUrl || project.githubUrl}
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                    {/* Title */}
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-slate-100">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <div className="text-sm !m-0 !p-0 font-normal mb-4">
                      <span className="text-slate-400 leading-relaxed">
                        {project.description}
                      </span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neutral-900/50 rounded-md text-xs text-neutral-300 border border-neutral-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-3 py-2 bg-neutral-900/80 rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all text-neutral-300 hover:text-white text-sm"
                        >
                          <IconBrandGithub className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-3 py-2 bg-neutral-900/80 rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all text-neutral-300 hover:text-white text-sm"
                        >
                          <IconExternalLink className="w-4 h-4" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom Padding for Floating Dock */}
        <div className="h-32"></div>
      </div>
    </main>
  );
}
