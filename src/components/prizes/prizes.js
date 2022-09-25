import React from 'react'
import Container from "react-bootstrap/Container";

import "./prize.css";


const Prizes = () => {
  return (
    <div id="prizes" className='about-main d-flex align-items-center justify-content-center'>
      <Container>
        <div data-aos="slide-up" className='about-heading'>
          <h1 className='heading'>Prizes</h1>
          <img className='line' src='/about_bg.png' width={"100%"} alt='' />
        </div>
        <Container>
          {/* Main Prizes Content */}
        </Container>
      </Container>
    </div>
  )
}

export default Prizes


