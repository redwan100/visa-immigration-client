import axios from "axios";
import { useState } from "react";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { Link } from "react-router-dom";
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

  const handleDownload = async (visaNumber) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/download/${visaNumber}`,
        {
          method: "GET",
          responseType: "blob",
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      );

      if (!response.statusText) {
        throw new Error("Network response was not ok");
      }

      const blob = new Blob([response.data], { type: "application/pdf" });

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = visaDetails?.data?.picture; // Naming the file using the visa number
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url); // Clean up
    } catch (error) {
      console.error("Failed to download file:", error);
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
            check visa with <span className="font-bold">REALME</span>
          </p>
          <p className="text-gray-600 pl-8">
            Check Visa With <span>Realme</span>
          </p>
        </div>

        <form className="my-8 bg-[#282D3A] p-7 rounded space-y-5">
          <p className="text-white text-2xl font-semibold mb-2">Search:</p>
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
                className="w-full bg-[#373D4F] py-2 px-3 text-white focus:outline-none"
                placeholder="A07****"
                autoComplete="off"
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
                className="w-full bg-[#373D4F] py-2 px-3 text-white focus:outline-none"
                placeholder="819065"
                autoComplete="off"
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
                className="w-full bg-[#373D4F] py-2 px-3 text-white focus:outline-none"
                placeholder="A13869347"
                autoComplete="off"
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
                className="w-full bg-[#373D4F] py-2 px-3 text-white focus:outline-none"
                placeholder="0102529902"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 items-center gap-2 ">
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
                className="mt-1 block w-full px-3 py-3 bg-[#373D4F] text-white focus:outline-none  sm:text-sm md:text-lg"
              >
                <option value="">--Select Nationality--</option>
                <option value="bangladesh">BANGLADESH</option>
                <option value="india">INDIA</option>
                <option value="united-states">UNITED STATES</option>
                <option value="canada">CANADA</option>
                <option value="australia">AUSTRALIA</option>
                <option value="united-kingdom">UNITED KINGDOM</option>
                <option value="germany">GERMANY</option>
                <option value="france">FRANCE</option>
                <option value="china">CHINA</option>
                <option value="japan">JAPAN</option>
                <option value="brazil">BRAZIL</option>
                <option value="south-africa">SOUTH AFRICA</option>
              </select>
            </div>

            <div className="mr-auto mt-3 sm:mt-7">
              <button
                onClick={searchHandler}
                className="bg-[#FF2C00] py-[.60rem] ml-auto block px-6 text-lg font-medium text-white hover:bg-[#FF2C00]/90 transition  justify-self-start"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {/* ------------------ search result ------------- */}
        {visaDetails?.data && (
          <div className=" text-neutral-800 max-w-screen-sm w-full ">
            <div className="border border-1  max-w-sm w-full mx-auto">
              <table className=" divide-y divide-gray-200 w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      download
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        className="text-center w-max mx-auto text-xl flex items-center justify-center gap-1 text-red-500"
                        onClick={() =>
                          handleDownload(visaDetails?.data?.visaNumber)
                        }
                      >
                        PDF
                        <BsFillFileEarmarkPdfFill />
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
            <p className="text-center text-lg sm:text-2xl text-white bg-[#282D3A] py-10">
              No data available
            </p>
          </>
        )}
      </div>

      {/* footer  */}
      <footer className="py-6 bg-[#FF2C00]">
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
