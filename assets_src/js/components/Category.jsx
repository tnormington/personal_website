import React from 'react';

export default class Category extends React.Component {
  render() {
    return (
      <span className={"category " + this.props.data.name.toLowerCase()}>
        {this.props.data.name}
      </span>
    )
  }
}
