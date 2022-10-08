import React from "react";
import Container from "react-bootstrap/Container";
import {
  SiGmail,
  SiLinkedin,
  SiInstagram,
  SiGithub,
  SiDiscord,
} from "react-icons/si";
import "./footer.css";

export default function Footer() {
  return (
    <div className='footer'>
      <Container>

      <div className="map">
        <h1>Contact Us</h1>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.7291172872892!2d77.63310401482352!3d13.116339290761024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19721a651fd3%3A0xdee225fe28f600f6!2sREVA%20University!5e0!3m2!1sen!2sin!4v1665244381917!5m2!1sen!2sin" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='px-5 pt-2 footer-icons'>
          <a
            href='mailto:info.revahack@gmail.com'
            target='_blank'
            rel='noopener noreferrer'>
            <SiGmail />
          </a>
          <a
            href='https://www.linkedin.com/company/reva-hack-2022/'
            target='_blank'
            rel='noopener noreferrer'>
            <SiLinkedin />
          </a>
          <a
            href='https://discord.gg/6Sv9ZdQ4er'
            target='_blank'
            rel='noopener noreferrer'>
            <SiDiscord />
          </a>
          <a
            href='https://instagram.com/dscreva?igshid=YmMyMTA2M2Y='
            target='_blank'
            rel='noopener noreferrer'>
            <SiInstagram />
          </a>
          
          <a
            href='https://github.com/revahack'
            target='_blank'
            rel='noopener noreferrer'>
            <SiGithub />
          </a>
        </div>

      <div className="more-links">
        <a
          href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          target='_blank'
          rel='noopener noreferrer'>
          CODE OF CONDUCT
        </a>
        <span>Copyright 2022 REVA HACK</span>
      </div>
      </Container>
    </div>
  );
}
