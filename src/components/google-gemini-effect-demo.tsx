"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Animation starts only after user scrolls past the initial viewport
  const pathLengthFirst = useTransform(scrollYProgress, [0.1, 0.9], [0.2, 1.2]);
  const pathLengthSecond = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [0.15, 1.2],
  );
  const pathLengthThird = useTransform(scrollYProgress, [0.1, 0.9], [0.1, 1.2]);
  const pathLengthFourth = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [0.05, 1.2],
  );
  const pathLengthFifth = useTransform(scrollYProgress, [0.1, 0.9], [0, 1.2]);

  return (
    <div
      className="h-[200vh] bg-black w-full rounded-md relative overflow-clip"
      ref={ref}
    >
      {/* Grid Background - consistent with other sections */}
      <div className="absolute inset-0 [background-size:60px_60px] [background-image:linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] opacity-50" />
      {/* Reduced intensity spotlight */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .04) 50%, hsla(210, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .05) 0, hsla(210, 100%, 55%, .025) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)"
      />
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
