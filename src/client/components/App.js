import ReactDOM from "react-dom";
import React from "react";
import { Container } from "reactstrap";
import Header from "./header/header";
import Footer from "./footer/footer";
import Intro from './intro/intro';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Container id="firstpage-container" fluid={true} >
          <Header />
          <Intro />
        <Footer />
      </Container>
    );
  }
}
