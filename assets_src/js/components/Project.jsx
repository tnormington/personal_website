import React from 'react';
// import axios from 'axios';

// Components
import CategoryContainer from './CategoryContainer.jsx';
import MediaContainer from './MediaContainer.jsx';
import KeywordContainer from './KeywordContainer.jsx';

export default class Project extends React.Component {

  generateCategory(category) {
    console.log('generating categories for: '+category);
    return (
      <CategoryContainer id={category} key={category}/>
    )
  }
  generateKeyword(keyword, index) {
    // if(index > 0) {

    // } else {
      return (
        <KeywordContainer id={keyword} key={keyword}/>
      )
    // }
  }
  render() {
    return (
      <div className={`project ${this.props.classNames}`}>
        <div className="project__featured-media">
          { this.props.featured_media &&
            <MediaContainer size="medium" id={this.props.featured_media}/>
          }
        </div>
        <div className="project__details">
          { this.props.title &&
            <h3 className="project__details__title">{this.props.title}</h3>
          }
          { this.props.categories &&
            this.props.categories.map(this.generateCategory)
          }
          { this.props.keywords &&
            <div className="project__details__keywords">
              {this.props.keywords.map(this.generateKeyword)}
            </div>
          }
          { this.props.content && false &&
            <section className="project__content" dangerouslySetInnerHTML={{__html: this.props.content}}/>
          }
        </div>
        <svg className="project__bottom-angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="white" points="0,100 100,0 100,100"/>
        </svg>
      </div>
    )
  }
}
