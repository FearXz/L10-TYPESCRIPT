import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function MyMain() {
  return (
    <Container>
      <Row>
        <Col className=" d-flex justify-content-center">
          <div className=" fs-1 text-danger bg-darkgray">MEGA KEBAB</div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyMain;
