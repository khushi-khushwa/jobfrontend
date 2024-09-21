import React, { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Navbar from "../Navbar";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { Button } from "@/components/ui/button";

import JobSeeker from "./JobSeeker";
import Edit from "./Edit";


const UserProfile = () => {
  const [open , setOpen] = useState(false)
  return (
    <div className=" ">
      <Navbar />

      <div className=" relative mt-24  max-w-4xl mx-auto  border-2 rounded-2xl border-slate-100  p-6 ">
        <div className="flex relative  ">
          <div>
            <div className="flex gap-6 items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <div>
                <h1 className="font-bold">khushi</h1>
                <p>I am frontend web developer.</p>
              </div>
            </div>
            <div className="mt-4 text-[15px] ">
              <div className="flex items-center gap-2">
                <MdEmail />
                <p>khuhsi@gmail.com</p>
              </div>

              <div className="flex items-center gap-2">
                <IoCallOutline />
                <p>3485949964</p>
              </div>
              <div className="mt-3">
                <Link>Resume</Link>
              </div>
            </div>
          </div>

          <div className="max-w-4xl absolute right-4 ">
            <div className="mb-4">
              <h2 className="font-bold">Education</h2>
              <div>
                <p className="text-sm">BCA - IGNOU</p>
              </div>
            </div>

            <div>
              <h1 className="font-bold">Skills</h1>

              <div className="flex items-center gap-4 mt-3">
                <button className="h-7 w-24 p-1  max-[455px]:w-20 flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
                  Javascript
                </button>
                <button className="h-7 w-24 p-1  max-[455px]:w-20  flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
                  React
                </button>
                <button className="h-7 w-24 p-1  max-[455px]:w-20 flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
                  Html & Css
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-1  " >
            <TbEdit className="h-5 w-5" onClick={() => setOpen(true)}></TbEdit>
          </div>
        </div>
      </div>
      <JobSeeker />
      <Edit open={open} setOpen={setOpen} />
    </div>
  );
};

export default UserProfile;
