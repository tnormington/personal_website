import React from 'react';
import { Router, Route, Link } from 'react-router';


export default class MainMenu extends React.Component {
  render() {
    return(
      <section className="main-menu-wrapper">
        <ul className="main-menu">
          <li className="main-menu__link">
            <Link to="/" activeClassName="active">Home</Link>
          </li>
          <li className="main-menu__link">
            <Link to="/portfolio" activeClassName="active">Portfolio</Link>
          </li>
          <li className="main-menu__link">
            <Link to="/blog" activeClassName="active">Blog</Link>
          </li>
        </ul>
      </section>
    )
  }
}
