import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Tooltip } from "@/components/ui/tooltip-card";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { PinContainer } from "@/components/ui/3d-pin";

const summary = [
  {
    title: "Backend Engineering",
    body: "APIs, async workflows, and backend services. Node.js, TypeScript, Python, PostgreSQL.",
  },
  {
    title: "Current Role",
    body: "Backend Intern at SalarySe — working on APIs, backend services, and workflow reliability.",
  },
  {
    title: "Open Source",
    body: "40+ merged PRs across Hacktoberfest and the NST Open Source Summer Drive.",
  },
];

const stack = [
  { name: "Node.js", tip: "API services and backend workflow logic." },
  { name: "TypeScript", tip: "Type-safe development across backend and frontend." },
  { name: "Python", tip: "FastAPI services and AI-integrated pipelines." },
  { name: "PostgreSQL", tip: "Transactions, row locks, and conflict-safe flows." },
  { name: "MongoDB", tip: "Flexible data models for scheduling use cases." },
  { name: "React", tip: "Reusable UI systems and component composition." },
  { name: "Next.js", tip: "SSR pages and app-level frontend architecture." },
  { name: "Express.js", tip: "REST APIs and service-oriented backend routes." },
  { name: "Docker", tip: "Consistent environments and deployment packaging." },
  { name: "LangGraph", tip: "Stateful orchestration for AI agent workflows." },
  { name: "FastAPI", tip: "Low-latency Python APIs with async support." },
];

const skillsContent = [
  {
    title: "Backend Engineering",
    description:
      "APIs, data pipelines, async jobs, and failure handling. I care about correctness and predictable system behavior.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-[linear-gradient(to_bottom_right,#1e3a8a,#4c1d95)] text-2xl font-semibold text-white">
        Backend Focus
      </div>
    ),
  },
  {
    title: "AI-Integrated Systems",
    description:
      "Multilingual AI booking flows using FastAPI, LangGraph, async execution, and PostgreSQL for conflict handling.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-[linear-gradient(to_bottom_right,#1e1b4b,#1d4ed8)] text-2xl font-semibold text-white">
        AI Workflows
      </div>
    ),
  },
  {
    title: "Open Source",
    description:
      "40+ PRs merged. Small fixes, real features, and clean collaboration across public repos.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-[linear-gradient(to_bottom_right,#312e81,#6d28d9)] text-2xl font-semibold text-white">
        40+ PRs Merged
      </div>
    ),
  },
];

const marqueeImages = [
  "/profile.jpg",
  "/PHOTO-2026-02-06-13-33-07.jpg",
  "/nirveonx_preview.png",
  "/automated_timetable_preview.png",
  "/lead_scoring_preview.png",
  "/profile.jpg",
  "/nirveonx_preview.png",
  "/automated_timetable_preview.png",
];

const featuredProjects = [
  {
    title: "Voice AI Agent — Clinical Appointment Booking",
    description:
      "Multilingual booking flow. ~1200ms latency, async pipelines, PostgreSQL lock-based conflict resolution.",
    image: "/nirveonx_preview.png",
    href: "/projects",
  },
  {
    title: "Automated Timetable Scheduling System",
    description:
      "Constraint-based scheduler for teacher and room allocation. REST APIs, collision detection across 20+ slots.",
    image: "/automated_timetable_preview.png",
    href: "/projects",
  },
];

