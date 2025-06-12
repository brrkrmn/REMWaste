"use client";

import * as motion from "motion/react-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "./constants";

const Navbar = () => {
  const pathname = usePathname().split("/")[1];
  const [hoveredLink, setHoveredLink] = useState(pathname || "/");

  return (
    <div className="w-fit flex flex-row md:flex-col gap-8 items-center">
      {navLinks.map((navLink) => {
        const isActive = pathname === navLink.link;
        const isHovered = hoveredLink === navLink.link;

        return (
          <Link
            key={navLink.step}
            href={navLink.disabled ? "#" : navLink.link}
            className={`${
              navLink.disabled && "cursor-not-allowed"
            } rounded-full relative duration-300 ease-in flex items-center justify-center`}
            data-active={isActive}
            onMouseOver={() => setHoveredLink(navLink.link)}
            onMouseLeave={() => setHoveredLink(pathname)}
          >
            <div
              className={`${
                isActive || isHovered ? "w-16 h-16" : "w-12 h-12"
              } ${
                !isActive && isHovered
                  ? "text-background"
                  : !isActive && !isHovered
                  ? "text-foreground-secondary"
                  : isActive && !isHovered
                  ? "text-primary"
                  : "text-background"
              } transition-all duration-300 flex items-center justify-center border-1 rounded-full *:text-xl`}
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
                } flex absolute text-start w-full text-nowrap -right-20 text-lg underline underline-offset-8`}
              >
                {navLink.text.split("").map((char, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : {}}
                    exit="hidden"
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    {char === " " ? <span>&nbsp;</span> : char}
                  </motion.p>
                ))}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
