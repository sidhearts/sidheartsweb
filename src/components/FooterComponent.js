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
        <h1 className="text-center intro p-5">STAY CONNECTED</h1>
        <div className="justify-content-center text-center">
          <a className="name" href="https://twitter.com/rajsiddharth211">
            TWITTER
          </a>
        </div>
        <div className="justify-content-center text-center">
          <a className="name" href="https://github.com/sidhearts">
            GITHUB
          </a>
        </div>
        <div className="justify-content-center text-center">
          <a className="name" href="https://github.com/sidhearts">
            LINKEDIN
          </a>
        </div>
        <div className="justify-content-center text-center">
          <a className="name" href="https://www.instagram.com/sidhearts/">
            INSTAGRAM
          </a>
        </div>
        <div className="pt-5"></div>
      </div>
      <div className="end d-none d-lg-block">
        <h1 className="text-center see">SEE YOU AGAIN</h1>
        <Image data-aos="fade-up" data-aos-duration="3000" className="ocean" src={images.ocean} />
      </div>
    </div>
  );
}

export default Footer;
