import React, { useEffect } from "react";

import "./crew.css"
import Container from "react-bootstrap/Container";
import Aos from "aos";
import "aos/dist/aos.css";

import bg from "../../images/tracks_bg.png";


const Crew = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div id="crew" className="crew-main">
        <Container className="track-heading-container">
        <div data-aos="slide-up" className="track-heading-div">
          <h1 className="track-heading">CREW</h1>
          <img className="track-img" src={bg} width={"100%"} alt="" />
        </div>
      </Container>
      <Container>
                {/* PUT YOUR CONTENT HERE */}
      </Container>
        </div>
  )
}

export default Crew