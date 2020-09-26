import React from "react";
import "../style.css";
import { images } from "../images";
import { Card, Image, Button } from "react-bootstrap";
import "aos/dist/aos.css";

function About() {
  return (
    <div className="content">
      <div className="container p-3 p-md-5">
        <div className="about" data-aos="fade-up">
          <p className="about-headings text-center pt-2">About Me</p>
          <p className="about-text text-center p-3 p-md-4">
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
          <p className="about-text px-2 px-md-5">
            <u>Programming Languages:</u>
          </p>
          <div className="px-2 px-md-5 pt-2">
            <Image src={images.js} className="thumbnail m-2" />
            <Image src={images.python} className="thumbnail m-2" />
            <Image src={images.c} className="thumbnail m-2" />
          </div>
          <p className="about-text px-2 px-md-5">
            <u>Backend:</u>
          </p>
          <div className="px-2 px-md-5 pt-2">
            <Image src={images.node} className="thumbnail m-2" />
            <Image src={images.express} className="thumbnail m-2" />
          </div>
          <p className="about-text px-2 px-md-5">
            <u>Frontend:</u>
          </p>
          <div className="px-2 px-md-5 pt-2">
            <Image src={images.react} className="thumbnail m-2" />
            <Image src={images.html} className="thumbnail m-2" />
            <Image src={images.css} className="thumbnail m-2" />
            <Image src={images.jquery} className="thumbnail m-2" />
            <Image src={images.bootstrap} className="thumbnail m-2" />
          </div>
          <p className="about-text px-2 px-md-5">
            <u>Database:</u>
          </p>
          <div className="px-2 px-md-5 pt-2">
            <Image src={images.mongo} className="thumbnail m-2" />
            <Image src={images.firebase} className="thumbnail m-2" />
          </div>
          <p className="about-text px-2 px-md-5">
            <u>Others:</u>
          </p>
          <div className="px-2 px-md-5 pt-2">
            <Image src={images.git} className="thumbnail m-2" />
            <Image src={images.gitLogo} className="thumbnail m-2" />
            <Image src={images.ubuntu} className="thumbnail m-2" />
          </div>
        </div>
        <div className="about mt-5" data-aos="fade-up">
          <p className="about-headings text-center pt-2">Courses</p>
          <div className="row">
            <div className="col-12 col-md-4 p-3 d-flex justify-content-center">
              <Card className="card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={images.coursera} />
                <Card.Body>
                  <Card.Title>
                    Front-End Web UI Frameworks and Tools: Bootstrap 4
                  </Card.Title>
                  <Button
                    href="https://drive.google.com/file/d/1-sZ83EwQBNccVLA2AsMqPf_X8yu0_pXu/view?usp=sharing"
                    variant="primary"
                  >
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-4 p-3 d-flex justify-content-center">
              <Card className="card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={images.coursera} />
                <Card.Body>
                  <Card.Title>Front-End Web Development with React</Card.Title>
                  <Button
                    href="https://drive.google.com/file/d/1-tKMea8oD2Htn0VxbgmH9IjQjeJ8OJE5/view?usp=sharing"
                    variant="primary"
                  >
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-4 p-3 d-flex justify-content-center">
              <Card className="card" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={images.coursera} />
                <Card.Body>
                  <Card.Title>
                    Multiplatform Mobile App Development with React Native
                  </Card.Title>
                  <Button
                    href="https://drive.google.com/file/d/1-rdloQmy2qwTURQq_jXx9gZcucMHtToT/view?usp=sharing"
                    variant="primary"
                  >
                    View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
