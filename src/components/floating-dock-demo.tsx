"use client";

import React from "react";
import { FloatingDock, type FloatingDockItem } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMessageCircle,
  IconExchange,
  IconHome,
  IconNewSection,
  IconFileCv,
  IconTerminal2,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export default function FloatingDockDemo() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const links: FloatingDockItem[] = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-300" />
      ),
      href: "/",
      active: pathname === "/",
    },
    {
      title: "About",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-300" />
      ),
      href: "/about",
      active: pathname === "/about",
    },
    {
      title: "Projects",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-300" />
      ),
      href: "/projects",
      active: pathname === "/projects",
    },
    {
      title: "Skills",
      icon: (
        <IconExchange className="h-full w-full text-neutral-300" />
      ),
      href: isHome ? "#skills" : "/#skills",
    },
    {
      title: "Contact",
      icon: (
        <IconMessageCircle className="h-full w-full text-neutral-300" />
      ),
      href: isHome ? "#contact" : "/#contact",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-300" />
      ),
      href: "https://my.newtonschool.co/template/user/rithwik566/resume/",
      external: true,
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/rithwik-bejadi/",
      external: true,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-300" />
      ),
      href: "https://github.com/rithwikbejadi",
      external: true,
    },
  ];
  return <FloatingDock items={links} />;
}
