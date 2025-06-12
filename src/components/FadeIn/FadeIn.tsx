import * as motion from "motion/react-client";
import { ReactNode } from "react";

const FadeIn = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
