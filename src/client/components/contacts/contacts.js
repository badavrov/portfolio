import ReactDOM from "react-dom";
import React from "react";
import { Container, Button, Media } from "reactstrap";
import "./contacts.css";

export default class Contacts extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container id="contacts-container" fluid={true}>
        <a className="contacts-work">Lets work together.</a>
        <Button>Contacts</Button>
        <a className="contacts-email">badavrow@gmail.com</a>

        <Media object src="/public/facebook.svg" />
        <Media object src="/public/instagram.svg" />
        <Media object src="/public/tumblr.svg" />
      </Container>
    );
  }
}
