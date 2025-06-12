"use client";

import OrderSummary from "@/components/OrderSummary/OrderSummary";
import SkipCard from "@/components/SkipCard/SkipCard";
import { useSkipsContext } from "@/context/skips/skipsProvider";
import * as motion from "motion/react-client";

const SelectSkipPage = () => {
  const { skips, selectedSkip } = useSkipsContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col *:text-center items-center md:items-start justify-center gap-2"
    >
      <h1 className="title text-center sm:!text-start">
        Choose Your Skip Size
      </h1>
      <motion.h6
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl text-foreground-secondary px-1"
      >
        Select the skip size that best suits your needs
      </motion.h6>
      <div className="my-10 w-full flex flex-wrap items-center justify-center md:justify-start gap-10">
        {skips?.map((skip) => (
          <SkipCard key={skip.id} skip={skip} />
        ))}
      </div>
      {selectedSkip && <OrderSummary />}
    </motion.div>
  );
};

export default SelectSkipPage;
