import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

// Components
import ProjectContainer from '../components/ProjectContainer.jsx';
import Topbar from '../components/Topbar.jsx';
import Button from '../components/Button.jsx';

export default class Portfolio extends React.Component {

  generateProject(project, i) {
    console.log('generating project');
    console.log(project);
    let className = '';
    if(i % 2 === 0) {
      // odd element number
      className = 'odd';
    } else {
      className = 'even';
    }
    return (
      <ProjectContainer classNames={className} id={project.id} key={project.id}/>
    )
  }

  render() {
    return (
      <section className="portfolio">
        <Topbar>
          <Button text="Designed" class="designed topbar__button" />
          <Button text="Developed" class="developed topbar__button" />
          <Button class="button--icon">
            <i className="fa fa-fw fa-question"></i>
          </Button>
        </Topbar>
        { this.props.projects &&
          <div className="portfolio__projects">
            {this.props.projects.map(this.generateProject)}
          </div>
        }
      </section>
    )
  }
}
