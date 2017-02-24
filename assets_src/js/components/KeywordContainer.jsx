import React from 'react';
import axios from 'axios';

import Keyword from './Keyword.jsx';


export default class KeywordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: null
    };
  }
  componentWillMount() {
    console.log('componentWillMount');
    console.log('xhr going out to: '+'/wp-json/wp/v2/project_categories/'+this.props.id);
    this.serverRequest = axios.get('/wp-json/wp/v2/project_keywords/'+this.props.id)
      .then((result) => {
        console.log(result);
        this.setState({
          keyword: result.data
        });
      });
  }
  componentWillUnmount() {
    // this.serverRequest.abort();
  }
  render() {
    if(this.state.keyword) {
      return <Keyword data={this.state.keyword}/>
    } else {
      return null
    }
  }
}
