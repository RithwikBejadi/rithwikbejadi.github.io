"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconBrandGithub,
  IconExternalLink,
  IconFileText,
} from "@tabler/icons-react";
import { Spotlight } from "@/components/ui/spotlight-new";

type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  stack: string[];
  highlights: string[];
  metrics: string[];
  story: {
    problem: string;
    challenge: string;
    decision: string;
    outcome: string;
  };
  links: {
    demo?: string;
    github?: string;
    caseStudy: string;
  };
};

const metadata = [
  "Backend Architecture",
  "Distributed Systems",
  "API Design",
  "Open Source",
];

const projects: Project[] = [
  {
    slug: "voice-ai-agent",
    title: "Voice AI Clinical Booking System",
    summary:
      "A high-concurrency booking engine handling real-time voice interactions with ~1200ms latency. Engineered to manage complex scheduling conflicts across multilingual pipelines.",
    image: "/nirveonx_preview.png",
    stack: ["FastAPI", "LangGraph", "PostgreSQL", "Python", "AsyncIO"],
    highlights: [
      "Atomic row-locking in PostgreSQL to prevent double-booking during concurrent voice calls",
      "Stateful agent orchestration using LangGraph for multi-turn clinical intake",
      "Async execution pipelines optimized for sub-1.5s end-to-end response times",
    ],
    metrics: [
      "~1200ms response latency",
      "Zero-collision booking engine",
      "Multilingual intent mapping",
    ],
    story: {
      problem: "Traditional booking systems failed under concurrent, uncoordinated voice requests.",
      challenge: "Eliminating race conditions in slot assignment while maintaining low latency for voice UI.",
      decision: "Implemented a pessimistic locking strategy in Postgres combined with an async worker pool.",
      outcome: "Successfully handled simultaneous bookings with guaranteed data consistency and high performance.",
    },
    links: {
      caseStudy: "#voice-ai-agent-case-study",
      github: "https://github.com/rithwikbejadi",
    },
  },
  {
    slug: "timetable-scheduler",
    title: "Automated Constraint-Based Scheduler",
    summary:
      "An automated engine for teacher and room allocation. Replaced manual scheduling with a constraint-satisfaction algorithm resolving 20+ variable slots.",
    image: "/automated_timetable_preview.png",
    stack: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript"],
    highlights: [
      "Custom conflict-resolution logic for overlapping teacher/room/time dependencies",
      "RESTful API design supporting dynamic timetable regeneration cycles",
      "Validation-first architecture ensuring zero-collision schedule outputs",
    ],
    metrics: [
      "20+ slots automated",
      "3+ conflict types resolved",
      "100% manual effort reduction",
    ],
    story: {
      problem: "Manual scheduling led to frequent teacher collisions and room double-bookings.",
      challenge: "Building a flexible logic layer that adapts to changing availability without hard-coding rules.",
      decision: "Separated the constraint engine from the data layer to allow modular rule updates.",
      outcome: "Automated the entire scheduling process, ensuring a collision-free output for all faculty.",
    },
    links: {
      caseStudy: "#timetable-scheduler-case-study",
      github: "https://github.com/rithwikbejadi",
    },
  },
];

const engineeringHighlights = [
  "40+ Open Source PRs",
  "Async Booking Architecture",
  "Conflict-Safe Systems",
  "Backend Intern @ SalarySe",
  "API-First Design",
];

const focusAreas = [
  {
    title: "Backend Engineering",
    points: [
      "Predictable API behavior and service design",
      "Data-integrity focused system architecture",
      "Scalable async workflow orchestration",
    ],
  },
  {
    title: "System Design",
    points: [
      "Concurrency management and state handling",
      "Performance vs. Consistency trade-offs",
      "Modular, maintainable codebases for team scaling",
    ],
  },
  {
    title: "AI Integration",
    points: [
      "Orchestrating structured LLM workflows",
      "High-performance real-time API pipelines",
      "Pragmatic AI implementation for core products",
    ],
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-neutral-400">{subtitle}</p>
    </div>
  );
}

function ActionButton({
  href,
  icon,
  label,
  variant = "default",
}: {
  href?: string;
  icon: ReactNode;
  label: string;
  variant?: "default" | "accent";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition-all duration-200";
  const style =
    variant === "accent"
      ? "border-sky-400/30 bg-sky-500/10 text-sky-200 hover:bg-sky-500/20"
      : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10";

  if (!href) return null;

  return (
    <Link href={href} className={`${base} ${style}`}>
      {icon}
      {label}
    </Link>
  );
}

export default function ProjectsClient() {
  return (
    <main className="relative bg-black pb-32 text-neutral-200">
      <div className="pointer-events-none absolute inset-0">
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 60%, .1) 0, hsla(210, 100%, 50%, .05) 50%, transparent 80%)"
          translateY={-300}
        />
      </div>

      <section className="relative pt-24 lg:pt-32">
        <motion.div
          className="mx-auto max-w-6xl px-6 md:px-10"
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          transition={{ duration: 0.5 }}
        >

          <h1 className="font-heading mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Notable Real-World Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-400">
            Selected projects focusing on API architecture, concurrency, and production-grade delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {metadata.map((item) => (
              <span key={item} className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-neutral-400">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl space-y-24 px-6 py-24 md:px-10">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="group relative grid gap-12 lg:grid-cols-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionReveal}
            >
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              <div className={`flex flex-col justify-center lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-heading text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-neutral-400 leading-relaxed">{project.summary}</p>
                
                <ul className="mt-6 space-y-3">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-neutral-300">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-400" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-neutral-500 border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <ActionButton href={project.links.github} icon={<IconBrandGithub size={18}/>} label="Source" />
                  <ActionButton href={project.links.caseStudy} icon={<IconFileText size={18}/>} label="Case Study" variant="accent" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 border-t border-white/5">
        <SectionHeader 
          eyebrow="Expertise" 
          title="Engineering Focus" 
          subtitle="Systematic depth in backend workflows and system architecture."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
              <h4 className="text-lg font-medium text-white">{area.title}</h4>
              <ul className="mt-4 space-y-2">
                {area.points.map((p) => (
                  <li key={p} className="text-sm text-neutral-400 flex gap-2">
                    <span className="text-sky-500">•</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 border-t border-white/5">
        <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold text-white">Let&apos;s build something reliable.</h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            I specialize in API architecture and async systems. Open to discussions on backend internships and performance-heavy projects.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ActionButton href="/#contact" icon={<IconArrowRight size={18}/>} label="Get in Touch" variant="accent" />
            <ActionButton href="https://github.com/rithwikbejadi" icon={<IconBrandGithub size={18}/>} label="GitHub" />
          </div>
        </div>
      </section>
    </main>
  );
}