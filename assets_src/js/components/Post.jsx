import React from 'react';
// import axios from 'axios';

// Components
// import CategoryContainer from './CategoryContainer.jsx';
// import MediaContainer from './MediaContainer.jsx';
// import KeywordContainer from './KeywordContainer.jsx';

export default class Post extends React.Component {

  // generateCategory(category) {
  //   console.log('generating categories for: '+category);
  //   return (
  //     <CategoryContainer id={category} key={category}/>
  //   )
  // }
  // generateKeyword(keyword, index) {
  //   // if(index > 0) {
  //
  //   // } else {
  //     return (
  //       <KeywordContainer id={keyword} key={keyword}/>
  //     )
  //   // }
  // }
  render() {
    return (
      <div className={`post ${this.props.classNames}`}>
          { this.props.title &&
            <h3 className="post__title">{this.props.title}</h3>
          }
          { this.props.categories &&
            this.props.categories.map(this.generateCategory)
          }
          { this.props.keywords &&
            <div className="post__keywords">
              {this.props.keywords.map(this.generateKeyword)}
            </div>
          }
          { this.props.content && false &&
            <section className="post__content" dangerouslySetInnerHTML={{__html: this.props.content}}/>
          }
      </div>
    )
  }
}
