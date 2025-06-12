import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavLink as NavLinkType } from "../../types";
import AnimatedText from "../AnimatedText/AnimatedText";
import BounceAnimation from "../BounceAnimation/BounceAnimation";

const NavLink = ({ navLink }: { navLink: NavLinkType }) => {
  const pathname = usePathname().split("/")[1];
  const [hoveredLink, setHoveredLink] = useState("");

  const isActive = pathname === navLink.path;
  const isHovered = hoveredLink === navLink.path;

  const sizeClass = classNames({
    "w-10 sm:w-14 md:w-16": isActive || isHovered,
    "w-8 sm:w-12 md:w-12": !isActive && !isHovered,
  });

  const colorClass = classNames({
    "text-background": isHovered,
    "text-foreground-secondary md:ml-2": !isActive && !isHovered,
    "text-primary": isActive && !isHovered,
  });

  return (
    <Link
      key={navLink.step}
      href={navLink.disabled ? "#" : navLink.path}
      className={`${
        navLink.disabled && "cursor-not-allowed"
      } rounded-full relative duration-300 ease-in flex items-center justify-center`}
      data-active={isActive}
      onMouseEnter={() => setHoveredLink(navLink.path)}
      onMouseLeave={() => setHoveredLink("")}
    >
      <div
        className={classNames(
          sizeClass,
          colorClass,
          "aspect-square duration-300 flex items-center justify-center border-1 rounded-full *:text-xl"
        )}
      >
        {navLink.icon}
        {isHovered && <BounceAnimation />}
      </div>
      {isHovered && (
        <div
          className={`${
            navLink.disabled ? "text-foreground-secondary" : "text-primary"
          } flex absolute text-start w-full text-nowrap -bottom-8 md:bottom-auto md:-right-20 text-lg underline underline-offset-8`}
        >
          <AnimatedText text={navLink.text} isHovered={isHovered} />
        </div>
      )}
    </Link>
  );
};

export default NavLink;
