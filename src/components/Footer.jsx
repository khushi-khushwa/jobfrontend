import React from "react";
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-950 text-white py-8 mt-2 px-5 ">
      <div className="max-auto  items-center ">
        <div className="flex justify-around items-align">
          <div>
            <h1 className="text-2xl font-bold max-[350px]:text-lg">
              {" "}
              Job <span className="text-red-700">Portal</span>
            </h1>
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/Internship">Internship</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" my-10 h-[0.1rem] bg-slate-300"></div>
        <div className="flex justify-around">
          <div>
            <p className="text-sm text-gray-400 mb-6">
              © 2024 Jobstack. Design & Develop with{" "}
              <span className="text-red-500">❤️</span> by Shreethemes.
            </p>
          </div>

          <div className="flex gap-3 justify-around align-items">
            <div className="">
              <Link to="www.facebook.com">
                <FaSquareFacebook />
              </Link>
            </div>
            <div className="">
              <Link to="">
                <FaLinkedin />
              </Link>
            </div>
            <div className="">
              <Link to="">
                <FaSquareInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
