import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

// Templates
import BaseTemplate from './templates/BaseTemplate.jsx';
import ContentTemplate from './templates/ContentTemplate.jsx';

// Pages
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';

// Components
// import Project from './components/Project.jsx';
import ProjectContainer from './components/ProjectContainer.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={BaseTemplate}>
          <Route component={ContentTemplate}>
            <IndexRoute component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/portfolio/:id" component={ProjectContainer}/>
          </Route>
        </Route>
      </Router>
    )
  }
}


const app = document.getElementById('app');


window.onload = function() {
  ReactDOM.render(
    <App />,
    app
  );
};
