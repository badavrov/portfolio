import ReactDOM from "react-dom";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
      <Container id="header-container" fluid={true}>
        <Row>
          <Col>
            <picture>
              <img src="/public/logo.svg" className="img-fluid" id="logo" alt="..." />
            </picture>
          </Col>
          <Col>
            <picture>
              <img src="/public/github.svg" className="img-fluid header-icons" alt="..." />
            </picture>
            <picture>
              <img src="/public/linkedin.svg" className="img-fluid header-icons" alt="..." />
            </picture>
          </Col>
        </Row>
      </Container>
    );
  }
}
