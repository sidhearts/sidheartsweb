import React, { useEffect } from "react";
import "../index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../logo.svg";
import "../App.css";
import "../style.css";
import { images } from "../images";
import { Card } from "react-bootstrap";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div className="p-5" data-aos="fade-right">
          <h1 className="intro">
            Interactive <span className="react-text">React</span> and MERN Stack
          </h1>
        </div>
        <div className="row">
          <div className="col-6 col-md-4" data-aos="fade-right">
            <h1 className="text-center m-auto intro">
              Developer
              <br />
              Based in
              <br />
              <span className="flagSaffron">In</span>d
              <span className="flagGreen">ia</span>
            </h1>
          </div>
          <div className="col-6 col-md-4" data-aos="zoom-in">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-12 col-md-4" data-aos="fade-left">
            <h1 className="text-center m-auto intro">
              Focused on
              <br />
              Creative Interaction
            </h1>
          </div>
        </div>
        <div className="p-5 text-right" data-aos="fade-left">
          <h1 className="intro">
            A mint of <span className="bulb">creativity</span>
            <img src={images.bulb} /> . Beyond the limits
          </h1>
        </div>
      </div>
      <div className="container pt-5">
        <h1 className="text-center intro m-5">GET INTO MY BRAIN</h1>
        <div className="row">
          <div className="col-12 col-md-4 pt-2" data-aos="fade-up">
            <Card className="card">
              <Card.Img top width="100%" src={images.coding} />
              <Card.Body>
                <Card.Text className="cursive">
                  I Love Coding and exploring new stuffs
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4 pt-2" data-aos="fade-up">
            <Card className="card">
              <Card.Img top width="100%" src={images.photography} />
              <Card.Body>
                <Card.Text className="cursive">
                  <a href="#gallery">I am a Passionate Photographer</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-4 pt-2" data-aos="fade-up">
            <Card className="card">
              <Card.Img top width="100%" src={images.travelling} />
              <Card.Body>
                <Card.Text className="cursive">Travelling is Life</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <h1 className="text-center intro m-5">
        CAMERA <img className="lens" src={images.lens} /> ROLL
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3 p-2">
            <Card className="card">
              <Card.Img top width="100%" src={images.pic1} className="pics" />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card className="card">
              <Card.Img top width="100%" src={images.pic2} className="pics" />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card className="card">
              <Card.Img top width="100%" src={images.pic3} className="pics" />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card className="card">
              <Card.Img top width="100%" src={images.pic4} className="pics" />
            </Card>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-6 col-md-3 p-2">
            <Card className="card">
              <Card.Img top width="100%" src={images.pic5} className="pics" />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card className="card">
              <Card.Img top width="100%" src={images.pic6} className="pics" />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card className="card">
              <Card.Img top width="100%" src={images.pic7} className="pics" />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card className="card">
              <Card.Img top width="100%" src={images.pic8} className="pics" />
            </Card>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="card bg-dark text-white">
          <img class="card-img world" src={images.world} alt="Card image" />
          <div class="card-img-overlay">
            <div data-aos="fade-left">
              <img src={images.plane} className="plane" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3 p-2">
            <Card data-aos="zoom-in" className="card">
              <Card.Img top width="100%" src={images.varanasi} />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card data-aos="zoom-in" className="card">
              <Card.Img top width="100%" src={images.ujjain} />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card data-aos="zoom-in" className="card">
              <Card.Img top width="100%" src={images.indore} />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card data-aos="zoom-in" className="card">
              <Card.Img top width="100%" src={images.shirdi} />
            </Card>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col-6 col-md-3 p-2">
            <Card data-aos="zoom-in" className="card">
              <Card.Img top width="100%" src={images.kolkata} />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card data-aos="zoom-in" className="card">
              <Card.Img top width="100%" src={images.jammu} />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card data-aos="zoom-in" className="card">
              <Card.Img top width="100%" src={images.delhi} />
            </Card>
          </div>
          <div className="col-6 col-md-3 p-2">
            <Card data-aos="zoom-in" className="card">
              <Card.Img top width="100%" src={images.many} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
