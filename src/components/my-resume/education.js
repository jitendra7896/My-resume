import React from "react";
import CompanyBasicDetails from "./experience/company-basic-details";

const Education = () => {
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
        EDUCATION
      </p>
      <CompanyBasicDetails
        companyName="Swami Keshvanand Institute of Technology"
        designation="Bachelor of Technology (Specification : CSE)"
        location="Jaipur, Rajasthan"
        fromTo="Aug-2016 - Sept-2020"
      />
    </div>
  );
};

export default Education;
