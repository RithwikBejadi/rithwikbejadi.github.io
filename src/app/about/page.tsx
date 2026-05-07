import type { Metadata } from "next";
import Image from "next/image";
import TimelineDemo from "@/components/timeline-demo";
import { Spotlight } from "@/components/ui/spotlight-new";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Tooltip } from "@/components/ui/tooltip-card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sai Rithwik Bejadi — a second-year B.Tech AI student at Newton School of Technology (NST'28) currently interning at SalarySe as a Backend Engineer.",
  openGraph: {
    title: "About — Sai Rithwik Bejadi",
    description:
      "Backend-focused engineer at NST. Interning at SalarySe. Building API systems and AI-integrated workflows.",
    url: "https://rithwikbejadi.tech/about/",
  },
  alternates: {
    canonical: "https://rithwikbejadi.tech/about/",
  },
};

const highlights = [
  {
    label: "Backend Engineering",
    detail:
      "Node.js, TypeScript, Python, PostgreSQL, MongoDB. APIs, async jobs, and data workflows.",
  },
  {
    label: "AI Workflows",
    detail:
      "FastAPI + LangGraph booking flows with async pipelines and conflict-safe scheduling.",
  },
  {
    label: "Open Source",
    detail:
      "40+ PRs merged across student and community repos. Some maintainer work included.",
  },
  {
    label: "Team Work",
    detail:
      "Backend Intern at SalarySe — shipping features, code reviews, and deployment handoffs.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative pb-40">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <BackgroundBeams className="opacity-35" />
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(223, 90%, 62%, .18) 0, hsla(223, 90%, 55%, .08) 50%, hsla(223, 90%, 45%, 0) 85%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(189, 90%, 62%, .14) 0, hsla(189, 90%, 58%, .06) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(263, 85%, 68%, .13) 0, hsla(263, 85%, 63%, .05) 80%, transparent 100%)"
            translateY={-260}
            width={620}
            height={1200}
            smallWidth={250}
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-24 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-32">
          <div className="space-y-6">
            <div className="w-full max-w-xl">
              <div className="h-[100px]">
                <TextHoverEffect text="About" duration={0.2} />
              </div>
            </div>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Backend engineer. Full-stack when it helps ship.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-300">
              I&apos;m Sai Rithwik, a second-year B.Tech student at Newton School of
              Technology (NST&apos;28). I build backend systems — APIs, async workflows,
              and AI-Agents.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
              Currently interning at SalarySe. Primary tech stack includes Node.js, TypeScript. Transitioning into SpringBoot
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-black/45">
              <Image
                src="/PHOTO-2026-02-06-13-33-07.jpg"
                alt="Sai Rithwik Bejadi"
                width={720}
                height={1280}
                className="h-[520px] w-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-8 space-y-2">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            What I Work On
          </h2>
          <p className="max-w-2xl text-neutral-400">
            Hover for details.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <Tooltip
              key={item.label}
              content={item.detail}
              containerClassName="w-full"
            >
              <div className="rounded-xl border border-white/10 bg-black/35 p-5 shadow-lg shadow-black/30 backdrop-blur-sm">
                <p className="font-heading text-lg font-semibold text-neutral-100">
                  {item.label}
                </p>
              </div>
            </Tooltip>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8 md:px-10">
        <div className="mb-8 space-y-2">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Timeline
          </h2>
          <p className="max-w-2xl text-neutral-400">
            Education, internships, and open source.
          </p>
        </div>
        <TimelineDemo />
      </section>
    </main>
  );
}