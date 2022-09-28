import React from "react";
import "./faq.css";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import bg from "../../images/faq_bg.png";
import Aos from "aos";
import "aos/dist/aos.css";

import { data } from "../../data/faqData.js";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="faq" className="faq-main">
      <Container className="track-heading-container">
        <div data-aos="slide-up" className="track-heading-div">
          <h1 className="faq-heading">FAQ</h1>
          <img className="track-img" src={bg} width={"100%"} alt="" />
        </div>
      </Container>
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h5 className="faq">{item.faq}</h5>
              <span className="ans">{selected === i ? "-" : "+"}</span>
            </div>

            <div className={selected === i ? "content show" : "content"}>
              {/* {selected === i && <hr className="faq-hr" />} */}
              {item.ans}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
