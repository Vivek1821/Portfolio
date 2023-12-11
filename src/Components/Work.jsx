import React from "react";

const mapData = new Map([
  // ["1+", "Years Experience"],
  [4, "Completed Projects"],
  ["2+", "Experience as Freelance"],
]);

const data = [...mapData];

const Work = () => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3  `}>
      {data.map(([key, value]) => (
        <div key={key} className="flex  items-center m-4 ml-10 ">
          <h1 className="text-xl lg:text-2xl text-textGold">{key}</h1>
          <p
            className=" 
          text-white text-xs lg:text-sm ml-6 md:ml-8"
          >
            {value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Work;
