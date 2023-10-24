import React from "react";
import { MdOutlineEmail, MdOutlineCall } from "react-icons/md";
import { Fade } from "react-reveal";

const GetInTouch = () => {
  return (
    <Fade right delay={1000}>
      <div className="text-white w-80 h-96 ml-10 mb-10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 p-6 rounded-lg shadow-lg">
        <div className="m-5">
          <h1 className="text-3xl text-textGold">Get in touch</h1>
          <p className="mt-10 text-lg">
            Let's create something amazing together. Reach me anytime; your
            message could spark the next big idea.
          </p>
          <div className="flex items-center gap-5 mt-16 ">
            <MdOutlineEmail className="text-2xl text-textGold" />
            <p>
              <a href="mailto:mahajanvivek128@gmail.com">
                mahajanvivek128@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-5 mt-3">
            <MdOutlineCall className="text-textGold text-2xl " />
            <p>
              <a href="tel:+917276321567">+91 7276321567</a>
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default GetInTouch;
