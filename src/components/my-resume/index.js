import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BasicDetails from "./basic-details";
import Objective from "./objective";
import Experience from "./experience/experience";
import Education from "./education";
import AdditionalSkills from "./additional-skills";
import ToolsAndTechnologies from "./tools-and-technologies";

const MyResume = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card className="mt-4">
            <Card.Body>
              <BasicDetails/>
              <hr />
              <Objective/>
              <hr />
              <Experience/>
              <hr/>
              <Education/>
              <hr/>
              <AdditionalSkills/>
              <hr/>
              <ToolsAndTechnologies/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyResume;
