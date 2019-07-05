import React from "react";

export default class Logo extends React.Component {
  render() {
    return (
      <picture>
          <a href={this.props.link} target="_blank">
            <img src={this.props.logoPath} className="logos"/>
          </a>
      </picture>
    );
  }
}
