import React from 'react';
import axios from 'axios';


// Components
import Post from './Post.jsx';

export default class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('postcontainer: componentWillMount');
    this.serverRequest = axios.get('/wp-json/wp/v2/posts/'+this.props.id)
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
        <Post
          classNames={this.props.classNames}
          title={this.state.title.rendered}
          content={this.state.content.rendered}
          />
      )
    } else {
      return null
    }
  }
}
