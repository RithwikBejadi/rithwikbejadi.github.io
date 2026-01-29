import GoogleGeminiEffectDemo from "@/components/google-gemini-effect-demo";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <GoogleGeminiEffectDemo />

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 bg-black py-24 px-6 scroll-mt-20"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
        {/* Radial gradient overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-12">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-4xl mx-auto text-center">
            I'm a passionate full-stack developer with a keen interest in
            creating elegant, efficient solutions. With expertise in modern web
            technologies, I build scalable applications that deliver exceptional
            user experiences. Currently exploring game development and always
            eager to learn new technologies.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative bg-black py-24 px-6 scroll-mt-20 pb-40"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
        {/* Radial gradient overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 mb-16">
            Contact Me
          </h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
