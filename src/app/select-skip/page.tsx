import * as motion from "motion/react-client";

const SelectSkipPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col *:text-center items-center md:items-start justify-center"
    >
      <h1 className="title">Choose Your Skip Size</h1>
      <motion.h6
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl text-foreground-secondary px-1"
      >
        Select the skip size that best suits your needs
      </motion.h6>
    </motion.div>
  );
};

export default SelectSkipPage;
