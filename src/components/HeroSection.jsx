import React from "react";
import bannerImage from "../assets/images/process.png";
import { FaSearch } from "react-icons/fa";
import google from "../assets/images/google.png";
import snapchat from "../assets/images/snapchat.png";
import facebook from "../assets/images/facebook.png";
import skyp from "../assets/images/skyp.png";
import linkdin from "../assets/images/linkdin.png";
import circle from "../assets/images/circle.png";
import lenovo from "../assets/images/lenovo.png";
import android from "../assets/images/android.png";
const HeroSection = () => {
  return (
    <div className="h-[800px] max-[630px]:h-[700px]  max-[365px]:h-[600px] w-full flex items-center justify-center mt-0  bg-emerald-600/5 relative">
      <div className="max-[630px]:absolute top-44 max-[420px]:top-36 px-4">
        <h1 className="  text-center my-4 font-bold sm:text-5xl max-[630px]:font-bold max-[630px]:my-2 text-3xl">
          Join us &{" "}
          <span className="text-green-600 sm:text-5xl max-[630px]:font-bold text-3xl ">
            Explore
          </span>{" "}
        </h1>
        <h1 className="  text-center my-4  sm:font-bold sm:text-5xl text-green-600 max-[630px]:my-2 max-[630px]:font-bold  text-3xl">
          Thousands of{" "}
          <span className=" text-black sm:text-5xl max-[630px]:font-bold text-3xl">
            Jobs
          </span>{" "}
        </h1>

        <p className="max-[630px]:text-sm max-[630px]:mt-5 text-slate-400 text-lg mx-auto mt-9 max-w-xl text-center">
          Find Jobs, Employment & Career Opportunities. Some of the companies
          we've helped recruit excellent applicants over the years.
        </p>

        <div className="relative mt-8">
          <input
            type="text"
            className="outline-none border-none w-full h-10 rounded-2xl pl-5"
            placeholder="search jobs"
          />
          <button className="w-20 h-10 bg-green-600 absolute right-0 rounded-2xl ">
            <FaSearch className="text-white text-2xl absolute left-7 top-2" />
          </button>
        </div>
        <p className="text-black text-center mt-3 sm:text-sm text-[0.9rem]">
          Popular Searches:{" "}
          <span className="text-zinc-400">
            Designer, Developer,Web, IOS ,PHP Seniore Engineer
          </span>
        </p>
      </div>

      <div className="bg-white  animate-[bounce_2s_infinite] size-10 absolute top-32  max-[630px]:top-20">
        <img className="  w-6 h-76 m-2" src={facebook} />
      </div>

      <div className="bg-white absolute bottom-32 max-[630px]:bottom-39  max-[420px]:bottom-[10rem] max-[365px]:bottom-[4rem] animate-[bounce_2s_infinite] size-10">
        {" "}
        <img className="   m-[0.4rem] w-7 h-7  " src={snapchat} />
      </div>

      <div className=" max-[1083px]:hidden  bg-white absolute top-[20rem] left-1/4  size-10">
        {" "}
        <img className=" m-[0.4rem] w-7 h-7 " src={linkdin} />
      </div>

      <div className=" max-[1083px]:hidden bg-white absolute  top-[20rem] right-1/4  size-10">
        <img className="  m-[0.4rem] w-7 h-7 " src={skyp} />
      </div>

      <div className=" max-[1907px]:hidden bg-white  absolute top-[31rem] left-[38rem] animate-wiggle size-10">
        {" "}
        <img className=" m-[0.4rem] w-7 h-7 " src={circle} />
      </div>

      <div className=" max-[1907px]:hidden bg-white absolute top-[31rem] right-[38rem]  animate-wiggle size-10">
        <img className="m-[0.4rem] w-7 h-7 " src={google} />
      </div>

      {/* <img className='w-7 h-7' src={android}/>
            <img className='w-7 h-7' src={lenovo}/> */}
    </div>
  );
};

export default HeroSection;
