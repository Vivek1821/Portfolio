# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import React, { useState, useEffect } from "react";
import myImage from "../assets/vivek.jpg";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import { MdOutlineDoneAll } from "react-icons/md";
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import { LiaBarsSolid } from "react-icons/lia";
import VivekMahajanResume from "../assets/VivekMahajan.pdf";

const Sidebar = () => {
  const [active, setActive] = useState(null);

  const handleToggle = () => {
    setActive((prevState) => !prevState);
  };

  const downloadResume = () => {
    window.open(VivekMahajanResume, "_blank");
  };

  const handleClick = (link) => {
    window.open(link);
  };

  return (
    <>
      <div
        className="flex flex-row justify-between text-white text-xl place-self-end sticky m-3 pt-3 w-full md:hidden"
        onClick={handleToggle}
      >
        {active ? (
          <TbLayoutSidebarRightExpand />
        ) : (
          <TbLayoutSidebarLeftExpand />
        )}
        <LiaBarsSolid className="font-bold" />
      </div>
      <div>
        {/* Profile */}
        <div className={`transition-opacity ${active ? "hidden" : ""}`}>
          <div className="flex flex-col h-[90vh] w-2/3 bg-primary ml-10 sm:w-2/5 sm:h-[90vh] md:w-1/4 md:h-[93vh] lg:w-1/5 ml-5 m-5 relative ">
            <div className="flex flex-col items-center">
              <img
                src={myImage}
                className="rounded-full object-center w-2/5 mt-5"
              />
              <h1 className="text-white m-2 text-lg">Vivek Mahajan</h1>
              <div className="flex flex-col items-center">
                <h3 className="text-textGold">Front-End Developer,</h3>
                <h3 className="text-textGold">React Developer</h3>
              </div>
              {/* About Section */}
            </div>
            <div
              className={`bg-tertiary container m-auto mt-5 h-2/3 sm:h-76 overflow-y-auto  `}
            >
              {/* Residence section */}
              <div className="m-4">
                <div className="flex flex-row justify-between sm:text-xs ">
                  <p className="text-white">Residence:</p>
                  <p className="text-textGold">India</p>
                </div>
                <div className="flex flex-row justify-between sm:text-xs ">
                  <p className="text-white">City:</p>
                  <p className="text-textGold">Pune</p>
                </div>
                <div className="flex flex-row justify-between sm:text-xs">
                  <p className="text-white">Age:</p>
                  <p className="text-textGold">23</p>
                </div>
                {/* Horizontal Line */}
                <hr className="w-48 mt-5 mx-auto rounded sm:w-40" />
                {/* SKill Section */}
                <div className="space-y-2">
                  <div className="flex flex-row justify-between text-textGrey items-center mt-3 sm:text-xs">
                    <p className="text-textGold">ReactJS</p>
                    <p>80%</p>
                  </div>
                  <div className="h-1 w-[80%] bg-blue-950"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-row justify-between text-textGrey items-center mt-3 sm:text-xs">
                    <p className="text-textGold">JavaScript</p>
                    <p>80%</p>
                  </div>
                  <div className="h-1 w-[80%] bg-blue-950"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-row justify-between text-textGrey items-center mt-3 sm:text-xs">
                    <p className="text-textGold">TailwindCSS</p>
                    <p>85%</p>
                  </div>
                  <div className="h-1 w-[85%] bg-blue-950"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-row justify-between text-textGrey items-center mt-3 sm:text-xs">
                    <p className="text-textGold">CSS</p>
                    <p>90%</p>
                  </div>
                  <div className="h-1 w-[90%] bg-blue-950"></div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-row justify-between text-textGrey items-center mt-3 sm:text-xs">
                    <p className="text-textGold">HTML</p>
                    <p>95%</p>
                  </div>
                  <div className="h-1 w-[95%] bg-blue-950"></div>
                </div>
                {/* Horizontal Line */}
                <hr className="w-48 mt-5 mx-auto rounded sm:w-40" />
                {/* Extra Skills */}
                <div className="flex flex-row space-y-2 text-textGrey sm:text-xs">
                  <MdOutlineDoneAll className=" fill-blue-950 mt-2" />
                  <p className="ml-3 text-textGold">Angular</p>
                </div>
                <div className="flex flex-row space-y-2 text-textGrey sm:text-xs">
                  <MdOutlineDoneAll className=" fill-blue-950 mt-2" />
                  <p className="ml-3 text-textGold">BootStrap , MaterialUI</p>
                </div>
                <div className="flex flex-row space-y-2 text-textGrey sm:text-xs">
                  <MdOutlineDoneAll className=" fill-blue-950 mt-2" />
                  <p className="ml-3 text-textGold">NodeJS , NextJS</p>
                </div>
                <div className="flex flex-row space-y-2 text-textGrey sm:text-xs">
                  <MdOutlineDoneAll className=" fill-blue-950 mt-2" />
                  <p className="ml-3 text-textGold">GIT Knowledge</p>
                </div>
                {/* Horizontal Line */}
                <hr className="w-48 mt-5 mx-auto rounded sm:w-40" />
                {/* Resume Download */}
                <div>
                  <div className="text-white flex justify-center mt-5 ">
                    <button
                      onClick={downloadResume}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded sm:py-1 sm:px-2 md:px-1 sm:text-sm"
                    >
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex flex-row justify-around p-3 lg:p-2 text-white ">
              <p>
                <SlSocialTwitter
                  onClick={() =>
                    handleClick("https://www.linkedin.com/in/vivekmahajan128/")
                  }
                />
              </p>
              <p>
                <SlSocialGithub
                  onClick={() => handleClick("https://github.com/Vivek1821")}
                />
              </p>
              <p>
                <SlSocialLinkedin
                  onClick={() =>
                    handleClick("https://www.linkedin.com/in/vivekmahajan128/")
                  }
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
