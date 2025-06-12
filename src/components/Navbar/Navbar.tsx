"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AnimatedText from "./components/AnimatedText/AnimatedText";
import { navLinks } from "./constants";

const Navbar = () => {
  const pathname = usePathname().split("/")[1];
  const [hoveredLink, setHoveredLink] = useState(pathname || "/");

  return (
    <div className="w-full md:w-60 py-10 md:py-0 flex flex-row md:flex-col gap-4 sm:gap-8 justify-center items-center md:items-start md:fixed md:top-1/2 md:-translate-y-1/2 md:left-10">
      {navLinks.map((navLink) => {
        const isActive = pathname === navLink.path;
        const isHovered = hoveredLink === navLink.path;

        return (
          <Link
            key={navLink.step}
            href={navLink.disabled ? "#" : navLink.path}
            className={`${
              navLink.disabled && "cursor-not-allowed"
            } rounded-full relative duration-300 ease-in flex items-center justify-center`}
            data-active={isActive}
            onMouseOver={() => setHoveredLink(navLink.path)}
            onMouseLeave={() => setHoveredLink(pathname)}
          >
            <div
              className={`${
                isActive || isHovered
                  ? "w-10 sm:w-14 md:w-16"
                  : "w-8 sm:w-12 md:w-12"
              } ${
                !isActive && isHovered
                  ? "text-background"
                  : !isActive && !isHovered
                  ? "text-foreground-secondary md:ml-2"
                  : isActive && !isHovered
                  ? "text-primary"
                  : "text-background"
              } transition-all aspect-square duration-300 flex items-center justify-center border-1 rounded-full *:text-xl`}
            >
              {navLink.icon}
              {isHovered && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-full bg-primary aspect-square rounded-full -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    damping: 14,
                    duration: 0.2,
                  }}
                />
              )}
            </div>
            {isHovered && (
              <div
                className={`${
                  navLink.disabled
                    ? "text-foreground-secondary"
                    : "text-primary"
                } flex absolute text-start w-full text-nowrap -bottom-8 md:bottom-auto md:-right-20 text-lg underline underline-offset-8`}
              >
                <AnimatedText text={navLink.text} isHovered={isHovered} />
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
