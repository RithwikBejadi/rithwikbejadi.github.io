"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  if (!images.length) {
    return (
      <div
        className={cn(
          "mx-auto rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-neutral-400",
          className,
        )}
      >
        Snapshots are being updated.
      </div>
    );
  }

  const rowOne = [...images, ...images];
  const rowTwo = [...images.slice().reverse(), ...images.slice().reverse()];

  return (
    <div className={cn("mx-auto overflow-hidden rounded-2xl", className)}>
      <div className="space-y-4 p-3 md:p-4">
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {rowOne.map((image, index) => (
            <div
              key={`${image}-row1-${index}`}
              className="group relative h-44 w-[18rem] overflow-hidden rounded-xl border border-white/10 bg-black/35 md:h-52 md:w-[22rem]"
            >
              <Image
                src={image}
                alt={`Snapshot ${index + 1}`}
                fill
                sizes="(min-width: 768px) 22rem, 18rem"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {rowTwo.map((image, index) => (
            <div
              key={`${image}-row2-${index}`}
              className="group relative h-44 w-[18rem] overflow-hidden rounded-xl border border-white/10 bg-black/35 md:h-52 md:w-[22rem]"
            >
              <Image
                src={image}
                alt={`Snapshot ${index + 1}`}
                fill
                sizes="(min-width: 768px) 22rem, 18rem"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
