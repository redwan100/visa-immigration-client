import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigate();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const login = async (e) => {
    e.preventDefault();
    await signIn(userInfo.email, userInfo.password);

    if (user?.email) {
      navigation("/dashboard/all-visa");
    }
  };

  return (
    <div>
      <form action="" className="w-full h-screen grid place-items-center">
        <div className="max-w-xs mx-auto bg-neutral-600 p-4 w-full">
          <h2 className="text-center text-2xl text-white font-semibold">
            Login
          </h2>
          <div>
            <label
              htmlFor="email"
              className="block text-white mb-1 font-semibold"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              id="email"
              name="email"
              type="text"
              className="w-full bg-neutral-700 py-2 px-3 text-white focus:outline-none border border-neutral-500"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-white mb-1 font-semibold"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              id="password"
              name="password"
              type="text"
              className="w-full bg-neutral-700 py-2 px-3 text-white focus:outline-none border border-neutral-500"
              placeholder="*****"
            />
          </div>
          <button
            className="bg-neutral-950 text-white py-2 px-2 mt-4 rounded-md w-full"
            onClick={login}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
