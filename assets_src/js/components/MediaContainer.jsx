import React from 'react';
import axios from 'axios';

// Components
import Media from './Media.jsx';

export default class MediaContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    console.log('mediaContainer: componentWillMount');
    this.serverRequest = axios.get('/wp-json/wp/v2/media/'+this.props.id)
      .then((result) => {
        console.log(result.data);
        const d = result.data;
        this.setState({
          loading: false,
          url: d.media_details.sizes[this.props.size].source_url,
          title: d.title.rendered,
          alt_text: d.alt_text
        });
      });

  }

  render() {
    if(this.state.loading) {
      return <span className="media-placeholder"/>;
    } else {
      return <Media url={this.state.url} alt={this.state.alt_text} title={this.state.title} classes={this.props.classes}/>;
    }
  }
}
