import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const BasicDetails = () => {
  return (
    <>
      <div className="container">
        <Row>
          <Col sm={12} md={4} className="d-flex justify-content-center">
            <Image
            style={{height: "180px",width: "150px"}}
              src={require("../../image/profile.jpg")}
              roundedCircle
            />
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center align-items-center">
            <h2 className="s1">Jitendra Chatwani</h2>
          </Col>
        </Row>
      </div>

      <hr />
      <p
        className="s2"
        style={{
          paddingTop: "5pt",
          textAlign: "center",
        }}
      >
        <strong>Address: </strong>Jaipur, 302029, Rajasthan
      </p>
      <p
        className="s2"
        style={{
          textAlign: "center",
        }}
      >
        <strong>Mobile: </strong>(+91) 8559966618
      </p>
      <p
        className="s2"
        style={{
          textAlign: "center",
        }}
      >
        <strong>Mail to: </strong>
        <a href="mailto:chatwanijitu@gmail.com" className="s2 text-primary">
          chatwanijitu@gmail.com
        </a>
      </p>
      <p
        className="s2"
        style={{
          textAlign: "center",
        }}
      >
        <strong>Linkedin: </strong>
        <a
          href="https://www.linkedin.com/in/jchatwani"
          target="blank"
          className="s2 text-primary"
        >
          linkedin.com/in/jchatwani
        </a>
      </p>
    </>
  );
};

export default BasicDetails;
