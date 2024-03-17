import React from "react";
import CompanyBasicDetails from "./company-basic-details";

const Company2 = () => {
  return (
    <div className="mt-3">
      <CompanyBasicDetails
        companyName="Surekha Technologies Pvt. Ltd."
        designation="Software Engineer"
        location="Ahmedabad, Gujrat"
        fromTo="May 2023 – Present"
      />
      <div className="dtb"/>
      <p className="s2 mt-3" style={{ paddingLeft: "1rem" }}>
        <strong>Health Domain Project</strong> UAE Client
      </p>
      <ul id="l1">
        <li>
          <p
            className="s2"
            style={{
              paddingTop: "4pt",
              paddingLeft: "41pt",
              paddingRight: "72pt",
              textIndent: "-18pt",
            }}
          >
            Actively involved in a Health domain project, focusing on developing
            specialized modules for managing doctor data efficiently.
          </p>
        </li>
        <li>
          <p
            class="s2"
            style={{
              paddingTop: "2pt",
              paddingRight: "72pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
            }}
          >
            Implemented secure data processing workflows to ensure
            confidentiality and integrity of sensitive information.
          </p>
        </li>
        <li>
          <p
            className="s2"
            style={{
              paddingTop: "3pt",
              paddingRight: "72pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
            }}
          >
            Crafted responsive user interfaces specifically designed for
            healthcare professionals, improving overall usability and
            accessibility.
          </p>
        </li>
        <li>
          <p
            className="s2"
            style={{
              paddingTop: "3pt",
              paddingRight: "72pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
            }}
          >
            Implemented internationalization and styling according to the
            specific language.
          </p>
        </li>
      </ul>
      <div className="dtb"/>
      <p className="s2 mt-3" style={{ paddingLeft: "1rem" }}>
        <strong>Education Domain Project</strong> UAE Client
      </p>
      <ul id="l1">
        <li>
          <p
            className="s2"
            style={{
              paddingTop: "4pt",
              paddingLeft: "41pt",
              paddingRight: "72pt",
              textIndent: "-18pt",
            }}
          >
            Led the development of a project, seamlessly integrating Java
            Liferay and React technologies for a cohesive system.
          </p>
        </li>
        <li>
          <p
            class="s2"
            style={{
              paddingTop: "2pt",
              paddingRight: "72pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
            }}
          >
            Directed front-end development using react to create intuitive
            interfaces that enhance user experience and accessibility.
          </p>
        </li>
        <li>
          <p
            className="s2"
            style={{
              paddingTop: "3pt",
              paddingRight: "72pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
            }}
          >
            Ensured secure back-end functionalities to safeguard sensitive data
            and maintain system integrity.
          </p>
        </li>
        <li>
          <p
            className="s2"
            style={{
              paddingTop: "3pt",
              paddingRight: "72pt",
              paddingLeft: "41pt",
              textIndent: "-18pt",
            }}
          >
            Integrated collaborative features and prioritized scalability and
            performance optimization, gathering user feedback for iterative
            improvements.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Company2;
