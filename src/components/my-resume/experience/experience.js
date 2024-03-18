import React from "react";
import Company1 from "./cognizant-details";
import Company2 from "./surekha-details";
import { Card } from "react-bootstrap";

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
      <Card>
        <Company2 />
      </Card>
      <Card className="mt-4">
        <Company1 />
      </Card>
    </div>
  );
};

export default Experience;
