import React from "react";
import { Container } from "reactstrap";
import './intro.css'
import introTriangle from "../../../../public/triangle.svg";

export default class Intro extends React.Component {
  render() {
    return (
      <Container id="intro-container">
          <picture>
            <img src={introTriangle} className="img-fluid" id="triangle" />
          </picture>
      </Container>
    );
  }
}
