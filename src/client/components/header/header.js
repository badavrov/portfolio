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
                <img src="/public/logo.svg" className="img-fluid" id="logo" />
            </picture>
          </Col>
          <Col>
            <picture>
              <a href="https://github.com/badavrov" target="_blank">
                <img
                  src="/public/github.svg"
                  className="img-fluid header-icons"
                />
              </a>
            </picture>
            <picture>
              <a href="https://www.linkedin.com/in/denislav-badavrov-17b734164/" target="_blank"> 
                <img
                  src="/public/linkedin.svg"
                  className="img-fluid header-icons"
                />
              </a>
            </picture>
          </Col>
        </Row>
      </Container>
    );
  }
}
