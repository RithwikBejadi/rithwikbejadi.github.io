"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Jun 2026 - Present",
      content: (
        <div>
          <h3 className="font-heading mb-6 text-2xl font-semibold text-white md:text-3xl">
            Backend Intern
          </h3>
          <p className="mb-4 text-lg text-neutral-400">SalarySe</p>
          <p className="mb-6 text-base leading-relaxed text-neutral-300 md:text-lg">
            Currently working on backend services, API workflows, and reliability
            improvements as part of the engineering team.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            <p className="text-sm font-medium text-emerald-400">Current role</p>
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2025 - May 2026",
      content: (
        <div>
          <h3 className="font-heading mb-6 text-2xl font-semibold text-white md:text-3xl">
            SDE Intern
          </h3>
          <p className="mb-4 text-lg text-neutral-400">
            NirveonX — Remote, Hyderabad
          </p>
          <p className="mb-6 text-base leading-relaxed text-neutral-300 md:text-lg">
            Worked on AI chat systems, medicine booking workflows, backend APIs,
            deployment tasks, and security checks. Also led a small intern team
            during delivery cycles.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <p className="text-sm text-orange-400 font-medium">
              Backend APIs · AI Workflows · Team Delivery
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Apr 2025 - Jun 2025",
      content: (
        <div>
          <h3 className="font-heading mb-6 text-2xl font-semibold text-white md:text-3xl">
            Frontend Developer Intern
          </h3>
          <p className="mb-4 text-lg text-neutral-400">
            Get Interview Confidence — Remote, Kolkata
          </p>
          <p className="mb-6 text-base leading-relaxed text-neutral-300 md:text-lg">
            Built reusable Next.js components, worked on SSR behavior, and helped
            ship responsive pages in a collaborative internship team.
          </p>
          <div className="inline-block rounded-lg border border-blue-500/30 bg-blue-500/10 px-6 py-3">
            <p className="text-base md:text-lg font-semibold text-blue-400">
              Next.js · SSR · Responsive UI
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024 — Present",
      content: (
        <div>
          <h3 className="font-heading mb-6 text-2xl font-semibold text-white md:text-3xl">
            Open Source Contributions
          </h3>
          <p className="mb-6 text-base leading-relaxed text-neutral-300 md:text-lg">
            40+ pull requests merged across student and community repositories.
            Maintainer in the NST Open Source Summer Drive and active contributor
            during Hacktoberfest.
          </p>
          <div className="inline-block rounded-lg border border-purple-500/30 bg-purple-500/10 px-6 py-3">
            <p className="text-base md:text-lg font-semibold text-purple-400">
              Maintainer · NST Open Source Summer Drive
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2024 - Aug 2028",
      content: (
        <div>
          <h3 className="font-heading mb-6 text-2xl font-semibold text-white md:text-3xl">
            B.Tech in Artificial Intelligence
          </h3>
          <p className="mb-6 text-base leading-relaxed text-neutral-300 md:text-lg">
            Newton School of Technology, Pune. Core focus: backend engineering,
            system design, AI-integrated systems, and full-stack development.
          </p>
          <div className="inline-block rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-6 py-3">
            <p className="text-base md:text-lg font-semibold text-indigo-400">
              NST&apos;28
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip rounded-2xl border border-white/10 bg-black/35 p-4 shadow-xl shadow-black/35 backdrop-blur-sm md:p-6">
      <Timeline data={data} />
    </div>
  );
}
