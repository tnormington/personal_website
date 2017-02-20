import React from 'react';
// import axios from 'axios';

// Components
import CategoryContainer from './CategoryContainer.jsx';

export default class Project extends React.Component {

  generateCategories(category) {
    console.log('generating categories for: '+category);
    return (
      <CategoryContainer id={category} key={category}/>
    )
  }
  render() {
    return (
      <div className="project">
        { this.props.title &&
          <h1>{this.props.title}</h1>
        }
        { this.props.categories &&
          this.props.categories.map(this.generateCategories)
        }
        { this.props.content &&
          <section className="project__content" dangerouslySetInnerHTML={{__html: this.props.content}}/>
        }
      </div>
    )
  }
}