export default function Home() {
  return (
    <main className="relative pb-40">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <BackgroundBeams className="opacity-45" />
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(224, 94%, 60%, .20) 0, hsla(224, 94%, 54%, .09) 50%, hsla(224, 94%, 45%, 0) 85%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(199, 89%, 62%, .16) 0, hsla(199, 89%, 56%, .07) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(268, 83%, 66%, .14) 0, hsla(268, 83%, 61%, .06) 80%, transparent 100%)"
            translateY={-260}
            width={620}
            height={1300}
            smallWidth={280}
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pb-20 pt-24 text-center md:px-10 lg:pt-32">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/20 bg-slate-900/80 shadow-2xl shadow-indigo-950/60 ring-1 ring-white/10">
            <Image
              src="/profile.jpg"
              alt="Sai Rithwik Bejadi"
              fill
              className="object-cover object-top"
              sizes="144px"
              priority
            />
          </div>

          <div className="w-full max-w-3xl">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Sai Rithwik Bejadi
            </h1>
            <p className="mt-5 text-base font-medium text-neutral-200 md:text-lg">
              B.Tech @ NST&apos;28 · Backend Intern @ SalarySe
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base">
              Backend engineer. Building APIs, async systems, and AI workflows.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="rounded-lg border border-indigo-400/50 bg-indigo-500/20 px-5 py-2.5 text-sm font-medium text-indigo-100 transition hover:bg-indigo-500/30"
            >
              View Work
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-white/15 bg-black/30 px-5 py-2.5 text-sm font-medium text-neutral-200 transition hover:bg-black/45"
            >
              About Me
            </Link>
            <a
              href="https://my.newtonschool.co/template/user/rithwik566/resume/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 bg-black/30 px-5 py-2.5 text-sm font-medium text-neutral-200 transition hover:bg-black/45"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Quick Summary
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {summary.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-xl shadow-black/25 backdrop-blur-xl"
            >
              <p className="font-heading text-lg font-semibold text-neutral-100">
                {item.title}
              </p>
              <p className="mt-3 leading-relaxed text-neutral-300">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-20 md:px-10"
      >
        <div className="mb-8 space-y-2">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Tech Stack
          </h2>
          <p className="max-w-2xl text-neutral-400">
            Tools I work with daily.
          </p>
        </div>
        <div className="mb-14 flex flex-wrap gap-3">
          {stack.map((item) => (
            <Tooltip
              key={item.name}
              content={item.tip}
              containerClassName="inline-flex"
            >
              <span className="cursor-default rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-sm font-medium text-neutral-200 shadow-sm shadow-black/30">
                {item.name}
              </span>
            </Tooltip>
          ))}
        </div>
        <StickyScroll content={skillsContent} />
      </section>

      {/* <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="mb-8 space-y-2">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Snapshots
          </h2>
          <p className="max-w-2xl text-neutral-400">
            A few things I&apos;ve built.
          </p>
        </div>
        <ThreeDMarquee
          images={marqueeImages}
          className="border border-white/10 bg-black/30 shadow-2xl shadow-black/40"
        />
      </section> */}

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Projects
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-400">
              Selected work with real constraints.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden rounded-md border border-white/15 bg-black/35 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:bg-black/50 md:inline-flex"
          >
            See all
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <PinContainer
              key={project.title}
              title={project.title}
              href={project.href}
              containerClassName="w-full"
              className="w-full"
            >
              <div className="w-[20rem]">
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={1024}
                    height={1024}
                    className="h-40 w-full object-cover"
                  />
                </div>
                <div className="space-y-2 pt-4">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    {project.description}
                  </p>
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-20 px-6 pb-10 md:px-10"
      >
        <div className="grid items-start gap-10 rounded-2xl border border-white/10 bg-black/35 p-6 shadow-2xl shadow-black/35 backdrop-blur-xl md:grid-cols-2 md:p-10">
          <div className="space-y-5 pt-2">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-md text-neutral-400">
              Open to collaboration, backend discussions, or just a good conversation.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2 text-sm">
              <div className="rounded-lg border border-white/10 bg-black/35 p-4">
                <p className="text-neutral-400">Focus</p>
                <p className="mt-1 font-medium text-neutral-100">
                  Backend engineering
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/35 p-4">
                <p className="text-neutral-400">Status</p>
                <p className="mt-1 font-medium text-neutral-100">
                  Intern @ SalarySe
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-500">Usually replies within 24 hours.</p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-24 pt-4 text-center text-sm text-neutral-500 md:px-10">
        Sai Rithwik Bejadi · NST&apos;28
      </footer>
    </main>
  );
}