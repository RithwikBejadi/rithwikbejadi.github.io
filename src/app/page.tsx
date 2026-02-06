import GoogleGeminiEffectDemo from "@/components/google-gemini-effect-demo";
import ContactForm from "@/components/contact-form";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

// Skills content with vibrant gradient cards
const skillsContent = [
  {
    title: "Full Stack Development",
    description:
      "Expertise in modern web technologies including React, Next.js, Node.js, and TypeScript. Building scalable, performant applications from frontend to backend with best practices and clean architecture.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)] text-white font-bold text-4xl rounded-xl">
        Web Dev
      </div>
    ),
  },
  {
    title: "Game Development",
    description:
      "Passionate about creating immersive gaming experiences. Exploring game engines, physics simulations, and interactive storytelling. Currently learning advanced techniques in game design and development.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#ec4899,#6366f1)] text-white font-bold text-4xl rounded-xl">
        Game Dev
      </div>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces with attention to detail. Proficient in modern design systems, animations, and user-centered design principles. Making complex interactions feel effortless.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#f97316,#eab308)] text-white font-bold text-4xl rounded-xl">
        Design
      </div>
    ),
  },
  {
    title: "Open Source",
    description:
      "Active contributor and maintainer in the open source community. Collaborating with developers worldwide, sharing knowledge, and building tools that help others create amazing software.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#8b5cf6,#ec4899)] text-white font-bold text-4xl rounded-xl">
        OSS
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="bg-black">
      {/* ===== HERO SECTION ===== */}
      {/* Full viewport hero with name, then scroll triggers animation */}
      <GoogleGeminiEffectDemo />

      {/* ===== MACBOOK SHOWCASE ===== */}
      {/* Full-width showcase of your work - edge to edge */}
      <section className="relative w-full bg-black overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 [background-size:60px_60px] [background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] opacity-50" />

        <div className="relative z-10 w-full">
          <MacbookScroll
            title={
              <span className="text-white text-2xl md:text-4xl font-light tracking-wide">
                Where ideas become{" "}
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  reality
                </span>
              </span>
            }
            src="/linear.webp"
            showGradient={false}
          />
        </div>
      </section>

      {/* Smooth Transition Gradient */}
      <div className="relative w-full h-40 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-neutral-700 to-transparent animate-pulse" />
        </div>
      </div>

      {/* ===== SKILLS SECTION ===== */}
      {/* Full-width skills with sticky scroll reveal */}
      <section
        id="skills"
        className="relative w-full bg-black py-20 scroll-mt-20"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 [background-size:60px_60px] [background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] opacity-50" />

        <div className="relative z-10 w-full px-6 lg:px-20">
          <h2 className="text-5xl md:text-8xl font-black text-left bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500 mb-20 tracking-tight">
            Skills &<br />
            Expertise
          </h2>
          <div className="w-full">
            <StickyScroll content={skillsContent} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      {/* Left-aligned about section for Awwward-winning asymmetric design */}
      <section
        id="about"
        className="relative w-full bg-black py-40 scroll-mt-20"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 [background-size:60px_60px] [background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] opacity-50" />

        <div className="relative z-10 w-full px-6 lg:px-20">
          {/* Two-column asymmetric layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left column - Title */}
            <div>
              <h2 className="text-5xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500 tracking-tight leading-none">
                About
                <br />
                Me
              </h2>
            </div>

            {/* Right column - Content */}
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                I'm a passionate full-stack developer with a keen interest in
                crafting elegant, efficient solutions.
              </p>
              <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                With expertise in modern web technologies, I build scalable
                applications that deliver exceptional user experiences.
                Currently exploring game development and always eager to learn
                new technologies.
              </p>
              <p className="text-lg md:text-xl text-neutral-500 leading-relaxed">
                I love turning complex problems into simple, beautiful, and
                intuitive designs. Every line of code is an opportunity to
                create something amazing.
              </p>

              {/* Stats or highlights */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-800">
                <div>
                  <p className="text-5xl font-black text-white">3+</p>
                  <p className="text-neutral-500 mt-2">Years Experience</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-white">20+</p>
                  <p className="text-neutral-500 mt-2">Projects Built</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      {/* Full-width contact with proper spacing for dock */}
      <section
        id="contact"
        className="relative w-full bg-black py-32 pb-48 scroll-mt-20"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 [background-size:60px_60px] [background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] opacity-50" />

        <div className="relative z-10 w-full px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left column - Title */}
            <div>
              <h2 className="text-5xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500 tracking-tight leading-none">
                Let's
                <br />
                Connect
              </h2>
              <p className="text-xl text-neutral-400 mt-8 max-w-md">
                Have a project in mind or just want to chat? I'd love to hear
                from you.
              </p>
            </div>

            {/* Right column - Form */}
            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
