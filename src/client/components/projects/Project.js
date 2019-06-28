import React from "react";
import { Col, Row } from "reactstrap";

const projects = [
  {
    title: "One",
    describe: "This is a sample of project",
    img: "/public/landscape.jpg"
  },
  {
    title: "Two",
    describe: "This is a sample of project",
    img: "/public/landscape.jpg"
  },
  {
    title: "Three",
    describe: "This is a sample of project",
    img: "/public/landscape.jpg"
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
            <img src={item.img}/>
      </Col>
        ))}
      </Row>
    );
  }
}
