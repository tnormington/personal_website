import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

import Blog from './Blog.jsx';

export default class BlogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    };
  }
  componentWillMount() {
    console.log('portfolioContainer: componentWillMount');
    this.serverRequest = axios.get('wp-json/wp/v2/posts/')
    .then((result) => {
      console.log(result.data);
      this.setState({
        posts: result.data
      });
    });
  }

  componentWillUnmount() {
    // this.serverRequest.abort();
  }
  render() {
    // let projects = null;
    // if(this.state.projects != null) {
    //   projects = this.state.projects.map(function(project, i) {
    //     return (
    //       <div className="item" key={project.id}>
    //         <h3><Link to={'/portfolio/'+project.id}>{project.title.rendered}</Link></h3>
    //       </div>
    //     )
    //   });
    // }
    return (
      <Blog posts={this.state.posts}/>
    )
  }
}
