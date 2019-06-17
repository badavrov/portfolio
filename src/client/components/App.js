import React from "react";
import { Container } from "reactstrap";
import Header from "./header/header";
import NavBar from "./navbar/navbar";
import Intro from "./intro/intro";
import About from "./about/about";
import Contacts from "./contacts/contacts";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Container id="main-container" fluid={true}>
      <Container id="opening-container" fluid={true}>
        <Header />
        <NavBar />
        <Intro />
      </Container>
        <About />
        <Contacts />
      </Container>
    );
  }
}
