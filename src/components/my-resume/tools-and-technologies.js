import React from "react";
import { Col, Row } from "react-bootstrap";

const ToolsAndTechnologies = () => {
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
        TOOLS & TECHNOLOGIES
      </p>
      <Row>
        <Col sm={12} md={6} className="d-flex justify-content-center">
          <ul>
            <li><strong>Front end skills: </strong>HTML, CSS, JavaScript,JSP, React</li>
            <li><strong>Coreskill: </strong>JAVA,Spring Boot, Liferay</li>
            <li><strong>Backendskills: </strong>MySql</li>
          </ul>
        </Col>
        <Col sm={12} md={6} className="d-flex justify-content-center">
          <ul>
            <li><strong>Otherskills: </strong>JDBC</li>
            <li><strong>Framework: </strong>Eclipse IDE</li>
            <li><strong>Tools: </strong>SoapUI, Postman</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default ToolsAndTechnologies;
