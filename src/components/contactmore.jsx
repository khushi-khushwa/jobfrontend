import React from "react";
import img2 from "../assets/images/job/img2.jpg";
import img1 from "../assets/images/job/img1.jpg";
const Contactmore = () => {
  return (
    <div className=" w-full max-auto  pt-5 lg:pb-72 md:pb-32 pb-16  md:flex  md:justify-around lg:justify-center relative">
 
        <div className="  relative  pb-[10rem] md:pb-0 flex   md:justify-center md:item-center md:px-0 lg:px-5">
          <div className="  ">
            <div className=" md:ml-14  sm:ml-28  md:right-[1rem]  lg:right-[1rem] sm:w-[19rem] md:w-[15rem] lg:w-[22rem]   max-[639px]:w-[15rem] max-[639px]:ml-24 max-[478px]:ml-10 max-[399px]:w-[13rem]">
              <img src={img1} />
            </div>
            <div className="  md:w-[13rem] lg:w-[18rem]   absolute  sm:w-[15rem] sm:top-[9.5rem] sm:left-[23rem] md:top-[7.5rem] md:left-[10rem] lg:top-[13rem] lg:left-[13rem] border-[0.5rem] border-slate-50 max-[639px]:w-[14rem] max-[639px]:top-[6.8rem]  max-[639px]:left-[14rem]   max-[475px]:left-[10rem] max-[399px]:w-[11rem]">
              <img src={img2} />
            </div>
          </div>
        </div>
        <div className=" relative md:ml-1 lg:ml-10 flex justify-center items-center sm:px-6 md:px-2 lg:px-5 ">
          <div className="px-6 sm:px-0 ">
            <h1 className="font-semibold  lg:text-3xl md:text-2xl  sm:text-2xl text-lg">Millions of jobs.  <span className="md:hidden sm:block">Find the one that's right for you</span></h1>
            <h1 className="font-semibold lg:text-3xl md:text-2xl  sm:text-2xl text-lg hidden md:block">
              Find the one that's right for you
            </h1>

            <div className=" md:w-[20rem]  lg:w-[35rem] mt-4">
              <p className="text-slate-500  text-sm md:text-[0.9rem]">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 30000+
                companies worldwide.
              </p>
            </div>
            <div className="mt-4 text-sm md:text-lg md:text-[0.8rem]">
            <p>Digital Marketing Solutions for Tomorrow.</p>
            <p>Our Talented & Experienced Marketing Agency.</p>
            <p>Create your own skin to match your brand.</p>
            </div>
         
            <button className="h-10 w-28 mt-5 bg-green-600 rounded">
             
              Contact us
            </button>
          </div>
        </div>
      </div>


  );
};

export default Contactmore;
