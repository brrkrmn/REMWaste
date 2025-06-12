import * as motion from "motion/react-client";

const WasteTypePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col *:text-center items-center md:items-start justify-center gap-2"
    >
      <h1 className="title">What type of waste are you disposing of?</h1>
      <motion.h6
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl text-foreground-secondary px-1"
      >
        Select all that apply
      </motion.h6>
    </motion.div>
  );
};

export default WasteTypePage;
