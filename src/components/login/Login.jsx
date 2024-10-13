import React, { useState } from "react";
import Navbar from "../Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button.jsx";
import { USER_API_END_POINT } from "@/utils/constant.js";
import axios from "axios";
import notificationSoundFile from "../login/notification.mp3";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../../redux/authslice.js";

const Login = () => {
  const [enterData, setEnterData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notificationSound = new Audio(notificationSoundFile);

  const enterDataFetch = (e) => {
    setEnterData({ ...enterData, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, enterData, {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true, // Corrected spelling
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
        notificationSound.play();
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
      notificationSound.play();
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center mx-auto">
        <form
          onSubmit={onLogin}
          className="mt-16 items-center w-96 border border-gray-200 rounded-md p-4 my-10"
        >
          <div className="mx-auto w-72">
            <Label>Email</Label>
            <Input
              className="my-2"
              type="email"
              name="email"
              value={enterData.email}
              onChange={enterDataFetch}
              placeholder="Enter your email"
            />

            <Label>Password</Label>
            <Input
              type="password" // Changed from "text" to "password"
              name="password"
              value={enterData.password}
              onChange={enterDataFetch}
              className="my-2"
              placeholder="Password"
            />

            <div className="flex items-center justify-between gap-1 mt-5">
              <Label>Role</Label>
              <div className="flex gap-2 my-4">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={enterData.role === "student"}
                  onChange={enterDataFetch}
                />
                Student
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={enterData.role === "recruiter"}
                  onChange={enterDataFetch}
                />
                Recruiter
              </div>
            </div>

            {loading ? (
              <button className="mr-2 h-[40px] w-[7rem] bg-emerald-500 border-none rounded-lg font-semibold text-white">
                Please wait...
              </button>
            ) : (
              <button
                type="submit"
                className="mt-3 bg-emerald-500 h-[40px] w-[80px] border-none rounded-lg font-semibold text-white"
              >
                Login
              </button>
            )}

            <p className="text-sm mt-3">
              Create account?{" "}
              <Link to="/signup" className="text-blue-400">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
