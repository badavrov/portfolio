import React from "react";
import { Media } from "reactstrap";

export default class ContactsLogo extends React.Component {
  render() {
    return (
        <picture>
          <a href={this.props.link} target="_blank">
            <Media src={this.props.logoPath} object className="contacts-svg" />
          </a>
        </picture>
    );
  }
}
