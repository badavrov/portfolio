import React from "react";
import { Col, Row } from "reactstrap";
import projectsLandscape from "../../../../public/landscape.jpg"

const projects = [
  {
    title: "One",
    describe: "This is a sample of project",
    img: {projectsLandscape}
  },
  {
    title: "Two",
    describe: "This is a sample of project",
    img: {projectsLandscape}
  },
  {
    title: "Three",
    describe: "This is a sample of project",
    img: {projectsLandscape}
  }
];

export default class Project extends React.Component {
  render() {
    return (
      <Row>
        {projects.map((item, i) => (
      <Col key={i} className="project-col">
            <h4>{item.title}</h4>
            <p>{item.describe}</p>
            <img src={item.img.projectsLandscape}/>
      </Col>
        ))}
      </Row>
    );
  }
}
