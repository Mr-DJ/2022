import React, { useEffect } from "react";
import Card from "./Card";
import "./speakers.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aos from "aos";
import "aos/dist/aos.css";
import bg from "../../images/tracks_bg.png";
import { speakersData } from "../../data/speakersData";

const Speakers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="speakers" className="speaker-main">
      <Container>
        <Row data-aos="slide-up" className="title-container-speakers">
          <Col xs lg="10">
            <img src={bg} alt="" width="100%" />
          </Col>
          <Col lg="2">
            <h1 className="speaker-heading">SPEAKERS</h1>
          </Col>
        </Row>
      </Container>
      <Container className="speaker-container">
        <div className="row">
          {speakersData.map(({ title, image, url, text, id }) => (
            <div className="col-md-4 speaker" key={id}>
              <Card imageSource={image} title={title} url={url} text={text} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Speakers;
