import ReactDOM from "react-dom";
import React from "react";
import { Container, Media } from "reactstrap";
import "./about.css";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container id="about-container" fluid={true}>
        <Container id="about-photo">
            <Media object src="/public/about-photo.png" alt="About photo..." ></Media>
        </Container>
      </Container>
    );
  }
}
