import ReactDOM from "react-dom";
import React from "react";
import { Container } from "reactstrap";
import Header from "./header/header";
import NavBar from "./navbar/navbar";
import Intro from "./intro/intro";
import About from "./about/about";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("navbar-container").style.position = "sticky";  
      document.getElementById("navbar-container").style.position = "-webkit-sticky"; 
      document.getElementById("navbar-container").style.top = "0"; 
    }
  }

  render() {
    return (
      <Container id="main-container" fluid={true}>
      <Container id="opening-container" fluid={true}>
        <Header />
        <NavBar />
        <Intro />
      </Container>
        <About />
      </Container>
    );
  }
}
