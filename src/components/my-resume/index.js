import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BasicDetails from "./basic-details";
import Objective from "./objective";
import Experience from "./experience";

const MyResume = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mt-4">
            <Card.Body>
              <BasicDetails/>
              <hr />
              <Objective/>
              <hr />
              <Experience/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MyResume;
