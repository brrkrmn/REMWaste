import * as motion from "motion/react-client";

const AnimatedText = ({
  text,
  isHovered,
}: {
  text: string;
  isHovered: boolean;
}) => {
  {
    return text.split("").map((char, i) => (
      <motion.p
        key={i}
        initial={{ opacity: 0, x: -18 }}
        animate={isHovered ? { opacity: 1, x: 0 } : {}}
        exit="hidden"
        transition={{ duration: 0.05, delay: i * 0.03 }}
      >
        {char === " " ? <span>&nbsp;</span> : char}
      </motion.p>
    ));
  }
};

export default AnimatedText;
