import React, { useState } from "react";
import Navbar from "../Navbar.jsx";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link,  useNavigate } from "react-router-dom";
import { toast } from 'sonner'
import { Button } from "../ui/button.jsx";
import { USER_API_END_POINT } from "@/utils/constant.js"
import axios from "axios";
import notificationSoundFile from "../login/notification.mp3"


const Signup = () => {
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  

  const notificationSound = new Audio(notificationSoundFile);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInputData({ ...inputData, file: e.target.value });
  };

  
// Add a notification sound


// Reference the audio file in the public directory

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // Object.keys(inputData).forEach((key) => {
    //   formData.append(key, inputData[key]);
    // });
    formData.append("fullname", inputData.fullname);
    formData.append("email", inputData.email)
    formData.append("phoneNumber", inputData.phoneNumber)
    formData.append("password", inputData.password);
    formData.append("role", inputData.role)
    if(inputData.file){
    formData.append("file", inputData.file)
    }
    try{
      const res = await axios.post(`${USER_API_END_POINT}/register`,
        formData,{
        headers:{
          "content-type": "multipart/form-data"
        },
        withcredentials:true
      }
      );
      if(res.data.success){
        navigate("/login")
        toast.success(res.data.message)

      // Play the notification sound
      notificationSound.play();
        }
      
    }catch(error){
      console.log(error);
      toast.error(error.response.data.message);
      notificationSound.play();
       
    }finally{
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center justify-center   mx-auto">
        <form
          onSubmit={submitHandler}
          className="mt-16 items-center  w-96 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="text-center font-bold text-xl mb-10">Sign Up</h1>
          <div className="mx-auto w-80 ">
            <Label>Full name</Label>
            <Input
              className="my-2"
              type="text"
              name="fullname"
              value={inputData.fullname}
              onChange={changeEventHandler}
              placeholder="Enter full name"
              // value="name"
            />

            <Label>Email</Label>
            <Input
              className="my-2"
              type="email"
              name="email"
              value={inputData.email}
              onChange={changeEventHandler}
              placeholder="enter your email"
              // value="email"
            />
            <Label>Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              value={inputData.phoneNumber}
              onChange={changeEventHandler}
              className="my-2"
              placeholder="enter your phone number"
            />

            <Label>Password</Label>
            <Input
              type="text"
              name="password"
              value={inputData.password}
              onChange={changeEventHandler}
              className="my-2"
              placeholder="password"
            ></Input>

            <div className="flex items-center justify-between gap-1 mt-5">
              <div className="  text-sm ">
                <Label>Role</Label>
                <div className="flex gap-2 my-4">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={inputData.role === "student"}
                    onChange={changeEventHandler}
                  />
                  Student
                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={inputData.role === "recruiter"}
                    onChange={changeEventHandler}
                  />
                  Recruiter
                </div>
              </div>
              <div className=" ml-3 gap-2">
                <Label>Proflie</Label>
                <Input
                  name="file"
                  value={inputData.file}
                  onChange={changeFileHandler}
                  type="file"
                  className="my-2 cursor-pointer"
                  accept="image/*"
                />
              </div>
            </div>
            <button
              type="submit"
              className=" mt-5 text-white  bg-black h-[40px] w-[80px] border-2  rounded-lg font-semibold"
              onSubmit={submitHandler}
            >
              Sigup
            </button>
            <p className="text-sm mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400">
                Login
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
