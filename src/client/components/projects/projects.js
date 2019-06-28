import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./projects.css";
import Project from './Project'

export default class Projects extends React.Component {
  render() {
    return (
      <Container id="projects-container" fluid={true}>
        <Col id="projects-row">
        <Project/>
        </Col>
      </Container>
    );
  }
}
