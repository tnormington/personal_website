import React from 'react';
import axios from 'axios';


// Components
import Project from './Project.jsx';
// import CategoryContainer from './CategoryContainer.jsx';

export default class ProjectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('project: componentWillMount');
    this.serverRequest = axios.get('/wp-json/wp/v2/projects/'+this.props.params.id)
      .then((result) => {
        console.log(result.data);
        this.setState(result.data);
      });
  }
  componentWillUnmount() {
    // this.serverRequest.abort();
  }
  render() {
    if(this.state.title) {
      return (
        <Project
          title={this.state.title.rendered}
          content={this.state.content.rendered}
          categories={this.state.project_categories}
          keywords={this.state.project_keywords}
          />
      )
    } else {
      return null
    }
  }
}
