import React from "react";
import google from "../assets/images/google.png";
import snapchat from "../assets/images/snapchat.png";
import facebook from "../assets/images/facebook.png";
import skyp from "../assets/images/skyp.png";
import linkdin from "../assets/images/linkdin.png";
import circle from "../assets/images/circle.png";
import lenovo from "../assets/images/lenovo.png";
import android from "../assets/images/android.png";
const JobCards = () => {
  return (
    <div class=" bg-white  border-1  rounded-md  flex justify-center items-center">
      <div className=" max-[400px]:p-4 shadow  sm:p-8 max-[639px]:p-5 ">
        <div className="flex  gap-10">
          <div className="size-10 bg-white  flex items-center justify-center shadow ">
            <img className="h-7 w-7" src={facebook} />
          </div>

          <div className="">
            <h1 className="font-medium text-lg max-[455px]:text-sm">
              {" "}
              Facebook
            </h1>
            <p className="text-sm text-gray-500">2 days ago</p>
          </div>
          <div className="h-7 w-20  text-xs font-semibold flex items-center justify-center bg-emerald-50 rounded-full">
            <h3 className="">Full Time</h3>
          </div>
        </div>
        <div className=" mt-5 space-y-2">
          <h1 className="font-semibold text-lg max-[455px]:text-sm ">
            web Designer / Developer
          </h1>
          <p className="font-semibold text-[1rem] max-[455px]:text-sm">
            Australia
          </p>
          {/* <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
        </div>
        <div className="flex items-center gap-4 mt-3">
          <button className="h-7 w-24 p-1  max-[455px]:w-20 flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
            12 position
          </button>
          <button className="h-7 w-24 p-1  max-[455px]:w-20  flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
            Part time
          </button>
          <button className="h-7 w-24 p-1  max-[455px]:w-20 flex items-center justify-center bg-emerald-50 rounded-lg max-[455px]:text-sm">
            24LPA
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
