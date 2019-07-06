import React from "react";
import { Container, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "./contacts.css";
import ContactsLogo from "./ContactsLogo";
import swal from "sweetalert";
import logoInsta from "../../../../public/instagram.svg";
import logoTumblr from "../../../../public/tumblr.svg";
import logoFbook from "../../../../public/facebook.svg";

export default class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      email: {
        recipient: "badavrow@gmail.com",
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
    if (!email.subject) {
      sweetAlert('No subject!', 'Seems like you havent entered a subject...', 'warning', {button:'Okay'})
    }
    if (!email.text) {
      sweetAlert('No text!', 'Seems like you havent entered a text...', 'warning', {button:'Okay'})
    } else if(email.subject && email.text){
    /* Alternative for GH-pages */
    window.open( String( `mailto:badavrow^gmail.com?subject=${email.subject}&body=${email.text}`).replace('^', '@'));

    /* --- this doesnt work in Github pages because private api key cant be deployed in public ---
      fetch(
        `/api/send-email?recipient=${email.recipient}&sender=${
          email.sender
        }&subject=${email.subject}&text=${email.text}`
      )
        .then(res => sweetAlert('Email send!', 'Thank you for the email...', 'success', {button:'Okay'}))
        .catch(err => err.json());
    
    */
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
                  <Label className="email-info" for="email-subject">
                    Subject:
                  </Label>
                  <Input
                    type="text"
                    id="email-subject"
                    className="email-input text-center"
                    placeholder="Selling an old Lada"
                    required
                    onChange={e =>
                      this.setState({
                        email: { ...email, subject: e.target.value }
                      })
                    }
                  />
                </FormGroup>
                  <Label className="email-info" for="email-textarea">
                    Message:
                  </Label>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="text"
                    id="email-textarea"
                    className="email-input text-center"
                    placeholder="Hey Denislav, i am selling an old Lada. Reply if interested..."
                    required
                    onChange={e =>
                      this.setState({
                        email: { ...email, text: e.target.value }
                      })
                    }
                  />
                </FormGroup>
                  <button className="contacts-button" onClick={this.sendEmail}>Send email</button>
              </Form>
            </Container>
          </Col>
        </Row>
        <Row className="contacts-row">
          <Col>
            <a href="mailto:badavrow@gmail.com">
              <p className="contacts-email">badavrow@gmail.com</p>
            </a>
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
