import React from "react";
import Container from "react-bootstrap/Container";

import bg from "../../images/about_bg.png";

import "./prize.css";

const Prizes = () => {
  return (
    <div id="prizes" className="prizes-main">
      <Container className="track-heading-container">
        <div data-aos="slide-up" className="track-heading-div">
          <h1 className="prizes-heading">PRIZES</h1>
          <img className="track-img" src={bg} width={"100%"} alt="" />
        </div>
      </Container>
      <Container className="prize-container">
        <Container className="prize-1">
          <div className="prize">
            <h5 className="prize-title">1st Prize</h5>
            <p className="prize-amt"> ₹ xx,xxx </p>
          </div>
        </Container>
        <Container className="prizes">
          <div className="prize">
            <h5 className="prize-title">2nd Prize</h5>
            <p className="prize-amt"> ₹ xx,xxx </p>
          </div>
          <div id="prize3" className="prize">
            <h5 className="prize-title">3nd Prize</h5>
            <p className="prize-amt"> ₹ xx,xxx </p>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Prizes;
