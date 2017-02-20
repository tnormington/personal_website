import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }
  componentDidMount() {
    console.log('portfolio: componentDidMount');
    this.serverRequest = axios.get('wp-json/wp/v2/projects/')
    .then((result) => {
      console.log(result.data);
      this.setState({
        projects: result.data
      });
    });
  }

  componentWillUnmount() {
    // this.serverRequest.abort();
  }
  render() {
    let projects = null;
    if(this.state.projects != null) {
      projects = this.state.projects.map(function(project, i) {
        return (
          <div className="item" key={project.id}>
            <h3><Link to={'/portfolio/'+project.id}>{project.title.rendered}</Link></h3>
          </div>
        )
      });
    }
    return (
      <div className="portfolio-items">
        { projects }
      </div>
    )
  }
}
