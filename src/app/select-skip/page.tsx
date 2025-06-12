"use client";

import OrderSummary from "@/components/OrderSummary/OrderSummary";
import SkipCard from "@/components/SkipCard/SkipCard";
import { useGetSkips } from "@/hooks/useSkip";
import { Skip } from "@/services/skip/skip.types";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { mockSkips } from "./constants";

const SelectSkipPage = () => {
  const { data } = useGetSkips();
  const [selected, setSelected] = useState<null | Skip>(null);
  const [skips, setSkips] = useState<Skip[]>();

  useEffect(() => (
    setSkips(data || mockSkips)
  ), [data])

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
      <div className="my-10 w-full flex flex-wrap items-center justify-center md:justify-start gap-10">
        {skips?.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selected === skip}
            setSelected={setSelected}
          />
        ))}
      </div>
      {selected && <OrderSummary />}
    </motion.div>
  );
};

export default SelectSkipPage;
