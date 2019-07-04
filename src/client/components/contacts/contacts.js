import React from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";
import "./contacts.css";
import ContactsLogo from "./ContactsLogo";
import swal from "sweetalert"
import logoInsta from "../../../../public/instagram.svg";
import logoTumblr from "../../../../public/tumblr.svg";
import logoFbook from "../../../../public/facebook.svg";

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

sweetAlert(title, text, icon, button){
    swal({
      title: title,
      text: text,
      icon: icon,
      button: button,
    });
}


  sendEmail = event => {
    event.preventDefault();
    const { email } = this.state;
    if (!email.sender) {
      sweetAlert('No email!', 'Seems like you havent entered an email...', 'warning', {button:'Okay'})
    }
    if (!email.subject) {
      sweetAlert('No subject!', 'Seems like you havent entered a subject...', 'warning', {button:'Okay'})
    }
    if (!email.text) {
      sweetAlert('No text!', 'Seems like you havent entered a text...', 'warning', {button:'Okay'})
    } else {
      fetch(
        `/api/send-email?recipient=${email.recipient}&sender=${
          email.sender
        }&subject=${email.subject}&text=${email.text}`
      )
        .then(res => sweetAlert('Email send!', 'Thank you for the email...', 'success', {button:'Okay'}))
        .catch(err => err.json());
    }
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
        <Row className="contacts-row">
          <Col>
            <ContactsLogo
              link={"https://www.facebook.com/denials.basavriv/"}
              logoPath={logoFbook}
            />
            <ContactsLogo
              link={"https://www.instagram.com/denislavbadavrov/"}
              logoPath={logoInsta}
            />
            <ContactsLogo
              link={"https://denislavbadavrov.tumblr.com/"}
              logoPath={logoTumblr}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}