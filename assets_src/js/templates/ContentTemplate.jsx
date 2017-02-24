import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

// Components
// import Topbar from '../components/Topbar.jsx';
import Button from '../components/Button.jsx';

// Pages


export default class BaseTemplate extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="content">
          {this.props.children}
        </section>
      </div>
    )
  }
}
