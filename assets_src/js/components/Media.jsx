import React from 'react';


export default class Media extends React.Component {
  render() {
    return <img className={this.props.classes}src={this.props.url} alt={this.props.alt} title={this.props.title}/>;
  }
}
