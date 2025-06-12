import FadeIn from "@/components/FadeIn/FadeIn";

const WasteTypePage = () => {
  return (
    <FadeIn className="min-h-screen flex flex-col *:text-center items-center md:items-start justify-start gap-2">
      <h1 className="title text-center sm:!text-start">
        What type of waste are you disposing of?
      </h1>
      <h6 className="text-xl text-foreground-secondary px-1">
        Select all that apply
      </h6>
    </FadeIn>
  );
};

export default WasteTypePage;
