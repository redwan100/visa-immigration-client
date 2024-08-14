import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg";
import fLogo2 from "../assets/fLogo2.svg";
import fLogo from "../assets/footer_logo.svg";
import logo from "../assets/home_logo.svg";
const MainLayout = () => {
  return (
    <div>
      <div
        className="w-full h-full bg-center pb-28"
        style={{
          backgroundImage: `url(${bg})`, // Use the imported image
        }}
      >
        {/* // ! navbar  */}
        <div className="container mx-auto py-2 px-4">
          <img src={logo} alt="logo" className="w-28 sm:w-36" />
        </div>
        {/* // ! navbar  */}

        {/* breadcrumbs */}
        <div className="pb-6 pt-28">
          <p className="flex items-center gap-1 justify-center">
            <span>
              <AiFillHome className="text-gray-50" />
            </span>
            <span className="text-gray-300 text-xs"> / New Zealand visas</span>
          </p>
        </div>
        {/* breadcrumbs */}

        {/* title  */}
        <div className="p-4">
          <p className="text-center text-[1.40rem] sm:text-3xl md:text-5xl text-white font-bold">
            New Zealand visas
          </p>
        </div>
        {/* title  */}

        {/* cards  */}
        <div className="container mx-auto py-4 flex items-center justify-center flex-wrap gap-[1px] px-8 w-full max-w-screen-sm md:grid md:grid-cols-3 ">
          <div className="bg-[#EBEDEF]  py-2 px-3 md:py-16 relative group transition-all duration-400 md:col-span-2 hover:bg-neutral-800 cursor-pointer ">
            <h3 className="text-neutral-800 font-semibold md:text-xl md:font-bold md:px-2 group-hover:text-white">
              Explore and select a visa
            </h3>
            <p className=" absolute w-full h-full bg-neutral-800 p-2 cursor-pointer text-white top-0 left-0 invisible md:group-hover:visible transition duration-300 opacity-0 group-hover:opacity-100">
              You can compare visas side by side to help you find a visa that
              may give you a pathway to live in New
            </p>
          </div>
          <div className="bg-[#EBEDEF]  py-2 px-3 md:py-[3.12rem] relative md:col-span-1 group  hover:bg-neutral-800 cursor-pointer ">
            <h3 className="text-neutral-800 font-semibold md:text-xl md:font-bold md:px-2 group-hover:text-white">
              Preparing a visa application
            </h3>
            <p className="absolute w-full h-full bg-neutral-800 p-2 cursor-pointer text-white top-0 left-0 invisible md:group-hover:visible transition duration-300 opacity-0 group-hover:opacity-100">
              Find out about the process to apply for a visa online or on paper,
              and how to prepare to supporting
            </p>
          </div>

          <div className="bg-[#EBEDEF]  py-2 px-3 md:py-16 relative md:col-span-1 group  hover:bg-neutral-800 cursor-pointer ">
            <h3 className="text-neutral-800 font-semibold md:text-xl md:font-bold md:px-2 group-hover:text-white">
              Waiting for a visa
            </h3>
            <p className="absolute w-full h-full bg-neutral-800 p-2 cursor-pointer text-white top-0 left-0 invisible md:group-hover:visible transition duration-300 opacity-0 group-hover:opacity-100">
              Find out how to check the status of your visa or NZeTA online and
              how long it normally takes us
            </p>
          </div>
          <Link to={"/visacheck"}>
            <div className="bg-[#EBEDEF]  py-2 px-3 md:py-[4rem] relative md:col-span-1 group  hover:bg-neutral-800 cursor-pointer ">
              <h3 className="text-neutral-800 font-semibold md:text-xl md:font-bold md:px-2 group-hover:text-white">
                Already have a visa
              </h3>
              <p className="absolute w-full h-full bg-neutral-800 p-2 cursor-pointer text-white top-0 left-0 invisible md:group-hover:visible transition duration-300 opacity-0 group-hover:opacity-100">
                Now that you have a visa, you may have questions about moving to
                New Zealand, or what happens to
              </p>
            </div>
          </Link>
          <div className="bg-[#EBEDEF]  py-2 px-3 md:py-16 relative md:col-span-1 group  hover:bg-neutral-800 cursor-pointer ">
            <h3 className="text-neutral-800 font-semibold md:text-xl md:font-bold md:px-2 group-hover:text-white">
              Information about NZeTA
            </h3>
            <p className="absolute w-full h-full bg-neutral-800 p-2 cursor-pointer text-white top-0 left-0 invisible md:group-hover:visible transition duration-300 opacity-0 group-hover:opacity-100">
              Some people can an NZeTA to travel to New Zealand without applying
              for a visa first. This depends
            </p>
          </div>
        </div>
        {/* cards  */}
      </div>
      {/* --------------footer---------------- */}

      <footer className="py-6 bg-neutral-950">
        <div className="container mx-auto w-full max-w-[1120px] sm:px-6 px-7">
          {/* top */}

          <div className="w-full flex gap-7 flex-col justify-between sm:items-center sm:flex-row ">
            <Link to={"https://www.mbie.govt.nz/"} target="_blank">
              <img
                src={fLogo}
                alt="footer logo"
                className="w-[14rem] opacity-80 hover:opacity-100 transition-all cursor-pointer"
              />
            </Link>
            <img
              src={fLogo2}
              alt="footer logo"
              className="w-[14rem] opacity-80 hover:opacity-100 transition-all cursor-pointer"
            />
          </div>

          {/* top */}

          {/* bottom */}
          <div className="flex flex-col justify-between md:items-center pt-8 sm:flex-row gap-7">
            <ul className="flex flex-col items-center gap-2 flex-wrap sm:flex-row ">
              <li className="text-gray-300 uppercase hover:underline hover:underline-offset-4 hover:text-white transition-all cursor-pointer text-sm font-semibold text-left sm:w-max w-full ">
                glossary
              </li>
              <li className="text-gray-300 uppercase hover:underline hover:underline-offset-4 hover:text-white transition-all cursor-pointer text-sm font-semibold text-left sm:w-max w-full">
                accessibility
              </li>
              <li className="text-gray-300 uppercase hover:underline hover:underline-offset-4 hover:text-white transition-all cursor-pointer text-sm font-semibold text-left sm:w-max w-full">
                privacy
              </li>
              <li className="text-gray-300 uppercase hover:underline hover:underline-offset-4 hover:text-white transition-all cursor-pointer text-sm font-semibold text-left sm:w-max w-full">
                policy
              </li>
              <li className="text-gray-300 uppercase hover:underline hover:underline-offset-4 hover:text-white transition-all cursor-pointer text-sm font-semibold text-left sm:w-max w-full">
                copyright
              </li>
              <li className="text-gray-300 uppercase hover:underline hover:underline-offset-4 hover:text-white transition-all cursor-pointer text-sm font-semibold text-left sm:w-max w-full">
                terms of use
              </li>
              <li className="text-gray-300 uppercase hover:underline hover:underline-offset-4 hover:text-white transition-all cursor-pointer text-sm font-semibold text-left sm:w-max w-full">
                cookie preferences
              </li>
            </ul>
            <p className="text-gray-50 ">Crown copyright © (2024)</p>
          </div>
          {/* bottom */}
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
