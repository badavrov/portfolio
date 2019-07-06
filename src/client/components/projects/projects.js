import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./projects.css";
import Project from './Project'

export default class Projects extends React.Component {
  render() {
    return (
      <Container id="projects-container" fluid={true}>
        <div><center><span id="projects-header">MY RECENT WORK</span>
        <p id="projects-header2">Here are a few recent projects. Want to see more? <a href="mailto:badavrow@gmail.com">Email me.</a></p></center></div>
        <Container id="projects-row" fluid={true}>
        <Project/>
        </Container>
      </Container>
    );
  }
}
