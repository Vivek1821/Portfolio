// import React from "react";

// const data = {
//   experience1: {
//     position: "Junior Front-End Developer",
//     company: "Technical Veer Digital Solution",
//     timePeriod: "July,2022 - Present",
//     keySKills: ["ReactJS", "JavaScript", "TailwindCSS"],
//   },
//   experience2: {
//     position: "Front-End Developer Intern",
//     company: "Aarohi Software Solutions",
//     timePeriod: "March,2022 - May,2022",
//     keySKills: ["JavaScript", "CSS", "HTML5"],
//   },
// };

// const experienceData = Object.values(data);
// console.log(experienceData);

// const Experience = () => {
//   const firstExperience = experienceData[0];
//   const {
//     position: firstPosition,
//     company: firstCompany,
//     timePeriod: firstTimePeriod,
//     keySKills: firstKeySkills,
//   } = firstExperience;

//   const secondExperience = experienceData[1];
//   const {
//     position: secondPosition,
//     company: secondCompany,
//     timePeriod: secondTimePeriod,
//     keySKills: secondKeySkills,
//   } = secondExperience;

//   return (
//     <div className="mb-10">
//       <h1 className="text-white text-2xl border text-center self-center rounded-xl bg-blue-500 h-9 w-48 mb-5 ml-10 ">
//         Experience
//       </h1>

//       <div className="flex flex-col md:flex-row ml-10 relative justify-evenly  gap-5 w-80 md:h-64 md:w-max ">
//         <div className="bg-gray-900  rounded-xl p-10">
//           <React.Fragment>
//             <div className="text-white">
//               <h1 className="text-lg text-textGold  ">{firstPosition}</h1>
//               <p className="mt-2">{firstCompany}</p>
//               <span className="mt-1">{firstTimePeriod}</span>
//               <span className="mt-1">
//                 {firstKeySkills.map((item, index) => {
//                   return (
//                     <li className="" key={index}>
//                       {item}
//                     </li>
//                   );
//                 })}
//               </span>
//             </div>
//           </React.Fragment>
//         </div>
//         <div className="bg-gray-900 p-10 rounded-xl ">
//           <React.Fragment>
//             <div className="text-white">
//               <h1 className="text-lg text-textGold">{secondPosition}</h1>
//               <p className="mt-2">{secondCompany}</p>
//               <span className="mt-1">{secondTimePeriod}</span>
//               <span className="mt-1">
//                 {secondKeySkills.map((item, index) => {
//                   return (
//                     <li className="" key={index}>
//                       {item}
//                     </li>
//                   );
//                 })}
//               </span>
//             </div>
//           </React.Fragment>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

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
      <h1 className="text-white text-2xl border text-center self-center rounded-xl bg-blue-500 h-9 w-48 mb-5 ml-10 ">
        Experience
      </h1>
      <Fade left>
        <div className="flex flex-col md:flex-row ml-10 relative justify-evenly gap-5 w-80 md:h-64 md:w-max">
          {experienceData.map((experience, index) => (
            <div className="bg-gray-900 rounded-xl p-10 text-white" key={index}>
              <h1 className="text-lg text-textGold">{experience.position}</h1>
              <p className="mt-2">{experience.company}</p>
              <span className="mt-1">{experience.timePeriod}</span>
              <Skill skills={experience.keySkills} />
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Experience;
