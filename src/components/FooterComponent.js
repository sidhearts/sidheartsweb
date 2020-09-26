import React, { useEffect } from "react";
import "../style.css";
import { images } from "../images.js";
import { Image } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="content">
      <div className="container">
        <p className="text-center intro py-2 py-md-5">STAY CONNECTED</p>
        <div className="text-center">
          <a className="name" href="https://twitter.com/rajsiddharth211">
            TWITTER
          </a>
        </div>
        <div className="text-center">
          <a className="name" href="https://github.com/sidhearts">
            GITHUB
          </a>
        </div>
        <div className="text-center">
          <a className="name" href="https://github.com/sidhearts">
            LINKEDIN
          </a>
        </div>
        <div className="text-center">
          <a className="name" href="https://www.instagram.com/sidhearts/">
            INSTAGRAM
          </a>
        </div>
        <div className="pt-5 text-center" style={{ color: "white" }}>
          © 2020 All rights reserved.
          <br /> made with love by sidhearts
        </div>
      </div>
      <div className="end d-none d-lg-block">
        <p className="text-center see">SEA YOU AGAIN</p>
        <Image
          data-aos="fade-up"
          data-aos-duration="3000"
          className="ocean"
          src={images.ocean}
        />
      </div>
    </div>
  );
}

export default Footer;
