"use client";

import FadeIn from "@/components/FadeIn/FadeIn";
import OrderSummary from "@/components/OrderSummary/OrderSummary";
import SkipCard from "@/components/SkipCard/SkipCard";
import { useSkipsContext } from "@/context/skips/skipsProvider";

const SelectSkipPage = () => {
  const { skips, selectedSkip } = useSkipsContext();

  return (
    <FadeIn className="flex flex-col *:text-center items-center md:items-start justify-center gap-2">
      <h1 className="title text-center sm:!text-start">
        Choose Your Skip Size
      </h1>
      <h6 className="text-xl text-foreground-secondary px-1">
        Select the skip size that best suits your needs
      </h6>
      <FadeIn className="my-10 w-full flex flex-wrap items-center justify-center md:justify-start gap-10">
        {skips?.map((skip) => (
          <SkipCard key={skip.id} skip={skip} />
        ))}
      </FadeIn>
      {selectedSkip && <OrderSummary />}
    </FadeIn>
  );
};

export default SelectSkipPage;
