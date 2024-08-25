import React from "react";
import img2 from "../assets/images/job/img2.jpg";
import img1 from "../assets/images/job/img1.jpg";
const Contactmore = () => {
  return (
    <div className=" w-full bg-red-800 max-auto  pt-5 pb-72 md:flex  md:justify-around lg:justify-center relative">
 
        <div className="  relative pb-[10rem] md:pb-0 flex justify-center item-center md:px-2 lg:px-5">
          <div className="">
            <div className=" w-[6rem] sm:[13rem] md:w-[15rem] lg:w-[25rem] xl:[25rem]">
              <img src={img1} />
            </div>
            <div className="  w-[6rem] md:w-[13rem] lg:w-[18rem]   absolute md:top-[8rem] md:left-[7rem] lg:top-[10rem] lg:left-[11rem] border-[0.5rem] border-slate-50">
              <img src={img2} />
            </div>
          </div>
        </div>
        <div className=" ml-10 flex justify-center items-center sm:px-6 md:px-2 lg:px-5 xl:px-8">
          <div className="px-6 sm:px-0">
            <h1 className="font-semibold text-3xl">Millions of jobs.</h1>
            <h1 className="font-semibold text-3xl">
              Find the one that's right for you
            </h1>

            <div className=" w- md:w-[28rem] lg:[32rem] mt-4">
              <p className="text-slate-500 ">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 30000+
                companies worldwide.
              </p>
            </div>
            <div className="mt-4">
            <p>Digital Marketing Solutions for Tomorrow</p>
            <p>Our Talented & Experienced Marketing Agency</p>
            <p>Create your own skin to match your brand</p>
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
