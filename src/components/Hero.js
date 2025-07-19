import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 text-center items-center justify-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p className="font-semibold">IT'S TIME TO GET</p>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          SWOLE<span className="text-blue-400">NORMOUS</span>
        </h1>
      </div>
      <p className="text-sm md:text-base">
        I hereby understand that by using this app, I could become the{" "}
        <span className="text-blue-400 font-medium">living legend</span> of the
        gym, doomed to have arms bigger than my problems, unable to find clothes
        that fit me, and at constant risk of being mistaken for a{" "}
        <span>workout machine.</span>
      </p>

      <Button text={"Accept & Begin"}></Button>
    </div>
  );
}
