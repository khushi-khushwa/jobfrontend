
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "../../redux/authslice";
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";


const Edit = ({ open, setOpen }) => {

  
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile.bio || "",
    skills: user?.profile?.skills?.map((skill) => skill) || "",
    file: user?.profile?.resume || "",
  });

  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const fileChangeHandler = (e) => {
  //   const file = e.target.files?.[0];
  //   setInput({ ...input, file });
  // };

  const fileChangeHandler = (e) => {
    setInput({ ...input, file: e.target.value });
  };

  
  const submitHandler = async (e) => {
    console.log("click");
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", input.fullname);
    formData.append("email", input.email);
    formData.append("number", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
   
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
       
      // } else{
      //   console.error("unexpected responses");
      //   toast.error("unexpected error while updating profile.")
       }
    } catch (error) {
       console.error(error);
       toast.error(error.response.data.message);
     
      
    }
    finally{

setLoading(false)    
    
    }
    setOpen(false);
    console.log(input);
  };

  return (
    <div>
      <Dialog open={open} aria-describedby="dialog-description">
        <DialogContent 
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
        <DialogHeader>
            <DialogTitle id="dialog-title">Update</DialogTitle>
            </DialogHeader>
          <form onSubmit={submitHandler} id="dialog-description">
            <div className="grid gap-4 py-2">
              <div className=" grid grid-cols-4 items-center gap-4 ">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  name="fullname"
                  className="col-span-3"
                  onChange={changeEventHandler}
                  value={input.fullname}
                />
              </div>
              <div className=" grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  className="col-span-3"
                  onChange={changeEventHandler}
                  value={input.email}
                />
              </div>
              <div className=" grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input
                  id="number"
                  type="number"
                  name="phoneNumber"
                  className="col-span-3"
                  onChange={changeEventHandler}
                  value={input.phoneNumber}
                />
              </div>
              <div className=" grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  type="text"
                  name="bio"
                  className="col-span-3"
                  onChange={changeEventHandler}
                  value={input.bio}
                />
              </div>
              <div className=" grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  type="text"
                  name="skills"
                  className="col-span-3"
                  onChange={changeEventHandler}
                  value={input.skills}
                />
              </div>
              <div className=" grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  type="file"
                  accept="application/pdf"
                  name="file"
                  className="col-span-3"
                  onChange={fileChangeHandler}
                />
              </div>
            </div>
          
            <DialogFooter>
              {loading ? (
                <button className="mr-2 h-[40px] w-[14rem] bg-emerald-500   border-none rounded-lg font-semibold text-white">
                  please wait...
                </button>
              ) : (
                <button
                  type="submit"
                  className="mt-3  bg-emerald-500 h-[40px] w-[23rem] border-none rounded-lg font-semibold text-white"
                >
                  Update Profile
                </button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Edit;









  // Server responded with a status other than 2xx
    //    console.error("API error:", err.response.data);
    //    toast.error(err.response.data.message || "An error occurred while updating your profile.");
    //  } else if (err.request) {
       // Request was made but no response was received
    //    console.error("No response received:", err.request);
    //    toast.error("No response from the server. Please try again later." , err);
    //  } else {
       // Something else happened