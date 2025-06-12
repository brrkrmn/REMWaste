"use client";

import SkipCard from "@/components/SkipCard/SkipCard";
import { useGetSkips } from "@/hooks/useSkip";
import { Skip } from "@/services/skip/skip.types";
import * as motion from "motion/react-client";
import { useState } from "react";

const SelectSkipPage = () => {
  const { data: skips } = useGetSkips();
  const [selected, setSelected] = useState<null | Skip>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex flex-col *:text-center items-center md:items-start justify-center gap-2"
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
      <div className="my-10 w-full flex flex-wrap items-center justify-start gap-10">
        {skips?.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selected === skip}
            setSelected={setSelected}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SelectSkipPage;
