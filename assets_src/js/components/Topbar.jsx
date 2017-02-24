import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

// Components

// Pages


export default class Topbar extends React.Component {
  render() {
    return (
      <nav className="topbar">
        { this.props.children }
      </nav>
    )
  }
}
