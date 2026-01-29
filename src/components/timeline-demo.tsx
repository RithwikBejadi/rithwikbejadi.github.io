"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Class 10 - Foundation Years
          </h3>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-6">
            Completed secondary education at Bhavan's Sri RamaKrishna Vidyalaya,
            Medchal, Secunderabad. This phase laid the groundwork for my
            interest in mathematics and technology, where I first discovered my
            passion for problem-solving.
          </p>
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-lg px-6 py-3">
            <p className="text-base md:text-lg font-semibold text-blue-400">
              Score: 84.2%
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2024",
      content: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Class 12 - IIT Academy
          </h3>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-6">
            Pursued PCM stream at Narayana Junior College (IIT Academy),
            Kondapur. This rigorous program enhanced my analytical thinking and
            prepared me for competitive engineering entrance exams while
            deepening my understanding of core scientific concepts.
          </p>
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-lg px-6 py-3">
            <p className="text-base md:text-lg font-semibold text-green-400">
              Score: 93.7%
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            JEE Journey
          </h3>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-6">
            Achieved 90th percentile in JEE Mains 2024 and qualified for JEE
            Advanced. This milestone demonstrated my ability to excel in
            competitive environments and opened doors to premier engineering
            institutions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-lg px-6 py-3">
              <span className="text-2xl"></span>
              <p className="text-base md:text-lg text-purple-400 font-semibold">
                Qualified for JEE Advanced
              </p>
            </div>
            <div className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/30 rounded-lg px-6 py-3">
              <span className="text-2xl"></span>
              <p className="text-base md:text-lg text-purple-400 font-semibold">
                90 Percentile in JEE Mains
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024 - 2028",
      content: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            B.Tech - Computer Science
          </h3>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-6">
            Pursuing Computer Science Engineering at Newton School of
            Technology, ADYPU. The program combines theoretical foundations with
            practical industry experience, focusing on modern development
            practices and emerging technologies. Actively engaged in projects
            and technical communities.
          </p>
          <div className="space-y-4">
            <div className="inline-block bg-indigo-500/10 border border-indigo-500/30 rounded-lg px-6 py-3">
              <p className="text-base md:text-lg font-semibold text-indigo-400">
                CGPA: 8.38 (Semester 3)
              </p>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <p className="text-sm text-green-400 font-medium">
                Currently Pursuing
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Frontend Developer Internship
          </h3>
          <p className="text-lg text-neutral-400 mb-4">
            Get Interview Confidence
          </p>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-6">
            <span className="text-blue-400 font-semibold">
              April 2025 - June 2025
            </span>
          </p>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
            Worked collaboratively with a team of seven developers to build the
            company's website. Gained hands-on experience in modern frontend
            technologies, responsive design, and agile development workflows.
          </p>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            SDE Team Lead Internship
          </h3>
          <p className="text-lg text-neutral-400 mb-4">NirveonX</p>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-6">
            <span className="text-blue-400 font-semibold">
              December 2025 - June 2026
            </span>
          </p>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed mb-6">
            Leading cross-functional teams across web and mobile development at
            NirveonX. Responsibilities include architectural decisions, code
            reviews, mentoring team members, and ensuring best practices
            throughout the development lifecycle for production-ready solutions.
          </p>
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <p className="text-sm text-orange-400 font-medium">
              Current Position
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip bg-black">
      <Timeline data={data} />
    </div>
  );
}
