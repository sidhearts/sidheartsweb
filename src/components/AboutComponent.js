import React from "react";
import "../style.css";
import { images } from "../images";
import { Card, Image } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  return (
    <div className="content">
      <div className="container p-5">
        <div className="about" data-aos="fade-up">
          <p className="about-headings text-center pt-2">About Me</p>
          <br />
          <p className="about-text text-center mx-md-5 pb-5 px-5">
            Hola! I'm Siddharth Raj, and I'm Computer Science and Engineering
            student at Galgotias University. I'm a Programmer, Full stack
            developer and a python enthusiast. I love to exploring places
            developing attractive things and a kind of curious guy who want to
            know as much as he can. Apart from all this I love Photography,
            Basketball and Food.
          </p>
        </div>
        <div className="about mt-5" data-aos="fade-up">
          <p className="about-headings text-center pt-2">Education</p>
          <div className="row">
            <div className="col-12 col-md-6 p-3 d-flex justify-content-center">
              <Card className="card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={images.school} />
                <Card.Body>
                  <Card.Title>Kendriya Vidyalaya, BHU, Varanasi</Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-6 p-3 d-flex justify-content-center">
              <Card className="card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={images.college} />
                <Card.Body>
                  <Card.Title>Galgotias University, Greater Noida</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="about mt-5 pb-5 px-5" data-aos="fade-up">
          <p className="about-headings text-center pt-2">Skills</p>
          <p className="about-text pl-5"><u>Programming Languages:</u></p>
          <div className="pl-5 pt-3">
            <Image src={images.js} className="thumbnail m-2" />
            <Image src={images.python} className="thumbnail m-2" />
            <Image src={images.c} className="thumbnail m-2" />
          </div>
          <p className="about-text pl-5"><u>Backend:</u></p>
          <div className="pl-5 pt-3">
            <Image src={images.node} className="thumbnail m-2" />
            <Image src={images.express} className="thumbnail m-2" />
          </div>
          <p className="about-text pl-5"><u>Frontend:</u></p>
          <div className="pl-5 pt-3">
            <Image src={images.react} className="thumbnail m-2" />
            <Image src={images.html} className="thumbnail m-2" />
            <Image src={images.css} className="thumbnail m-2" />
            <Image src={images.jquery} className="thumbnail m-2" />
            <Image src={images.bootstrap} className="thumbnail m-2" />
          </div>
          <p className="about-text pl-5"><u>Database:</u></p>
          <div className="pl-5 pt-3">
            <Image src={images.mongo} className="thumbnail m-2" />
            <Image src={images.firebase} className="thumbnail m-2" />
          </div>
          <p className="about-text pl-5"><u>Others:</u></p>
          <div className="pl-5 pt-3">
            <Image src={images.git} className="thumbnail m-2" />
            <Image src={images.gitLogo} className="thumbnail m-2" />
            <Image src={images.ubuntu} className="thumbnail m-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
