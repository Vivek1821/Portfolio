import React from "react";
import Fade from "react-reveal/Fade";

const Skill = ({ skills }) => (
  <ul className="mt-1">
    {skills.map((skill, index) => (
      <li className="" key={index}>
        {skill}
      </li>
    ))}
  </ul>
);

const Experience = () => {
  const data = {
    experience1: {
      position: "Junior Front-End Developer",
      company: "Technical Veer Digital Solution",
      timePeriod: "July, 2022 - Present",
      keySkills: ["ReactJS", "JavaScript", "TailwindCSS"],
    },
    experience2: {
      position: "Front-End Developer Intern",
      company: "Aarohi Software Solutions",
      timePeriod: "March, 2022 - May, 2022",
      keySkills: ["JavaScript", "CSS", "HTML5"],
    },
  };

  const experienceData = Object.values(data);

  return (
    <div className="mb-10">
      <h1 className="text-white text-2xl border text-center self-center rounded-xl h-9 w-48 mb-5 ml-10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 shadow-lg">
        Experience
      </h1>

      <div className="flex flex-col md:flex-row ml-10 relative justify-evenly gap-5 w-80 md:h-64 md:w-max">
        {experienceData.map((experience, index) => (
          <Fade left={index === 0} right={index !== 0} delay={1000} key={index}>
            <div className="bg-gray-900 rounded-xl p-10 text-white" key={index}>
              <h1 className="text-lg text-textGold">{experience.position}</h1>
              <p className="mt-2">{experience.company}</p>
              <span className="mt-1">{experience.timePeriod}</span>
              <Skill skills={experience.keySkills} />
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Experience;
