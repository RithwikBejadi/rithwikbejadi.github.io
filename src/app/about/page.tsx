import TimelineDemo from "@/components/timeline-demo";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Full Height About Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 overflow-hidden">
        <BackgroundBeams />
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-8 tracking-tight">
                About Me
              </h1>

              <div className="space-y-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
                <p>
                  I'm a{" "}
                  <span className="text-white font-semibold">
                    Full-Stack Developer
                  </span>{" "}
                  with internship experience at fast-paced startups,
                  contributing to production systems and AI-assisted features
                  across multiple platforms.
                </p>

                <p>
                  With proven expertise in{" "}
                  <span className="text-blue-400 font-semibold">
                    MERN stack
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-400 font-semibold">
                    MCP servers
                  </span>
                  , I build scalable systems that solve real-world problems. As
                  an active open-source contributor and maintainer with{" "}
                  <span className="text-green-400 font-semibold">
                    40+ pull requests
                  </span>
                  , I believe in giving back to the developer community.
                </p>

                <p>
                  Currently pursuing{" "}
                  <span className="text-white font-semibold">
                    B.Tech in Computer Science
                  </span>{" "}
                  at Newton School of Technology, ADYPU, where I maintain a{" "}
                  <span className="text-purple-400 font-semibold">
                    CGPA of 8.38
                  </span>
                  . I'm passionate about creating elegant, efficient solutions
                  and always eager to learn new technologies.
                </p>

                <div className="pt-8 flex flex-wrap gap-4 text-sm">
                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-neutral-800">
                    <span className="text-neutral-400">
                      Computer Science Student
                    </span>
                  </div>
                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-neutral-800">
                    <span className="text-neutral-400">
                      Full-Stack Developer
                    </span>
                  </div>
                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-neutral-800">
                    <span className="text-neutral-400">
                      Open Source Contributor
                    </span>
                  </div>
                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-neutral-800">
                    <span className="text-neutral-400">
                      Aspiring Game Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto lg:ml-auto lg:mr-0">
                {/* Gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>

                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl">
                  <img
                    src="/profile.jpg?v=2"
                    alt="Sai Rithwik Bejadi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-neutral-400 text-sm font-medium tracking-wider">
            SCROLL DOWN
          </p>
          <svg
            className="w-6 h-6 text-neutral-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 tracking-tight mb-6">
            My Journey
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            From school to professional experiences - here's my story
          </p>
        </div>
        <TimelineDemo />
      </section>
    </main>
  );
}
