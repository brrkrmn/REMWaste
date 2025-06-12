import * as motion from "motion/react-client";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { GoAlertFill } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";

const OrderSummary = () => {
  return (
    <motion.div
      className="border-1 fixed bottom-2 right-2 overflow-hidden w-[95%] sm:w-[400px] bg-background rounded-2xl border-secondary flex items-center justify-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex flex-col items-start justify-start gap-4 bg-background p-8 verticalGradient">
        <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground-secondary via-foreground to-foreground-secondary">
          Order Summary
        </h3>
        <p className="flex items-start text-start justify-start gap-2 rounded-full text-warning text-sm px-2">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
        <div className="my-4 border-[0.5px] bg-background-secondary rounded-lg border-background-secondary p-4 w-full flex flex-col items-start gap-2">
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-foreground-secondary via-foreground to-foreground-secondary">
            16 Yard Skip
          </h3>
          {true && (
            <div className="flex items-center justify-start gap-2 border-[0.5px] border-[#f5a524] bg-background-warning rounded-full text-warning text-sm px-2">
              <GoAlertFill />
              <p>Not Allowed On The Road</p>
            </div>
          )}
          <p className="text-2xl font-bold text-primary mt-auto w-full text-end">
            £496
          </p>
          <p className="text-sm text-foreground-secondary w-full flex items-center justify-end gap-1">
            <IoIosTimer className="w-4 h-4" />
            14 day hire period
          </p>
        </div>
        <div className="w-full flex items-items justify-between gap-2 *:transition-all *:duration-200 *:rounded-lg">
          <Link
            href="/waste-type"
            className="flex items-center justify-center cursor-pointer bg-background-secondary px-8 text-foreground-secondary border-[0.5px] border-foreground-secondary hover:border-foreground hover:text-foreground"
          >
            Back
          </Link>
          <Link
            href="/permit-check"
            className="cursor-pointer flex items-center justify-center gap-1 group border-1 text-background font-semibold bg-gradient-to-br from-yellow to-70% to-primary px-4 py-2"
          >
            <p>Continue</p>
            <FaAngleRight className="group-hover:translate-x-2 transition" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;
