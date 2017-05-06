
import React from 'react';

import styles from './Skills.css';

class Skills extends React.Component {
  render() {
    return <section className="skills">
      <ul className="skills-container">
        {this.props.skills.map((skill, i) => {

          const colOffset = (skill.col * 2) ;
          const colWidth = 2 + Math.floor(((skill.exp / 5) * 2 * (skill.prominance || 1)));
          let colOffsetEnd = colOffset + colWidth;
              colOffsetEnd = colOffsetEnd > 20 ? 20 : colOffsetEnd;

          return <li
            className={`skill ___type-${skill.cat}`}
            title={skill.full}
            key={i}
            style={{
              fontWeight: skill.exp === 5 ? 600 : 400,
              fontSize: `${0.8 + (2.4 * skill.use * (skill.exp / 5) * (skill.prominance || 1))}rem`,
              gridColumn: `${colOffset} / ${colOffsetEnd}`,
              gridRowEnd: (skill.rowSpan ? `span ${skill.rowSpan}` : 'span / 2'),
            }}
          >
            {skill.name}
          </li>
        })}
      </ul>
      {/* OTHER APPROACH */}
      <ul className="skills-super">
        {this.props.skills.map((skill, i) => {
          return <li
            className={`skill ___type-${skill.cat}`}
            key={i}
            style={{
              fontSize: `${0.8 + (0.5 * skill.use * skill.exp)}em`,
            }}
          >
            {skill.name}
          </li>;
        })}
      </ul>
    </section>
  }
}

export default Skills;
