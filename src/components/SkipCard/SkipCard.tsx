import { useSkipsContext } from "@/context/skips/skipsProvider";
import { Skip } from "@/services/skip/skip.types";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";

const SkipCard = ({ skip }: { skip: Skip }) => {
  const { selectedSkip, setSelectedSkip } = useSkipsContext();

  const handleClick = () => {
    setSelectedSkip(isSelected ? null : skip);
  };

  const isSelected = selectedSkip === skip;

  return (
    <button
      onClick={handleClick}
      className={`${
        isSelected && "border-1 border-secondary"
      } relative cursor-pointer flex flex-col sm:flex-row items-start justify-between bg-background-secondary text-foreground rounded-2xl overflow-hidden w-full sm:h-40 max-w-sm sm:max-w-lg group border-1 border-gray-900 hover:border-secondary transition-all duration-300`}
    >
      <div
        className={`${
          isSelected ? "bg-primary" : "bg-background"
        } transition border-1 border-secondary rounded-xl w-8 h-8 absolute top-2 right-2 flex items-center justify-center text-background`}
      >
        <FaCheck
          className={`${
            isSelected ? "text-background-secondary" : "text-transparent"
          } transition-all duration-300 w-5 h-5`}
        />
      </div>
      <div className="flex items-center justify-center w-96 h-full overflow-hidden">
        <Image
          src={
            skip.size < 20
              ? "/image/skips/small-skip.jpg"
              : "/image/skips/big-skip.jpg"
          }
          alt={`${skip.size} yard skip`}
          width={600}
          height={300}
          className={`${
            isSelected ? "scale-110 grayscale-0" : "grayscale-50 scale-100"
          } [@media(max-width:380px)]:-translate-x-10 object-cover w-full h-full transition group-hover:grayscale-0 group-hover:scale-110`}
        />
      </div>
      <div className="flex flex-col items-start p-4 gap-2 w-full h-full">
        <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-foreground-secondary via-foreground to-foreground-secondary">
          {skip.size} Yard Skip
        </h3>
        {!skip.allowed_on_road && (
          <div className="flex items-center justify-start gap-2 border-[0.5px] border-warning bg-background-warning rounded-full text-warning text-sm px-2">
            <GoAlertFill />
            <p>Not Allowed On The Road</p>
          </div>
        )}
        <p className="text-2xl font-bold text-primary mt-auto w-full text-end">
          £{skip.price_before_vat}
        </p>
        <p className="text-sm text-foreground-secondary w-full flex items-center justify-end gap-1">
          <IoIosTimer className="w-4 h-4" />
          {skip.hire_period_days} day hire period
        </p>
      </div>
    </button>
  );
};

export default SkipCard;
