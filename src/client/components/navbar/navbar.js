import ReactDOM from 'react-dom';
import React from 'react';
import { Container } from 'reactstrap';
import './navbar.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <Container fluid={true} id="navbar-container">
        <a href="" className="menu-link">About</a>
        <a href="" className="menu-link">Work</a>
        <a href="" className="menu-link">Contacts</a>
      </Container>
    )
  }
}
