
import React from 'react';

import styles from './ExperienceWork.css';

class ExperienceWork extends React.Component {
  render () {
    return <article className="work">
      {this.props.experience.references.map((reference, i) => {
        return <div className="reference" key={i}>
          <a href={reference.url}>Referentie: {reference.name} – {reference.jobTitle}</a>
        </div>;
      })}
      <h3 className="work__name">{this.props.experience.name}</h3>
      <p className="work__meta">
        {this.props.experience.jobTitle}
      </p>
      <p className="work__meta">
        {this.props.experience.duur} {this.props.experience.plaats !== undefined ? '— ' + this.props.experience.plaats : ''}
        { this.props.experience.number_of_projects > 1 ? <span> — {this.props.experience.number_of_projects} projecten</span> : <span/> }
        &nbsp;
        {this.props.experience.skills.map((skill, i) => {
          return <span key={i}> <span className="tag">{skill}</span></span>;
        })}
        {/* Optional experience url */}
        {this.props.experience.url !== undefined ?
        <a className="btn-goto" href={this.props.experience.url} target="_blank"><span className="button-goto__text">Website</span><i className="icon-link-out"></i></a> : ''}
      </p>
      <p className="work__description" >
        {this.props.experience.description}
      </p>
      { this.props.experience.projects.length > 0 ?
          <ul className="work__projects">
            { this.props.experience.projects.map((project, i) => {
              return <li className="work__projects__project" key={i}>
                <div className="project">
                  <h5 className="project__name">
                    {project.name}
                  </h5>
                  <span className="project__skills">
                    {project.skills.map((skill, i) => {
                      return <span key={i}><span className="tag">{skill}</span> </span>
                    })}
                    {/* Optional website url */}
                    {project.url !== '' && project.url !== undefined ? <a className="btn-goto" href={project.url} target="_blank">
                      <span className="button-goto__text">Website</span><i className="icon-link-out"></i>
                    </a> : <span/> }
                    {/* Optional git(hub) url */}
                    {project.git !== '' && project.git !== undefined ?
                      <a className="btn-goto" href={project.git} target="_blank">
                        <span>GitHub</span>
                        <i className="icon-code"></i>
                      </a>
                      : ''
                    }
                  </span>
                </div>
              </li>;
            }) }
          </ul>
          :
          <span/>
      }
    </article>;
  }
}

export default ExperienceWork;
