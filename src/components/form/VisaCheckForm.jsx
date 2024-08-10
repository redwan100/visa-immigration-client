import axios from "axios";
import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import fLogo from "../../assets/footer_logo.svg";

const VisaCheckForm = () => {
  const [visaInfo, setVisaInfo] = useState({});
  const [visaDetails, setVisaDetails] = useState({});
  // Function to handle change in selection
  const handleChange = (event) => {
    setVisaInfo({
      ...visaInfo,
      [event.target.name]: event.target.value,
    });
  };

  const searchHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/visa/filter",
        visaInfo
      );

      if (res?.data) {
        setVisaDetails(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-screen-sm w-full mx-auto pt-8 pb-20">
        <div className="relative">
          {/* line  */}
          <div className="absolute top-1 left-0 w-1 h-full bg-[#FF2C00]"></div>
          {/* line  */}
          <p className="text-[#FF2C00] text-xl font-semibold pl-8">
            check vis with <span className="font-bold">REALME</span>
          </p>
          <p className="text-gray-600 pl-8">
            Check Vis With <span>Realme</span>
          </p>
        </div>

        <form className="my-8 bg-neutral-600 p-7 rounded space-y-5">
          <p className="text-white text-2xl font-semibold mb-8 text-center">
            Search your information
          </p>
          <div className="grid gap-2 sm:grid-cols-2 ">
            <div>
              <label
                htmlFor="visa number"
                className="block text-white mb-1 font-semibold"
              >
                Visa Number
              </label>
              <input
                onChange={handleChange}
                id="visa number"
                name="visaNumber"
                type="text"
                className="w-full bg-neutral-700 py-2 px-3 text-white focus:outline-none border border-neutral-500"
                placeholder="A07****"
              />
            </div>
            <div>
              <label
                htmlFor="visa number"
                className="block text-white mb-1 font-semibold"
              >
                Client Number
              </label>
              <input
                onChange={handleChange}
                id="client number"
                name="clientNumber"
                type="text"
                className="w-full bg-neutral-700 py-2 px-3 text-white focus:outline-none border border-neutral-500"
                placeholder="819065"
              />
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <label
                htmlFor="passport number"
                className="block text-white mb-1 font-semibold"
              >
                Passport Number
              </label>
              <input
                onChange={handleChange}
                id="passport number"
                name="passportNumber"
                type="text"
                className="w-full bg-neutral-700 py-2 px-3 text-white focus:outline-none border border-neutral-500"
                placeholder="A13869347"
              />
            </div>
            <div>
              <label
                htmlFor="birth number"
                className="block text-white mb-1 font-semibold"
              >
                Date of birth
              </label>
              <input
                onChange={handleChange}
                id="birth number"
                name="dateOfBirth"
                type="date"
                className="w-full bg-neutral-700 py-2 px-3 text-white focus:outline-none border border-neutral-500"
                placeholder="0102529902"
              />
            </div>
          </div>
          <div className="">
            <div>
              <label
                htmlFor="nationality"
                className="block text-white mb-1 font-semibold"
              >
                Nationality
              </label>
              <select
                id="options"
                name="nationality"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-neutral-700 text-white   focus:outline-none  sm:text-sm"
              >
                <option value="">--Select Nationality--</option>
                <option value="bangladesh">BANGLADESH</option>
              </select>
            </div>

            <button
              onClick={searchHandler}
              className="bg-neutral-800 py-[.35rem] ml-auto block mt-5 px-6 rounded  text-lg font-medium text-white hover:bg-neutral-900 transition"
            >
              Search
            </button>
          </div>
        </form>

        {/* ------------------ search result ------------- */}
        {visaDetails?.data && (
          <div className="bg-neutral-300 text-neutral-800">
            <div className="p-2">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      pass
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      visa
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      download
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {visaDetails?.data?.passportNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {visaDetails?.data?.visaNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {visaDetails?.data?.clientNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-center w-max mx-auto block text-green-500 text-xl">
                        <a href="" download={visaDetails?.data?.picture}>
                          <AiOutlineDownload />
                        </a>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {visaDetails?.data === null && (
          <>
            <p className="text-center text-lg">No data available</p>
          </>
        )}
      </div>

      {/* footer  */}
      <footer className="py-6 bg-[#FF2C00]">
        <div className="container mx-auto w-full max-w-[1120px] sm:px-6 px-7">
          {/* top */}

          <div className="w-full flex gap-7 flex-col justify-between sm:items-center sm:flex-row ">
            <img
              src={fLogo}
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
      {/* footer  */}
    </>
  );
};

export default VisaCheckForm;
