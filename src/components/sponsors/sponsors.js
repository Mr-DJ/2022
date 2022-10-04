import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./sponsors.css";
import logo from "../../images/reva_logo.png";
import mlh from "../../images/mlh-logo.png";
import bg from "../../images/prizes_bg.png";
import polygon from "../../images/polygon.png";
import devfolio from "../../images/devfolio.png";
import solana from "../../images/solana.png";
import filecoin from "../../images/filecoin.png";
import replit from "../../images/replit.png";

export default class Sponsors extends Component {
  render() {
    return (
      <div
        id="sponsors"
        className="sponsors-main d-flex align-items-center justify-content-center"
      >
        <Container>
          <Container className="track-heading-container">
            <div data-aos="slide-up" className="track-heading-div">
              <h1 className="sponsors-heading">SPONSORS</h1>
              <img className="track-img" src={bg} width={"100%"} alt="" />
            </div>
          </Container>
          <Container data-aos="slide-up" className="sponsers d-flex flex-wrap">
            <Container>
              <div>
                <h3 className="sponser-title">Title Sponsors</h3>
              </div>
              <div className="sponserContainer flex-wrap ">
                <img src={logo} className="img" alt="Reva Logo" />
                <img src={mlh} className="img" alt="Reva Logo" />
              </div>
            </Container>
            <Container>
              <div>
                <h3 className="sponser-title">Tree</h3>
              </div>
              <div className="sponserContainer flex-wrap ">
                <img src={polygon} className="img" alt="Reva Logo" />
                <img src={devfolio} className="img" alt="Reva Logo" />
              </div>
            </Container>
            <Container>
              <div>
                <h3 className="sponser-title">Sapling</h3>
              </div>
              <div className="sponserContainer flex-wrap ">
                <img src={solana} className="img" alt="Reva Logo" />
                <img src={filecoin} className="img" alt="Reva Logo" />
                <img src={replit} className="img" alt="Reva Logo" />
              </div>
            </Container>
          </Container>
        </Container>
      </div>
    );
  }
}
