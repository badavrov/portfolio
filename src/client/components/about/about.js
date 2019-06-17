import ReactDOM from "react-dom";
import React from "react";
import { Container, Media } from "reactstrap";
import "./about.css";

export default class App extends React.Component {

  render() {
    return (
      <Container id="about-container" fluid={true}>
        <Container id="about-photo">
          <Media object src="/public/about-photo.png" />
        </Container>
        <Container id="about-info">
          <Container id="about-about">
          <div className="about-header-div"><p className="about-header">ABOUT ME</p></div>
            <p className="about-text about-intro">
              Glad to see you on board digital traveler, you would probably like
              to know more about me before scrolling down... so let me introduce.
            </p>
            <p className="about-h1">History</p>
            <p className="about-text">
              My name is Denislav Badavrov, I was born in 1996. Raised in Dimitrovgrad,
              small and peaceful town in Bulgaria. Graduated Language School "Dr.Ivan Bogorov"
              and moved to Plovdiv to continue my education as an Bussiness Informatic at
              faculty of mathematics and informatics in Plovdiv University "Paisiy Hilendarski".
            </p>
            
            <p className="about-h1">Introduction</p>
            <p className="about-text">
              Intergalactic web pirate who is
              bombing the World Wide Web with ideas and creativity. My workflow
              is very simple, first i am making the design, we discuss it, then i
              am doing some abra cadabra magic called JavaScript to make it
              live. React on the front, Node on the back! I am very adaptable
              pirate, we can discuss other technologies if you want to!</p>
          </Container>
          <Container id="about-skills">
            <p className="about-header">SKILLS</p>
            <Media object src="/public/skills.svg" className="img-fluid"  />
          </Container>
        </Container>
      </Container>
    );
  }
}
