import { createBrowserRouter } from "react-router-dom";
import AllVisa from "../components/dashboard/AllVisa";
import CreateVisa from "../components/dashboard/CreateVisa";
import Login from "../components/form/Login";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import VisaCheck from "../layouts/VisaCheck";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/visacheck",
    element: <VisaCheck />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/create-visa",
        element: <CreateVisa />,
      },
      {
        path: "/dashboard/all-visa",
        element: <AllVisa />,
      },
    ],
  },
]);

export default router;
