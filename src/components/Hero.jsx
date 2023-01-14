import mockup from "../images/mockup.png";
import desktopIntro from "../images/bg-intro-desktop.svg";

function Hero() {
  return (
    <section className="relative flex h-[700px] items-center   bg-lightGray">
      <div className="mx-auto flex w-[80%] flex-col items-center  xl:flex-row ">
        <div className=" order-2 flex max-w-[45ch] flex-col items-start gap-5 border-2 ">
          <h1 className="text-5xl leading-[60px] text-darkBlue">
            Next generation digital banking
          </h1>
          <p className="text-gray-400">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="rounded-full bg-gradient-to-r from-limeGreen to-brightCyan py-2 px-4 text-white">
            Request Invite
          </button>
        </div>
        <div className="">
          <img
            className=" xl:absolute xl:-right-[450px] xl:-top-[260px] xl:h-auto"
            src={desktopIntro}
            alt=""
          />
          <img
            className="absolute top-0  sm:left-0 sm:right-0 sm:mx-auto sm:h-[500px] xl:left-auto  xl:-right-32 xl:-top-32 xl:m-auto   xl:h-auto "
            src={mockup}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
