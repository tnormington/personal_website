import React from 'react';

export default class Keyword extends React.Component {
  render() {
    return (
      <span className={"keyword " + this.props.data.name.toLowerCase()}>
        {this.props.data.name}
      </span>
    )
  }
}
