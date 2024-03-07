import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const MyResume = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mt-4">
            <Card.Body>
              <h2 className="text-center">John Doe</h2>
              <p className="text-center">Software Engineer</p>
              <hr />
              <h4>Education</h4>
              <p><strong>Master of Science in Computer Science</strong><br />University of ABC, 20XX-20XX</p>
              <p><strong>Bachelor of Science in Computer Science</strong><br />University of XYZ, 20XX-20XX</p>
              <hr />
              <h4>Experience</h4>
              <p><strong>Senior Software Engineer</strong><br />Company XYZ, 20XX-Present</p>
              <p>Responsibilities:</p>
              <ul>
                <li>Developed and maintained web applications using React.js</li>
                <li>Collaborated with cross-functional teams to design and implement new features</li>
                <li>Optimized application performance and improved code quality</li>
              </ul>
              <p><strong>Software Engineer</strong><br />Company ABC, 20XX-20XX</p>
              <p>Responsibilities:</p>
              <ul>
                <li>Designed and implemented RESTful APIs using Node.js and Express</li>
                <li>Participated in code reviews and provided constructive feedback to team members</li>
                <li>Worked closely with product managers to define project requirements</li>
              </ul>
              <hr />
              <h4>Skills</h4>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>HTML/CSS</li>
                <li>RESTful APIs</li>
                <li>SQL/NoSQL databases</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MyResume;