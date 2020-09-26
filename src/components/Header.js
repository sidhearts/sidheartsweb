import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Parallax, Background } from "react-parallax";
import { images } from "../images";
import "../style.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const inlineStyle = {
    left: "50%",
    top: "50%",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    color: "white",
  };

  return (
    <div className="content">
      <div>
        <Navbar
          style={{ backgroundColor: "rgb(33,37,41)" }}
          dark
          fixed="top"
          expand="md"
        >
          <NavbarBrand href="/home">Siddharth</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div style={{ backgroundColor: "rgb(33,37,41)", height: 70 }} />
      <div>
        <Parallax bgImage={images.sid} strength={500}>
          <div style={{ height: 500 }}>
            <div style={inlineStyle}>
              <h3 className="text-center cursive">Hey I'm,</h3>
              <h1>
                <strong>SIDDHARTH RAJ</strong>
              </h1>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Header;
