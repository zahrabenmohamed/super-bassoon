import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import DataTables from "views/admin/tables";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdPerson,
  MdLock,
  MdExplore
} from "react-icons/md";
import { BsFileEarmarkTextFill } from "react-icons/bs";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Landing Page",
    layout: "/admin",
    path: "landing",
    icon: <MdExplore className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Audit",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "audit",
    component: <DataTables />,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "users",
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: "Template Generator",
    layout: "/admin",
    path: "generator",
    icon: <BsFileEarmarkTextFill className="h-6 w-6" />, 
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  

];
export default routes;
