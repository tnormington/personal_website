import React from 'react';
import axios from 'axios';

import Category from './Category.jsx';


export default class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null
    };
  }
  componentWillMount() {
    console.log('componentWillMount');
    console.log('xhr going out to: '+'/wp-json/wp/v2/project_categories/'+this.props.id);
    this.serverRequest = axios.get('/wp-json/wp/v2/project_categories/'+this.props.id)
      .then((result) => {
        console.log(result);
        this.setState({
          category: result.data
        });
      });
  }
  componentWillUnmount() {
    // this.serverRequest.abort();
  }
  render() {
    if(this.state.category) {
      return <Category data={this.state.category}/>
    } else {
      return null
    }
  }
}
