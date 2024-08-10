import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateVisa = () => {
  const [userInfo, setUserInfo] = useState({});

  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("file", file);
    formDataToSend.append("data", JSON.stringify(userInfo));

    try {
      await axios.post("http://localhost:5000/api/v1/visa", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/dashboard/all-visa");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <form className="my-8 bg-neutral-600 p-7 rounded max-w-screen-sm mx-auto w-full space-y-5">
        <p className="text-white text-2xl font-semibold mb-8 text-center">
          Create Visa
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
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
              placeholder="0102529902"
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
              placeholder="0102529902"
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
              placeholder="0102529902"
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
        <div className="grid items-center gap-2 sm:grid-cols-2">
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
              <option value="" disabled>
                --Select Nationality--
              </option>
              <option value="bangladesh">bangladesh</option>
              <option value="usa">usa</option>
              <option value="canada">canada</option>
              <option value="uk">uk</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="file"
              className="block text-white mb-1 font-semibold"
            >
              Attach Pdf
            </label>
            <input
              onChange={handleFileChange}
              id="file"
              name="file"
              type="file"
              accept=".pdf"
              className="w-full bg-neutral-700 py-[.30rem] px-3 text-white focus:outline-none border border-neutral-500"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-neutral-800 py-[.30rem] ml-auto block mt-5 px-4 rounded  text-lg font-medium text-white hover:bg-neutral-900"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateVisa;
