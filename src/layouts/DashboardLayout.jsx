import { useContext } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const DashboardLayout = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const signOutHandler = async () => {
    await logOut();
    navigate("/");
  };

  return (
    <div className="bg-neutral-100 w-full h-screen">
      <aside className="max-w-32 w-full h-screen bg-neutral-600 fixed top-0 flex flex-col justify-between pb-9">
        <ul className="">
          <li className="text-center text-white hover:bg-neutral-700 p-3 cursor-pointer border-b border-b-neutral-700">
            <Link to={"/dashboard/create-visa"}>Create</Link>
          </li>
          <li className="text-center text-white hover:bg-neutral-700 p-3 cursor-pointer border-b border-b-neutral-700">
            <Link to={"/dashboard/all-visa"}>All Visa</Link>
          </li>
        </ul>
        <button
          className="text-white text-center w-max mx-auto flex items-center gap-1 bg-neutral-800 py-1 px-2 rounded-md hover:bg-neutral-900 transition-all
        
        "
          onClick={signOutHandler}
        >
          Logout <AiOutlineLogout />
        </button>
      </aside>

      <div className="ml-[8rem] p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
