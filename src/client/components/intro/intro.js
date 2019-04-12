import ReactDOM from 'react-dom';
import React from 'react';
import { Container, Fade } from 'reactstrap';

export default class Intro extends React.Component {
  render() {
    return (
      <Container>
                <Fade>
        <picture>
              <img src="/public/triangle.svg" className="img-fluid" alt="..." />
            </picture>
                </Fade>
      </Container>
    )
  }
}
