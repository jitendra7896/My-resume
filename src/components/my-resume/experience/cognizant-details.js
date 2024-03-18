import React from "react";
import CompanyBasicDetails from "./company-basic-details";
import { CardBody, CardHeader } from "react-bootstrap";

const Company1 = () => {
  return (
    <div>
      <CardHeader>
        <CompanyBasicDetails
          companyName="Cognizant Technology Solutions"
          designation=" Programmer Analyst"
          location="Jaipur, Rajasthan(WFH)"
          fromTo=" October-2020 – April-2023"
        />
      </CardHeader>
      <CardBody>
        <div className="dtb" />
        <p className="s2 mt-3" style={{ paddingLeft: "1rem" }}>
          <strong>Insurance Domain Project</strong>
        </p>
        <ul id="l1">
          <li>
            <p
              className="s2"
              style={{
                paddingTop: "4pt",
                paddingLeft: "41pt",
                textIndent: "-10pt",
              }}
            >
              I took charge of implementing Auto/Home Insurance system features
              using Java and Rest Api.
            </p>
          </li>
          <li>
            <p
              class="s2"
              style={{
                paddingTop: "2pt",
                paddingLeft: "41pt",
                textIndent: "-10pt",
              }}
            >
              Crafted intuitive and user-friendly front-end interfaces,
              enhancing the overall user experience and accessibility.
            </p>
          </li>
          <li>
            <p
              className="s2"
              style={{
                paddingTop: "3pt",
                paddingLeft: "41pt",
                textIndent: "-10pt",
              }}
            >
              Prioritized scalability and performance optimization, employing
              best practices to ensure seamless operation under varying
              workloads and usage scenarios.
            </p>
          </li>
        </ul>
      </CardBody>
    </div>
  );
};

export default Company1;
