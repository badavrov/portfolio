import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "./Logo";
import "./header.css";
import logoSvg from "/public/logo.svg"

export default class Header extends React.Component {
  render() {
    return (
      <Container id="header-container" fluid={true}>
        <Row>
          <Col>
            <picture>
              <img src={logoSvg} className="img-fluid" id="logo" />
            </picture>
          </Col>
          <Col>
            <Logo
              link={"https://github.com/badavrov"}
              logoPath={"/public/github.svg"}
            />
            <Logo
              link={"https://www.linkedin.com/in/denislav-badavrov-17b734164/"}
              logoPath={"/public/linkedin.svg"}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
