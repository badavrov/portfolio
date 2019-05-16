import ReactDOM from "react-dom";
import React from "react";
import { Container } from "reactstrap";
import "./navbar.css";

export default class NavBar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const navBar = document.getElementById("navbar-container");
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 50) {
      navBar.style.position = "fixed";
      navBar.style.top = "0"; 
      navBar.style.padding = "0.6rem";
    }
    if(scrollTop < 50){
      navBar.style.padding = "1rem"; 
      navBar.style.position = "static";  
    }
  }

  render() {
    return (
      <Container fluid={true} id="navbar-container">
        <a href="#" className="menu-link">
          Home
        </a>
        <a href="#about-photo" className="menu-link">
          About
        </a>
        <a href="#contacts-container" className="menu-link">
          Contacts
        </a>
      </Container>
    );
  }
}
