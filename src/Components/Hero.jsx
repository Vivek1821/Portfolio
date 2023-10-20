import React from "react";
import Typist from "react-typist";
import TypeIt from "typeit-react";
import Sidebar from "./Sidebar";
import CoverPage2 from "../assets/CoverPage2.jpg";
import { TbMathLower, TbMathGreater } from "react-icons/tb";

function Hero() {
  return (
    // Image SEction
    <div className="mt-10 lg:h-3/5">
      {/* md:h-96 */}
      <div className="flex flex-row  text-textGold h-96 m-2 md:h-full md:w-full  relative  ">
        <img
          src={CoverPage2}
          alt="coverpage"
          className="opacity-30 lg:w-full "
        />
        {/* Text SEction */}
        <span className="text-white absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full ">
          <h1 className="text-4xl md:text-7xl text-center pr-4">
            A Glimpse into My Creative Vault
          </h1>
          <span className="text-white text-xl mt-3 pr-3">
            {/* Typing Animation */}
            <TypeIt
              className="text-textGold"
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type(" Hi, I'm Vivek ")
                  .pause(750)
                  .delete(6)
                  .pause(500)
                  .type("Front-dne")
                  .pause(750)
                  .delete(3)
                  .type("End Developer")
                  .pause(750)
                  .delete(19)
                  .type("ReactJS Developer");

                return instance;
              }}
            />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Hero;
