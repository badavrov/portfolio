import ReactDOM from "react-dom";
import React from "react";
import { Container, Fade } from "reactstrap";
import './intro.css'

export default class Intro extends React.Component {
  render() {
    return (
      <Container id="intro-container">
        <Fade>
          <picture>
            <img src="/public/triangle.svg" className="img-fluid" id="triangle" />
          </picture>
        </Fade>
      </Container>
    );
  }
}
