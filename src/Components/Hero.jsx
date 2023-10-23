import React from "react";
import TypeIt from "typeit-react";
import CoverPage2 from "../assets/CoverPage2.jpg";
import Diagram from "../assets/diagram.jpg";
import vivek from "../assets/vivek.jpg";

function Hero() {
  return (
    <div className="mt-10 mb-10 lg:h-3/5 relative">
      <div className="flex flex-row text-textGold h-96 m-2 md:h-full md:w-full relative">
        <img
          src={CoverPage2}
          alt="coverpage"
          className="opacity-30 lg:w-full"
        />
        <div className="text-white absolute top-0 left-0 flex flex-col items-center justify-center text-center w-full h-full p-10  lg:flex-row lg:justify-around lg:text-start ">
          <div>
            <h1 className="text-4xl pr-4 md:text-7xl lg:text-5xl lg:top-1/2">
              A Glimpse into My Creative Vault
            </h1>
            <span className="text-white text-xl mt-3 pr-3">
              <TypeIt
                className="text-textGold"
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .type(" Hi, I'm Vivek ")
                    .pause(750)
                    .delete(6)
                    .pause(500)
                    .type("Front-end Developer")
                    .pause(750)
                    .delete(19)
                    .type("ReactJS Developer");

                  return instance;
                }}
              />
            </span>
          </div>
          <div className="md:w-72 lg:w-106 ">
            <img
              src={vivek}
              alt="diagram"
              className="hero-image w-full h-auto lg:pb-16 hidden bg-opacity-100 lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
