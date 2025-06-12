import { useSkipsContext } from "@/context/skips/skipsProvider";
import * as motion from "motion/react-client";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";

const OrderSummary = () => {
  const { selectedSkip, setSelectedSkip } = useSkipsContext();

  if (!selectedSkip) return null;
  return (
    <motion.div
      className="border-1 fixed bottom-2 right-2 overflow-hidden w-[95%] sm:w-[400px] bg-background rounded-2xl border-secondary flex items-center justify-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex flex-col items-center sm:items-start justify-start gap-4 bg-background py-4 px-2 sm:p-8 verticalGradient">
        <h3 className="hidden sm:flex text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground-secondary via-foreground to-foreground-secondary">
          Order Summary
        </h3>
        <p className="flex items-start text-center sm:text-start justify-start gap-2 rounded-full text-warning text-[13px] sm:text-sm px-2">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
        <div className="sm:my-2 border-[0.5px] bg-background-secondary rounded-lg border-background-secondary p-4 w-full flex flex-col items-start gap-2">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-nowrap text-md sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-foreground-secondary via-foreground to-foreground-secondary">
              {selectedSkip.size} Yard Skip
            </h3>
            <p className="text-lg sm:text-xl font-semibold text-primary mt-auto text-end">
              £{selectedSkip.price_before_vat}
            </p>
            <p className="text-md text-foreground-secondary flex items-center justify-end gap-1">
              <IoIosTimer className="w-4 h-4" />
              {selectedSkip.hire_period_days} days
            </p>
          </div>
        </div>
        <div className="w-full flex items-items justify-between gap-2 *:transition-all *:duration-200 *:rounded-lg *:text-sm *:sm:text-base">
          <button
            onClick={() => setSelectedSkip(null)}
            className="w-full flex items-center justify-center cursor-pointer bg-background-secondary px-4 text-foreground-secondary border-[0.5px] border-foreground-secondary hover:border-foreground hover:text-foreground"
          >
            Unselect
          </button>
          <Link
            href="/permit-check"
            className="w-full cursor-pointer flex items-center justify-center gap-1 group border-1 text-background font-semibold bg-gradient-to-br from-yellow to-70% to-primary px-4 py-2"
          >
            <p>Continue</p>
            <FaAngleRight className="group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;
