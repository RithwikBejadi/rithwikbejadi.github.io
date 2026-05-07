import type { Metadata } from "next";
import ProjectsClient from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering projects by Sai Rithwik Bejadi — a Voice AI clinical booking system and an automated timetable scheduler with conflict resolution logic.",
  openGraph: {
    title: "Projects — Sai Rithwik Bejadi",
    description:
      "Backend and full-stack projects: Voice AI clinical booking system (FastAPI, LangGraph, PostgreSQL) and automated timetable scheduler (Node.js, MongoDB).",
    url: "https://rithwikbejadi.tech/projects/",
  },
  alternates: {
    canonical: "https://rithwikbejadi.tech/projects/",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}