import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./sponsors.css";
import logo from "../../images/reva_logo.png";
import mlh from "../../images/mlh-logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Sponsors extends Component {
  render() {
    return (
      <div
        id="sponsors"
        className="about-main d-flex align-items-center justify-content-center"
      >
        <Container>
          <div data-aos="slide-up" className="about-heading">
            <h1 className="heading">SPONSORS</h1>
            <img className="line" src="/about_bg.png" width={"100%"} alt="" />
          </div>
          <Container data-aos="slide-up" className="sponserContainer">
            <Row>
              <Col className="center" sm={6}>
                <img src={mlh} alt="Reva Logo" width="200" height="100 " />
              </Col>
              <Col className="m-auto" sm={6}>
                <img src={logo} alt="Reva Logo" width="300" />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}
