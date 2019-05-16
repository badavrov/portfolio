import ReactDOM from "react-dom";
import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Media,
  Row,
  Col
} from "reactstrap";
import "./contacts.css";

export default class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      email: {
        recipient: "badavrow@gmail.com",
        sender: "",
        subject: "",
        text: ""
      }
    };
  }

  sendEmail = () => {
    const { email } = this.state;
    console.log(email);
    fetch(
      `/api/send-email?recipient=${email.recipient}&sender=${
        email.sender
      }&subject=${email.subject}&text=${email.text}`
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const { email } = this.state;
    return (
      <Container id="contacts-container" fluid={true}>
        <Row className="contacts-row">
          <Col>
            <p className="contacts-work">Lets work together.</p>
          </Col>
        </Row>
        <Row className="contacts-row">
          <Col>
            <Container id="sendemail-container">
              <Form>
                <FormGroup>
                  <Label className="email-info" for="email-sender">
                    Your email:
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email-sender"
                    className="email-input text-center"
                    placeholder="daenerys.targaryen@gmail.com"
                    onChange={e =>
                      this.setState({
                        email: { ...email, sender: e.target.value }
                      })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="email-info" for="email-subject">
                    Subject:
                  </Label>
                  <Input
                    type="text"
                    id="email-subject"
                    className="email-input text-center"
                    placeholder="Purge an entire city"
                    onChange={e =>
                      this.setState({
                        email: { ...email, subject: e.target.value }
                      })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="text"
                    id="email-textarea"
                    className="email-input text-center"
                    placeholder="Hey Denislav, i heard you are bombing the world wide web, can you bomb a city for me?"
                    onChange={e =>
                      this.setState({
                        email: { ...email, text: e.target.value }
                      })
                    }
                  />
                </FormGroup>

                <button className="contacts-button" onClick={this.sendEmail}>
                  Send email
                </button>
              </Form>
            </Container>
          </Col>
        </Row>
        <Row className="contacts-row">
          <Col>
            <p className="contacts-email">badavrow@gmail.com</p>
            <p className="contacts-email">+359 089 5521 698</p>
          </Col>
        </Row>
        <Row className="contacts-row" />
        <Row className="contacts-row">
          <Col>
            <a
              href="https://www.facebook.com/denials.basavriv/"
              target="_blank"
            >
              <Media
                className="contacts-svg"
                object
                src="/public/facebook.svg"
              />
            </a>

            <a
              href="https://www.instagram.com/denislavbadavrov/"
              target="_blank"
            >
              <Media
                className="contacts-svg"
                object
                src="/public/instagram.svg"
              />
            </a>

            <a href="https://denislavbadavrov.tumblr.com/" target="_blank">
              <Media className="contacts-svg" object src="/public/tumblr.svg" />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
