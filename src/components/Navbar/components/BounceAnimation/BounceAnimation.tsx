import * as motion from "motion/react-client";

const BounceAnimation = () => {
  return (
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
  );
};

export default BounceAnimation;