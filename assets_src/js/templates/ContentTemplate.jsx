import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

// Components

// Pages


export default class BaseTemplate extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <nav className="topbar-nav">
          <h3>work in progress</h3>
        </nav>
        <section className="content">
          {this.props.children}
        </section>
      </div>
    )
  }
}
