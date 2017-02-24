import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

// Components
import PostContainer from '../components/PostContainer.jsx';

export default class Blog extends React.Component {

  generatePost(post, i) {
    console.log('generating post');
    console.log(post);
    let className = '';
    if(i % 2 === 0) {
      // odd element number
      className = 'odd';
    } else {
      className = 'even';
    }
    return (
      <PostContainer classNames={className} id={post.id} key={post.id}/>
    )
  }

  render() {
    return (
      <section className="blog">
        { this.props.posts &&
          this.props.posts.map(this.generatePost)
        }
      </section>
    )
  }
}
