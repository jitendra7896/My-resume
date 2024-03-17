import React from "react";

const CompanyBasicDetails = (props) => {
  const {companyName, designation, location, fromTo} = props;
  return (
    <div className="row">
      <div className="col-sm-6">
        <p
          className="s7"
          style={{
            paddingTop: "4pt",
            paddingLeft: "5pt",
            textIndent: "0pt",
            textAlign: "left",
          }}
        >
          {companyName}
        </p>
        <p
          className="s2"
          style={{
            paddingLeft: "5pt",
            textIndent: "0pt",
            textAlign: "left",
          }}
        >
          {designation}
        </p>
      </div>
      <div className="col-sm-6">
        <p
          className="s7"
          style={{
            paddingTop: "4pt",
            paddingLeft: "5pt",
            textIndent: "0pt",
            textAlign: "right",
          }}
        >
         {location}
        </p>
        <p
          className="s5"
          style={{
            paddingRight: "5pt",
            textIndent: "0pt",
            textAlign: "right",
          }}
        >
          {fromTo}
        </p>
      </div>
    </div>
  );
};

export default CompanyBasicDetails;
