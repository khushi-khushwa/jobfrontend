import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Jobs from "./components/job/Jobs";
import Browser from "./components/job/Browser";

import UserProfile from "./components/profile/UserProfile";
import JobDescription from "./components/job/JobDescription";
import Edit from "./components/profile/Edit";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/jobs",
      element: <Jobs />,
    },
  
    {
      path: "/description/:id",
      element: <JobDescription/>,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
    {
      path: "/profile",
      element: <UserProfile />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;
