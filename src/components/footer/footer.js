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
