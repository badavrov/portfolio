import React from "react";
import { Col, Row } from "reactstrap";
import projectsLandscape from "../../../../public/landscape.jpg";

const projects = [
  {
    name: "Pr0-007",
    link: "_blank",
    describe: "This is a sample of project",
    img: { projectsLandscape }
  },
  {
    name: "Pr0-1337",
    link: "_blank",
    describe: "This is a sample of project",
    img: { projectsLandscape }
  },
  {
    name: "Pr0-777",
    link: "_blank",
    describe: "This is a sample of project",
    img: { projectsLandscape }
  }
];

export default class Project extends React.Component {
  render() {
    return (
      <Row>
        {projects.map((item, i) => (
          <Col key={i} className="project-col">
            <div className="project-info">
              <p className="project-name"><b>{item.name}</b></p>
              <p className="project-des">{item.describe}</p>
              <a href={item.link}>
                <p className="project-button"><b>View project</b></p>
              </a>
            </div>
          </Col>
        ))}
        </Row>
    );
  }
}
