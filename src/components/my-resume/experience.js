import React from "react";
import Company1 from "./cognizant-details";
import Company2 from "./surekha-details";

const Experience = () => {
  return (
    <div>
      <p
        className="s6"
        style={{
          paddingTop: "8pt",
          textIndent: "0pt",
          textAlign: "center",
        }}
      >
        PROFESSIONAL EXPERIENCE
      </p>
      <Company2/>
      <Company1/>
    </div>
  );
};

export default Experience;
