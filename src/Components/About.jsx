import React from "react";
import vivek from "../assets/vivek.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-white m-10 mr-10">
      <img
        src={vivek}
        alt="Vivek"
        className="hero-image w-60 mb-10 md:h-52 md:w-72 lg:w-80 rounded-full object-cover "
      />
      <div className="about-text max-h-96  bg-gray-900 rounded-lg p-8   whitespace-pre-line md:ml-8 text-center md:text-left">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Hi, I'm Vivek!</h2>
        <p className="text-xs md:text-sm  mb-6">
          I'm a client-focused software engineering graduate, skilled in
          harnessing transformative technologies to craft tailored solutions.
          Fluent in JavaScript, I create seamless user experiences using React
          and Angular. I integrate Redux for efficient state management,
          ensuring captivating interfaces.
        </p>
        <p className="text-xs md:text-sm ">
          Grounded in software engineering principles, I architect intuitive,
          client-centric solutions that exceed expectations. Fueled by
          innovation and a deep understanding of software engineering, my goal
          is to deliver results that profoundly resonate with users and
          stakeholders. I'm enthusiastic about applying my skills to fashion
          impactful solutions that leave indelible positive impressions.
        </p>
      </div>
    </div>
  );
};

export default About;
