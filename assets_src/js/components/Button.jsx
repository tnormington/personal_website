import React from 'react';

// Components

// Pages


export default class Button extends React.Component {
  render() {
    return (
      <button className={`button ${this.props.class}`} value={this.props.text} onClick={this.props.onclick}>
        {this.props.text || this.props.children}
      </button>
    )
  }
}
