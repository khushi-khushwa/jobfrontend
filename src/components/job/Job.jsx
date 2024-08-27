import React from "react";
import { CiBookmark } from "react-icons/ci";
import google from "../../assets/images/google.png";
const Job = () => {
  return (
    <div className=" flex justify-center align-center">
      <div className="shadow p-5 max-[1420px]:p-4  hover:shadow-emerald-300  ">

        <div className="flex gap-5 items-center">
          <div className="w-7 h-7">
            <img src={google} />
          </div>
          <h2>Assistant Manager</h2>
          <div className="ml-24 max-[1420px]:ml-20 h-8 w-8 bg-slate-100 border-zinc-600 rounded-full flex justify-center items-center">
          <CiBookmark className=" w-5 h-5 "/>
          </div>
          
        </div>
        <div className="mt-5 flex gap-4">
         <div className="h-14 w-[0.3rem] rounded-s-md bg-emerald-200">

         </div>
          <div className="space-y-1 max-[455px]:text-sm max-[1420px]:text-sm ">
          <h1>salary:3000</h1>
          <h2>posted: 2day ago</h2>
          </div>
          
        </div>
        <div className="flex items-center gap-4 mt-9">
          <button className="h-7 w-24 p-1  max-[455px]:w-20  max-[1420px]:w-20 flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm max-[1420px]:text-sm">
            Details
          </button>
          <button className="h-7 w-24 p-1  max-[455px]:w-20 max-[1420px]:w-20 max-[1420px]:text-sm flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
            Part time
          </button>
          <button className="h-7 w-24 p-1  max-[455px]:w-20 max-[1420px]:w-20 max-[1420px]:text-sm flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
            Saved later
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Job;
