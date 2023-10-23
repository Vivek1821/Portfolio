import React from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";
import Work from "./Components/Work";
import About from "./Components/About";

function App() {
  return (
    <>
      {/* <Sidebar />

        <div className="w-4/5 ">
          <Hero /> */}
      <div className="flex flex-row-reverse h-screen w-screen relative md:space-x-4">
        <div className="flex-grow h-full w-full  ">
          <Hero />
          <Work />
          <About />
        </div>
        <div
          className="w-full 
        h-full absolute left-0 top-0  md:w-96 md:sticky lg:relative "
        >
          <div className="h-full w-full max-w-xs ">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
