import React from 'react';
import {Route, Link, browserHistory, IndexRoute} from 'react-router';

// Components
import MainMenu from '../components/MainMenu.jsx';

// Templates
import ContentTemplate from '../templates/ContentTemplate.jsx';

// Pages
import Home from '../pages/Home.jsx';

export default class BaseTemplate extends React.Component {
    render() {
        return (
                <div className="main-wrapper">
                    <section className="sidebar">
                        <MainMenu/>
                    </section>
                    {this.props.children}
                </div>
        )
    }
}
