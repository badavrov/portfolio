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
            <Media object src="/public/about-photo.png"></Media>
            <p className="about-text-intro">Glad to see you on board web traveler, you would probably like to know me more before scrolling down... so let me introduce.</p>
        </Container>
        <Container id="about-info" >
        <Container id="about-about">
            <p className="about-header">ABOUT ME</p>
            <p className="about-text">My name is Denislav Badavrov, Intergalactic web pirate who is bombing the World Wide Web with ideas and creativity. </p>
        </Container>
        <Container id="about-skills">
            <p className="about-header">SKILLS</p>
            <Media object src="/public/skills.svg"></Media>
        </Container>
        </Container>
      </Container>
    );
  }
}
