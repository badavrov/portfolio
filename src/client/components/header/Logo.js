import React from "react";

export default class Logo extends React.Component {
  render() {
    return (
      <div>
        <picture>
          <a href={this.props.link} target="_blank">
            <img src={this.props.logoPath} className="img-fluid header-icons" />
          </a>
        </picture>
      </div>
    );
  }
}
